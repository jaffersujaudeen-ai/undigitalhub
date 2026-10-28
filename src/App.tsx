import { FormEvent, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Check, ChevronDown,
  Globe2, Menu, Sparkles, X, ExternalLink, Send, ShieldCheck,
  Smartphone, Layers3, Clock3, Mail, Instagram, Linkedin
} from "lucide-react";
import { services } from "./data/services";

const WHATSAPP_NUMBER = "919487838963";
const BUSINESS_EMAIL = "undigitalhub13@gmail.com";
const API_BASE = (import.meta.env.VITE_API_URL as string | undefined)?.replace(/\/$/, "") ?? "";
const FOUNDER_IMAGE = "/founder.png";

type Lang = "en" | "ta";

const copy = {
  en: {
    announcement: "Independent digital studio for ambitious ideas",
    navServices: "Services", navWork: "Selected work", navApproach: "Our approach", navFounder: "Founder", navStart: "Start a project",
    eyebrow: "DIGITAL STRATEGY · DESIGN · DEVELOPMENT",
    hero1: "Good ideas", hero2: "deserve a", hero3: "digital presence.",
    heroDescription: "We help businesses, founders and students turn ideas into thoughtful digital experiences, useful tools and polished presentations.",
    explore: "Explore our services", seeWork: "See selected work", proof: "Thoughtfully made.", proofSub: "Clear scope. Practical solutions. Personal attention.",
    bandTitle: "SMALL STUDIO. BIG ATTENTION TO DETAIL.", bandText: "From your first online presence to your next big idea, let's make it clear, credible and memorable.",
    what: "WHAT WE DO", servicesTitle: "Digital services.", servicesSub: "Designed around you.", serviceIntro: "Choose a service to explore what's included. Every project starts with understanding what you need and what success looks like.",
    priceRange: "INDICATIVE PRICE RANGE", discuss: "Discuss this service", priceNote: "Listed prices are indicative. Complex projects and custom requirements receive a separate quotation.",
    workEyebrow: "SELECTED WORK", workTitle: "Ideas made", workSub: "visible.", workIntro: "A growing collection of business websites, personal portfolios and digital product showcases.",
    work1: "RVG Bakes", work1type: "BUSINESS WEBSITE", work2: "Personal brand experience", work2type: "PERSONAL PORTFOLIO", work3: "LifeX Healthcare", work3type: "STARTUP WEBSITE", viewProject: "View live project",
    approachEyebrow: "A CLEAR PROCESS", approachTitle: "Simple to start.", approachSub: "Thoughtful by design.",
    step1: "Tell us your idea", step1d: "Share your goal, requirements, timeline and budget.", step2: "Shape the scope", step2d: "We review your needs and confirm deliverables and pricing.", step3: "We create together", step3d: "We build the agreed solution and share progress for feedback.", step4: "Review and deliver", step4d: "Review the result and receive the agreed final files or links.",
    founderEyebrow: "THE PERSON BEHIND THE WORK", founderTitle: "Built on curiosity.", founderSub: "Driven by ideas.", founderBio: "UN Digital Hub is an independent digital initiative focused on helping businesses, founders and students present their ideas clearly and build useful digital experiences. Our approach is practical, collaborative and detail-focused.",
    founderNote: "Founder portrait will be added here.", founderProfile: "Founder profile",
    contactEyebrow: "LET'S GET STARTED", contactTitle: "Tell us what", contactSub: "you have in mind.", contactIntro: "Share a few details. We'll use them to understand your needs and prepare the next steps.",
    yourDetails: "Your details", requirements: "Project requirements", name: "Full name", phone: "Phone number", email: "Email address", chooseService: "Choose a service", whatNeed: "What do you need?", chooseSpecific: "Choose a specific service", budget: "Estimated budget", chooseBudget: "Choose budget", timeline: "Preferred timeline", timelineDiscuss: "Discuss with me", details: "Tell us more", detailsPlaceholder: "Describe your idea, features, reference links or anything we should know.", submit: "Prepare WhatsApp enquiry", privacy: "Your enquiry opens in WhatsApp for you to review and send. No message is sent automatically.",
    finalEyebrow: "HAVE AN IDEA IN MIND?", finalTitle: "Let's make it happen.", finalButton: "Start your project", footerText: "Thoughtful digital solutions for businesses, people and ideas.", servicesLabel: "Services", workLabel: "Work", contactLabel: "Contact", top: "Back to top",
    faqTitle: "A few useful answers", faq1: "How do I place an order?", faq1a: "Choose a service, share your requirements in the enquiry form and review the prefilled message in WhatsApp before sending it.", faq2: "How much does a service cost?", faq2a: "The prices shown are indicative starting ranges. The final quotation depends on the scope, content and requirements.", faq3: "How long will my project take?", faq3a: "Many small deliverables can be completed in 1–3 days after requirements and content are confirmed. Larger work needs a separate timeline.", faq4: "Do you accept custom projects?", faq4a: "Yes. Choose the closest service and describe your requirements. We will discuss the scope and quotation.",
    privacyTitle: "Privacy", termsTitle: "Terms", refundTitle: "Refund & revision", legalDraft: "Draft policy: project scope, timelines, revisions, refunds and personal-data handling must be confirmed in writing before work starts. This page is an editable starting point, not legal advice.",
    sent: "Your enquiry is ready to open in WhatsApp.", storageNote: "Enquiry storage is not configured, but WhatsApp still works.", error: "We couldn't save this enquiry online. You can still continue through WhatsApp.", required: "Please complete your name and phone number.", openWhatsApp: "Continue to WhatsApp"
  },
  ta: {
    announcement: "புதிய யோசனைகளுக்கான டிஜிட்டல் ஸ்டுடியோ",
    navServices: "சேவைகள்", navWork: "எங்கள் பணிகள்", navApproach: "எங்கள் முறை", navFounder: "நிறுவனர்", navStart: "திட்டத்தை தொடங்கு",
    eyebrow: "டிஜிட்டல் உத்தி · வடிவமைப்பு · உருவாக்கம்",
    hero1: "நல்ல யோசனைகள்", hero2: "சிறந்த", hero3: "டிஜிட்டல் அடையாளம் பெறட்டும்.",
    heroDescription: "வணிகங்கள், நிறுவுநர்கள் மற்றும் மாணவர்கள் தங்கள் யோசனைகளை பயனுள்ள டிஜிட்டல் அனுபவங்களாக மாற்ற உதவுகிறோம்.",
    explore: "சேவைகளைப் பாருங்கள்", seeWork: "எங்கள் பணிகள்", proof: "கவனமாக உருவாக்கப்பட்டது.", proofSub: "தெளிவான திட்டம். பயனுள்ள தீர்வுகள். தனிப்பட்ட கவனம்.",
    bandTitle: "சிறிய குழு. விவரங்களில் பெரிய கவனம்.", bandText: "உங்கள் முதல் இணையதளத்திலிருந்து அடுத்த பெரிய யோசனை வரை, தெளிவாகவும் நம்பகமாகவும் உருவாக்குவோம்.",
    what: "எங்கள் சேவைகள்", servicesTitle: "டிஜிட்டல் சேவைகள்.", servicesSub: "உங்களுக்காக வடிவமைக்கப்பட்டவை.", serviceIntro: "ஒவ்வொரு சேவையிலும் உள்ளவற்றைப் பார்க்க தேர்வு செய்யுங்கள்.",
    priceRange: "தோராயமான விலை", discuss: "இந்த சேவையைப் பற்றி பேசுங்கள்", priceNote: "காட்டப்பட்ட விலைகள் தோராயமானவை. கூடுதல் தேவைகளுக்கு தனி விலை வழங்கப்படும்.",
    workEyebrow: "தேர்ந்தெடுக்கப்பட்ட பணிகள்", workTitle: "யோசனைகள்", workSub: "நிஜமாகின்றன.", workIntro: "வணிக இணையதளங்கள், தனிப்பட்ட போர்ட்ஃபோலியோக்கள் மற்றும் டிஜிட்டல் தயாரிப்புகள்.",
    work1: "RVG Bakes", work1type: "வணிக இணையதளம்", work2: "தனிப்பட்ட பிராண்ட்", work2type: "தனிப்பட்ட போர்ட்ஃபோலியோ", work3: "LifeX Healthcare", work3type: "ஸ்டார்ட்அப் இணையதளம்", viewProject: "இணையதளத்தைப் பாருங்கள்",
    approachEyebrow: "எளிய செயல்முறை", approachTitle: "தொடங்குவது எளிது.", approachSub: "கவனமாக வடிவமைக்கப்பட்டது.",
    step1: "உங்கள் யோசனையைப் பகிருங்கள்", step1d: "உங்கள் இலக்கு, தேவைகள், காலக்கெடு மற்றும் பட்ஜெட்டைச் சொல்லுங்கள்.", step2: "திட்டத்தைத் தெளிவுபடுத்துவோம்", step2d: "தேவைகளைப் பார்த்து வேலை மற்றும் விலையை உறுதி செய்வோம்.", step3: "ஒன்றாக உருவாக்குவோம்", step3d: "ஒப்புக்கொண்ட தீர்வை உருவாக்கி முன்னேற்றத்தைப் பகிர்வோம்.", step4: "சரிபார்த்து பெறுங்கள்", step4d: "முடிவைச் சரிபார்த்து இறுதி கோப்புகள் அல்லது இணைப்புகளைப் பெறுங்கள்.",
    founderEyebrow: "இந்தப் பணிக்குப் பின்னால் உள்ளவர்", founderTitle: "ஆர்வத்தில் உருவானது.", founderSub: "யோசனைகளால் இயக்கப்படுகிறது.", founderBio: "UN Digital Hub என்பது வணிகங்கள், நிறுவுநர்கள் மற்றும் மாணவர்கள் தங்கள் யோசனைகளைத் தெளிவாகக் காட்டவும் பயனுள்ள டிஜிட்டல் அனுபவங்களை உருவாக்கவும் உதவும் ஒரு டிஜிட்டல் முயற்சி.",
    founderNote: "நிறுவனரின் புகைப்படம் பின்னர் சேர்க்கப்படும்.", founderProfile: "நிறுவனர் சுயவிவரம்",
    contactEyebrow: "தொடங்குவோம்", contactTitle: "உங்கள் யோசனையை", contactSub: "எங்களிடம் சொல்லுங்கள்.", contactIntro: "உங்கள் தேவைகளைப் புரிந்துகொள்ள சில விவரங்களைப் பகிருங்கள்.",
    yourDetails: "உங்கள் விவரங்கள்", requirements: "திட்டத் தேவைகள்", name: "முழுப் பெயர்", phone: "தொலைபேசி எண்", email: "மின்னஞ்சல்", chooseService: "சேவையைத் தேர்வு செய்யுங்கள்", whatNeed: "என்ன தேவை?", chooseSpecific: "குறிப்பிட்ட சேவையைத் தேர்வு செய்யுங்கள்", budget: "பட்ஜெட்", chooseBudget: "பட்ஜெட்டைத் தேர்வு செய்யுங்கள்", timeline: "காலக்கெடு", timelineDiscuss: "பேசி முடிவு செய்யலாம்", details: "மேலும் விவரங்கள்", detailsPlaceholder: "உங்கள் யோசனை, அம்சங்கள் அல்லது குறிப்பு இணைப்புகளைச் சொல்லுங்கள்.", submit: "WhatsApp விசாரணையைத் தயாரிக்கவும்", privacy: "WhatsApp-ல் செய்தியைப் பார்த்து நீங்கள் அனுப்பலாம். தானாகச் செய்தி அனுப்பப்படாது.",
    finalEyebrow: "உங்களிடம் ஒரு யோசனை உள்ளதா?", finalTitle: "அதை நனவாக்குவோம்.", finalButton: "திட்டத்தைத் தொடங்கு", footerText: "வணிகங்கள், மக்கள் மற்றும் யோசனைகளுக்கான டிஜிட்டல் தீர்வுகள்.", servicesLabel: "சேவைகள்", workLabel: "பணிகள்", contactLabel: "தொடர்பு", top: "மேலே செல்ல",
    faqTitle: "அடிக்கடி கேட்கப்படும் கேள்விகள்", faq1: "ஆர்டரை எப்படி தொடங்குவது?", faq1a: "சேவையைத் தேர்வு செய்து தேவைகளை நிரப்பி, WhatsApp செய்தியைச் சரிபார்த்து அனுப்புங்கள்.", faq2: "சேவையின் விலை என்ன?", faq2a: "காட்டப்பட்ட விலைகள் தொடக்க வரம்புகள். இறுதி விலை தேவைகளைப் பொறுத்தது.", faq3: "எவ்வளவு நேரம் ஆகும்?", faq3a: "தேவைகள் மற்றும் உள்ளடக்கம் உறுதியான பிறகு சிறிய வேலைகள் பல 1–3 நாட்களில் முடிக்கப்படலாம்.", faq4: "தனிப்பயன் திட்டங்களை ஏற்கிறீர்களா?", faq4a: "ஆம். பொருத்தமான சேவையைத் தேர்வு செய்து உங்கள் தேவைகளை விளக்குங்கள்.",
    privacyTitle: "தனியுரிமை", termsTitle: "விதிமுறைகள்", refundTitle: "பணம் திரும்பப் பெறுதல் மற்றும் திருத்தங்கள்", legalDraft: "வரைவு கொள்கை: வேலை தொடங்கும் முன் திட்டம், காலக்கெடு, திருத்தங்கள், பணத்திருப்பி மற்றும் தனிப்பட்ட தரவு பயன்பாடு எழுத்தில் உறுதி செய்யப்பட வேண்டும். இது சட்ட ஆலோசனை அல்ல.",
    sent: "உங்கள் விசாரணை WhatsApp-ல் திறக்கத் தயாராக உள்ளது.", storageNote: "ஆன்லைன் சேமிப்பு அமைக்கப்படவில்லை; WhatsApp தொடர்ந்து செயல்படும்.", error: "விசாரணையை ஆன்லைனில் சேமிக்க முடியவில்லை. WhatsApp வழியாகத் தொடரலாம்.", required: "உங்கள் பெயர் மற்றும் தொலைபேசி எண்ணை நிரப்புங்கள்.", openWhatsApp: "WhatsApp-க்கு தொடரவும்"
  }
};

