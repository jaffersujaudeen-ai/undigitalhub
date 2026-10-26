import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { Pool } from "pg";
import { z } from "zod";

const app = express();
const port = Number(process.env.PORT || 4000);
const allowedOrigins = (process.env.CLIENT_ORIGIN || "http://localhost:5173")
  .split(",").map((value) => value.trim()).filter(Boolean);

app.use(helmet());
app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error("Origin is not allowed by CORS"));
  },
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));
app.use(express.json({ limit: "32kb" }));

const pool = process.env.DATABASE_URL
  ? new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.DATABASE_SSL === "true" ? { rejectUnauthorized: false } : undefined,
      max: 5,
      idleTimeoutMillis: 30000,
      connectionTimeoutMillis: 5000
    })
  : null;

const enquirySchema = z.object({
  name: z.string().trim().min(1).max(120),
  phone: z.string().trim().min(5).max(30),
  email: z.string().trim().max(200).email().nullable().optional().or(z.literal("")),
  service: z.string().trim().min(1).max(120),
  category: z.string().trim().max(200).optional(),
  budget: z.string().trim().max(80).optional(),
  timeline: z.string().trim().max(80).optional(),
  details: z.string().trim().max(4000).nullable().optional(),
  language: z.enum(["en", "ta"]).optional()
});

async function initializeDatabase() {
  if (!pool) {
    console.warn("DATABASE_URL is not configured. Enquiry database storage is disabled.");
    return;
  }
  await pool.query(`
    CREATE TABLE IF NOT EXISTS enquiries (
      id BIGSERIAL PRIMARY KEY,
      name VARCHAR(120) NOT NULL,
      phone VARCHAR(30) NOT NULL,
      email VARCHAR(200),
      service VARCHAR(120) NOT NULL,
      category VARCHAR(200),
      budget VARCHAR(80),
      timeline VARCHAR(80),
      details TEXT,
      language VARCHAR(2) DEFAULT 'en',
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);
  console.log("Database ready.");
}

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, databaseConfigured: Boolean(pool) });
});

app.post("/api/enquiries", async (req, res) => {
  const parsed = enquirySchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ ok: false, error: "Please check the enquiry fields.", issues: parsed.error.flatten() });
  }
  if (!pool) {
    return res.status(503).json({ ok: false, error: "Enquiry storage is not configured." });
  }
  const data = parsed.data;
  try {
    const result = await pool.query(
      `INSERT INTO enquiries (name, phone, email, service, category, budget, timeline, details, language)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING id, created_at`,
      [
        data.name, data.phone, data.email || null, data.service,
        data.category || null, data.budget || null, data.timeline || null,
        data.details || null, data.language || "en"
      ]
    );
    return res.status(201).json({ ok: true, enquiryId: result.rows[0].id, createdAt: result.rows[0].created_at });
  } catch (error) {
    console.error("Unable to save enquiry:", error);
    return res.status(500).json({ ok: false, error: "Unable to save enquiry right now." });
  }
});

initializeDatabase().then(() => {
  app.listen(port, () => console.log(`UN Digital Hub API listening on http://localhost:${port}`));
}).catch((error) => {
  console.error("Database initialization failed:", error);
  process.exit(1);
});

process.on("SIGTERM", async () => {
  await pool?.end();
  process.exit(0);
});