function App() {
  const [lang, setLang] = useState<Lang>("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(services[0].id);
  const [status, setStatus] = useState("");
  const [form, setForm] = useState({
    name: "", phone: "", email: "", service: services[0].id,
    category: "", budget: "", timeline: "Discuss with me", details: ""
  });
  const t = copy[lang];
  const selectedService = useMemo(() => services.find(s => s.id === form.service) ?? services[0], [form.service]);
  const active = services.find(s => s.id === activeService) ?? services[0];

  const updateForm = (key: keyof typeof form, value: string) => {
    setForm(current => ({ ...current, [key]: value, ...(key === "service" ? { category: "" } : {}) }));
  };

  async function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setStatus(t.required);
      return;
    }
    const payload = {
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim() || null,
      service: selectedService.title,
      category: form.category || "Consultation",
      budget: form.budget || "To be discussed",
      timeline: form.timeline,
      details: form.details.trim() || null,
      language: lang
    };
    if (API_BASE) {
      try {
        const response = await fetch(`${API_BASE}/api/enquiries`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
        if (!response.ok) {
          setStatus(t.error);
        }
      } catch {
        setStatus(t.error);
      }
    }
    const message = [
      "UN DIGITAL HUB — NEW ENQUIRY",
      `Name: ${payload.name}`,
      `Phone: ${payload.phone}`,
      `Email: ${payload.email || "Not provided"}`,
      `Service: ${payload.service}`,
      `Requirement: ${payload.category}`,
      `Budget: ${payload.budget}`,
      `Preferred timeline: ${payload.timeline}`,
      `Details: ${payload.details || "Not provided"}`
    ].join("\n");
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setStatus(t.sent);
  }

  const navLinks = [
    [t.navServices, "#services"], [t.navWork, "#work"], [t.navApproach, "#approach"], [t.navFounder, "#founder"]
  ];

  return (
    <div className="site-shell" lang={lang === "ta" ? "ta" : "en"}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="announcement"><span className="status-dot" />{t.announcement}<span className="announcement-separator">/</span> India</div>
      <header className="nav-wrap">
        <a className="brand" href="#home" aria-label="UN Digital Hub home">
  <img className="brand-logo" src="/un-logo.png" alt="UN Digital Hub" />
  <span className="brand-copy">
    <strong>DIGITAL HUB</strong>
    <small>YOUR DIGITAL GROWTH PARTNER</small>
  </span>
</a>
        <nav className={menuOpen ? "nav-links nav-links-open" : "nav-links"} aria-label="Main navigation">
          {navLinks.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="nav-cta" href="#enquiry" onClick={() => setMenuOpen(false)}>{t.navStart}<ArrowUpRight size={15} /></a>
        </nav>
        <div className="nav-tools">
          <button className="lang-toggle" onClick={() => setLang(lang === "en" ? "ta" : "en")} aria-label="Switch language"><Globe2 size={15} />{lang === "en" ? "தமிழ்" : "English"}</button>
          <button className="menu-toggle" onClick={() => setMenuOpen(v => !v)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
      </header>

      <main id="main-content">
        <section className="hero section-pad" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" />{t.eyebrow}</div>
            <h1>{t.hero1}<br />{t.hero2} <em>{lang === "en" ? "better" : "அடையாளம்"}</em><br /><span>{t.hero3}</span></h1>
            <p className="hero-description">{t.heroDescription}</p>
            <div className="hero-actions">
              <a className="button button-gold" href="#services">{t.explore}<ArrowUpRight size={17} /></a>
              <a className="text-link" href="#work">{t.seeWork}<ArrowDownRight size={17} /></a>
            </div>
            <div className="hero-proof"><div className="proof-icon"><Sparkles size={16} /></div><p><strong>{t.proof}</strong><br />{t.proofSub}</p></div>
            <div className="hero-metrics"><div><strong>06</strong><span>Service categories</span></div><div><strong>01:01</strong><span>Personal attention</span></div><div><strong>₹99+</strong><span>Accessible pricing</span></div></div>
          </div>
          <div className="hero-art" aria-label="Abstract UN Digital Hub brand artwork">
            <div className="art-grid" /><div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" /><div className="art-orbit orbit-three" />
            <div className="art-core"><span>UN</span><i>Digital experiences, made with intent.</i></div>
            <div className="art-label art-label-top"><span>01 / THINK</span><span>Strategy first</span></div>
            <div className="art-label art-label-bottom"><span>02 / MAKE</span><span>Built with purpose</span></div>
            <div className="art-stamp">IDEAS<br />INTO<br /><b>IMPACT</b></div>
            <div className="art-corner">UDH / 2026</div>
          </div>
          <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /><span>01 — 06 / SERVICES</span></div>
        </section>

        <section className="intro-band"><p>{t.bandTitle}</p><p>{t.bandText}</p></section>

        <section className="services-section section-pad" id="services">
          <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" />{t.what}</div><h2>{t.servicesTitle}<br /><em>{t.servicesSub}</em></h2></div><p>{t.serviceIntro}</p></div>
          <div className="service-layout">
            <div className="service-list" role="tablist" aria-label="Service categories">
              {services.map(s => <button key={s.id} role="tab" aria-selected={activeService === s.id} className={activeService === s.id ? "service-row service-row-active" : "service-row"} onClick={() => setActiveService(s.id)}><span className="service-number">{s.number}</span><span className="service-title">{lang === "en" ? s.title : s.titleTa}</span><ArrowUpRight className="service-arrow" size={18} /></button>)}
            </div>
            <AnimatePresence mode="wait">
              <motion.div key={activeService + lang} className="service-detail" role="tabpanel" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
                <span className="detail-kicker">SERVICE / {active.number}</span><h3>{lang === "en" ? active.title : active.titleTa}</h3><p>{lang === "en" ? active.description : active.descriptionTa}</p>
                {active.id === services[0].id && (
  <div className="website-pricing">
    <div className="pricing-heading">
      <span>WEBSITE DEVELOPMENT</span>
      <h4>Choose what you need.</h4>
      <p>Transparent starting prices. Final cost depends on your requirements.</p>
    </div>

    <div className="pricing-row">
      <div>
        <strong>Standard business website</strong>
        <p>Responsive business website and essential pages.</p>
      </div>
      <strong>₹499–₹1,999</strong>
    </div>

    <div className="pricing-row">
      <div>
        <strong>WhatsApp integration</strong>
        <p>Customer enquiry button and WhatsApp message setup.</p>
      </div>
      <strong>₹199–₹2,999</strong>
    </div>

    <div className="pricing-row">
      <div>
        <strong>Database integration</strong>
        <p>Storage, forms, admin features and custom functionality.</p>
      </div>
      <strong>Custom quote</strong>
    </div>

    <div className="pricing-row">
      <div>
        <strong>Domain purchase</strong>
        <p>Domain registration charged separately.</p>
      </div>
      <strong>Extra cost</strong>
    </div>

    <a
      className="button button-gold pricing-cta"
      href="#enquiry"
      onClick={() => {
        updateForm("service", active.id);
        updateForm(
          "details",
          "I need a business website. Please discuss standard website pricing, WhatsApp integration, database requirements and domain costs with me."
        );
      }}
    >
      Request a quotation <ArrowRight size={16} />
    </a>
  </div>
)}
                <div className="detail-items">{(lang === "en" ? active.items : active.itemsTa).map(item => <span key={item}><Check size={14} />{item}</span>)}</div>
                <div className="detail-footer"><div><small>{t.priceRange}</small><strong>{active.price}</strong></div><a href="#enquiry" onClick={() => updateForm("service", active.id)}>{t.discuss}<ArrowRight size={16} /></a></div>
              </motion.div>
            </AnimatePresence>
          </div>
          <p className="price-note">{t.priceNote}</p>
        </section>


<section className="work-section section-pad" id="work">
  <div className="section-heading">
    <div>
      <div className="eyebrow">
        <span className="eyebrow-line" />
        {t.workEyebrow}
      </div>

      <h2>
        {t.workTitle}
        <br />
        <em>{t.workSub}</em>
      </h2>
    </div>

    <p>{t.workIntro}</p>
  </div>

  <div className="work-grid">
    {/* 01 — RVG BAKES */}
    <a
      className="work-card work-card-large"
      href="https://rvgbakes.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open RVG Bakes live website"
    >
      <div className="work-visual work-bakery">
        <img
          className="project-preview-image"
          src="/rvg-bakes.png"
          alt="RVG Bakes website preview"
          loading="lazy"
        />
      </div>

      <div className="work-meta">
        <div>
          <small>01 / {t.work1type}</small>
          <h3>{t.work1}</h3>
          <span>{t.viewProject}</span>
        </div>
        <span className="round-arrow">
          <ArrowUpRight size={18} />
        </span>
      </div>
    </a>

    {/* 02 — PERSONAL PORTFOLIO */}
    <a
      className="work-card"
      href="https://jaffersujaudeen-profile.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open personal portfolio"
    >
      <div className="work-visual work-portfolio">
        <img
          className="project-preview-image"
          src="/jaffer-portfolio.png"
          alt="Jaffer Sujaudeen personal portfolio preview"
          loading="lazy"
        />
      </div>

      <div className="work-meta">
        <div>
          <small>02 / {t.work2type}</small>
          <h3>{t.work2}</h3>
          <span>{t.viewProject}</span>
        </div>
        <span className="round-arrow">
          <ArrowUpRight size={18} />
        </span>
      </div>
    </a>

    {/* 03 — LIFEX HEALTHCARE */}
    <a
      className="work-card"
      href="https://jaffersujaudeen-ai.github.io/lifexwebsite/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open LifeX healthcare website"
    >
      <div className="work-visual work-startup">
        <img
          className="project-preview-image"
          src="/lifex-healthcare.png"
          alt="LifeX healthcare website preview"
          loading="lazy"
        />
      </div>

      <div className="work-meta">
        <div>
          <small>03 / {t.work3type}</small>
          <h3>{t.work3}</h3>
          <span>{t.viewProject}</span>
        </div>
        <span className="round-arrow">
          <ArrowUpRight size={18} />
        </span>
      </div>
    </a>
  </div>

  <p className="project-disclaimer">
    Project previews are illustrative. Open each live link to explore
    the actual project.
  </p>
</section>

        <section className="approach-section section-pad" id="approach">
          <div className="approach-top"><div className="eyebrow"><span className="eyebrow-line" />{t.approachEyebrow}</div><h2>{t.approachTitle}<br /><em>{t.approachSub}</em></h2></div>
          <div className="steps-grid">{[[t.step1,t.step1d],[t.step2,t.step2d],[t.step3,t.step3d],[t.step4,t.step4d]].map(([title,desc],i)=><div className="step-card" key={title}><span>0{i+1}</span><h3>{title}</h3><p>{desc}</p></div>)}</div>
        </section>

        <section className="trust-strip section-pad"><div><ShieldCheck /><span>Clear scope & pricing</span></div><div><Smartphone /><span>Mobile-first thinking</span></div><div><Layers3 /><span>Practical deliverables</span></div><div><Clock3 /><span>Timeline discussed upfront</span></div></section>

        <section className="faq-section section-pad" id="faq">
          <div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-line" />FAQ</div><h2>{t.faqTitle}</h2></div><p>Simple answers before you get started.</p></div>
          <div className="faq-list">{[[t.faq1,t.faq1a],[t.faq2,t.faq2a],[t.faq3,t.faq3a],[t.faq4,t.faq4a]].map(([q,a])=><details key={q} className="faq-item"><summary>{q}<ChevronDown size={17}/></summary><p>{a}</p></details>)}</div>
        </section>


<section className="founder-section section-pad" id="founder">
  <div className="founder-image">
    <img
      src={FOUNDER_IMAGE}
      alt="Founder of UN Digital Hub"
      loading="lazy"
    />
    <div className="founder-image-overlay">
    </div>
  </div>

  <div className="founder-copy">
    <div className="eyebrow">
      <span className="eyebrow-line" />
      {t.founderEyebrow}
    </div>

    <h2>
      {t.founderTitle}
      <br />
      <em>{t.founderSub}</em>
    </h2>

    <p>{t.founderBio}</p>
    <p className="founder-placeholder">{t.founderNote}</p>


<div className="founder-identity">
  <h3>M. Jaffer Sujaudeen</h3>

  <div className="founder-roles">
    <div className="founder-role">
      <div>
        <strong>Chief Technology Officer</strong>
        <p>Suja Garments</p>
      </div>
    </div>

    <div className="founder-role">
      <div>
        <strong>Founder</strong>
        <p>LifeX Healthcare</p>
      </div>
    </div>

    <div className="founder-role">
      <div>
        <strong>Founder &amp; CEO</strong>
        <p>UN Digital Hub</p>
      </div>
    </div>
  </div>
</div>


    <div className="founder-links">
      <a
        href="https://jaffersujaudeen-profile.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t.founderProfile}
        <ArrowUpRight size={15} />
      </a>

      <a
        href="https://www.linkedin.com/in/jaffer-sujaudeen-/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin size={15} />
        LinkedIn
        <ArrowUpRight size={15} />
      </a>

      <a
        href="https://www.instagram.com/jaffer_sujaudeen/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram size={15} />
        Instagram
        <ArrowUpRight size={15} />
      </a>
    </div>
  </div>
</section>

        <section className="enquiry-section section-pad" id="enquiry">
          <div className="enquiry-intro"><div className="eyebrow"><span className="eyebrow-line" />{t.contactEyebrow}</div><h2>{t.contactTitle}<br /><em>{t.contactSub}</em></h2><p>{t.contactIntro}</p><div className="enquiry-aside"><span>01 — YOUR IDEA</span><span>02 — YOUR REQUIREMENTS</span><span>03 — YOUR NEXT STEP</span></div><div className="contact-direct"><a href={`mailto:${BUSINESS_EMAIL}`}><Mail size={15}/>{BUSINESS_EMAIL}</a><a href="https://wa.me/919487838963" target="_blank" rel="noopener noreferrer"><Send size={15}/>+91 94878 38963</a></div></div>
          <form className="enquiry-form" onSubmit={submitEnquiry}>
            <div className="form-section-title"><span>01</span><h3>{t.yourDetails}</h3></div>
            <div className="form-grid">
              <label>{t.name} <b>*</b><input required maxLength={120} value={form.name} onChange={e=>updateForm("name",e.target.value)} placeholder="Your name" autoComplete="name" /></label>
              <label>{t.phone} <b>*</b><input required maxLength={30} type="tel" value={form.phone} onChange={e=>updateForm("phone",e.target.value)} placeholder="+91 00000 00000" autoComplete="tel" /></label>
              <label className="full-field">{t.email}<input type="email" maxLength={200} value={form.email} onChange={e=>updateForm("email",e.target.value)} placeholder="you@example.com" autoComplete="email" /></label>
            </div>
            <div className="form-section-title"><span>02</span><h3>{t.requirements}</h3></div>
            <div className="form-grid">
              <label className="full-field">{t.chooseService} <b>*</b><span className="select-wrap"><select required value={form.service} onChange={e=>updateForm("service",e.target.value)}>{services.map(s=><option value={s.id} key={s.id}>{lang==="en"?s.title:s.titleTa} · {s.price}</option>)}</select><ChevronDown size={16}/></span></label>
              <label className="full-field">{t.whatNeed}<span className="select-wrap"><select value={form.category} onChange={e=>updateForm("category",e.target.value)}><option value="">{t.chooseSpecific}</option>{(lang==="en"?selectedService.items:selectedService.itemsTa).map(item=><option key={item} value={item}>{item}</option>)}<option value="Other / custom request">Other / custom request</option></select><ChevronDown size={16}/></span></label>
              <label>{t.budget}<span className="select-wrap"><select value={form.budget} onChange={e=>updateForm("budget",e.target.value)}><option value="">{t.chooseBudget}</option><option>Below ₹500</option><option>₹500–₹999</option><option>₹1,000–₹1,999</option><option>₹2,000–₹4,999</option><option>₹5,000+</option><option>Need a quotation</option></select><ChevronDown size={16}/></span></label>
              <label>{t.timeline}<span className="select-wrap"><select value={form.timeline} onChange={e=>updateForm("timeline",e.target.value)}><option value="Discuss with me">{t.timelineDiscuss}</option><option>Within 3 days</option><option>Within 1 week</option><option>Within 2–4 weeks</option><option>Flexible</option></select><ChevronDown size={16}/></span></label>
              <label className="full-field">{t.details}<textarea rows={4} maxLength={4000} value={form.details} onChange={e=>updateForm("details",e.target.value)} placeholder={t.detailsPlaceholder}/></label>
            </div>
            <button type="submit" className="button button-gold submit-button">{t.submit}<ArrowUpRight size={17}/></button>
            <p className="form-privacy">{t.privacy}</p>
            <p className="form-status" role="status" aria-live="polite">{status}</p>
          </form>
        </section>

        <section className="final-cta section-pad"><div><span>{t.finalEyebrow}</span><h2>{t.finalTitle}</h2></div><a href="#enquiry" className="button button-light">{t.finalButton}<ArrowUpRight size={17}/></a></section>
      </main>

  
<footer className="footer section-pad">
  <a className="brand" href="#home" aria-label="UN Digital Hub home">
    <img
      className="brand-logo"
      src="/un-logo.png"
      alt="UN Digital Hub logo"
    />
    <span className="brand-copy">
      <strong>DIGITAL HUB</strong>
      <small>YOUR DIGITAL GROWTH PARTNER</small>
    </span>
  </a>

  <p>{t.footerText}</p>

  <div className="footer-contact">
    <a href={`mailto:${BUSINESS_EMAIL}`}>
      <Mail size={14} />
      {BUSINESS_EMAIL}
    </a>
    <a
      href="https://www.instagram.com/jaffer_sujaudeen/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Instagram size={14} />
      Instagram
    </a>
    <a
      href="https://www.linkedin.com/in/jaffer-sujaudeen-/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Linkedin size={14} />
      LinkedIn
    </a>
  </div>

  <div className="policy-draft">
    <strong>
      {t.privacyTitle} · {t.termsTitle} · {t.refundTitle}
    </strong>
    <p>{t.legalDraft}</p>
  </div>

  <div className="footer-bottom">
    <span>
      © {new Date().getFullYear()} UN Digital Hub. All rights reserved.
    </span>
    <div>
      <a href="#services">{t.servicesLabel}</a>
      <a href="#work">{t.workLabel}</a>
      <a href="#enquiry">{t.contactLabel}</a>
      <a href="#faq">FAQ</a>
    </div>
    <a href="#home">{t.top} ↑</a>
  </div>
 
<div className="footer-powered">
  <div className="footer-powered-top">
    <div className="footer-powered-brand">
      <img src="/un-logo.png" alt="UN Digital Hub logo" />
      <div className="footer-brand-copy">
        <strong>UN DIGITAL HUB</strong>
        <span>YOUR DIGITAL GROWTH PARTNER</span>
      </div>
    </div>

    <p className="footer-powered-description">
      Thoughtful digital solutions for businesses, people and ideas.
    </p>
  </div>

  <div className="footer-powered-content">
    <div className="footer-powered-column">
      <h4>CONTACT</h4>
      <a href="mailto:undigitalhub13@gmail.com">
        undigitalhub13@gmail.com
      </a>
      <a
        href="https://www.instagram.com/jaffer_sujaudeen/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Instagram ↗
      </a>
      <a
        href="https://www.linkedin.com/in/jaffer-sujaudeen-/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn ↗
      </a>
    </div>

    <div className="footer-powered-column">
      <h4>EXPLORE</h4>
      <a href="#services">Services</a>
      <a href="#work">Selected work</a>
      <a href="#founder">Founder</a>
      <a href="#contact">Contact</a>
    </div>

    <div className="footer-powered-column footer-powered-location">
      <h4>BASED IN INDIA</h4>
      <p>Cumbum, Tamil Nadu, India.</p>
      <p>Made with care for ambitious ideas.</p>
    </div>
  </div>

  <div className="footer-powered-registration">
    <span>BUSINESS REGISTRATION</span>
    <p>Udyam Registration: UDYAM-TN-23-0077465</p>
  </div>

  <div className="footer-powered-bottom">
    <span>© 2026 UN Digital Hub. All rights reserved.</span>

    <div className="footer-powered-legal">
      <a href="#privacy">Privacy</a>
      <a href="#terms">Terms</a>
      <a href="#refund">Refund &amp; revision</a>
    </div>

    <a
      className="footer-powered-credit"
      href="https://undigitalhub.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by <strong>UN Digital Hub</strong> ↗
    </a>
  </div>
</div>
      </footer>
    </div>
  );
}

export default App;
