export type Service = {
  id: string;
  number: string;
  title: string;
  titleTa: string;
  price: string;
  description: string;
  descriptionTa: string;
  items: string[];
  itemsTa: string[];
};

export const services: Service[] = [
  {
    id: "website",
    number: "01",
    title: "Business Website Development",
    titleTa: "வணிக இணையதள உருவாக்கம்",
    price: "₹499–₹1,999",
    description: "A clear, credible online presence built around your business goals, customers and next stage of growth.",
    descriptionTa: "உங்கள் வணிக இலக்குகள் மற்றும் வாடிக்கையாளர்களுக்கு ஏற்ற தெளிவான, நம்பகமான இணையதளம்.",
    items: ["Business website", "Landing page", "Product catalogue", "Website redesign", "Mobile-responsive design", "WhatsApp integration", "Basic SEO setup", "Custom website planning"],
    itemsTa: ["வணிக இணையதளம்", "லேண்டிங் பக்கம்", "தயாரிப்பு பட்டியல்", "இணையதள மறுவடிவமைப்பு", "மொபைல் வடிவமைப்பு", "WhatsApp இணைப்பு", "அடிப்படை SEO", "தனிப்பயன் திட்டமிடல்"]
  },
  {
    id: "business-portfolio",
    number: "02",
    title: "Business Portfolio",
    titleTa: "வணிக போர்ட்ஃபோலியோ",
    price: "₹299–₹599",
    description: "Professional company profiles and presentation materials that make your business easier to understand and trust.",
    descriptionTa: "உங்கள் நிறுவனத்தை தெளிவாக அறிமுகப்படுத்தும் தொழில்முறை சுயவிவரங்கள் மற்றும் விளக்கக்காட்சிகள்.",
    items: ["Company profile", "Business introduction deck", "Product catalogue PDF", "Brochure", "Business proposal", "Pitch deck", "Service presentation", "Portfolio redesign"],
    itemsTa: ["நிறுவன சுயவிவரம்", "வணிக அறிமுகம்", "தயாரிப்பு பட்டியல் PDF", "ப்ரோஷர்", "வணிக முன்மொழிவு", "Pitch deck", "சேவை விளக்கக்காட்சி", "போர்ட்ஃபோலியோ மறுவடிவமைப்பு"]
  },
  {
    id: "personal-portfolio",
    number: "03",
    title: "Personal Portfolio",
    titleTa: "தனிப்பட்ட போர்ட்ஃபோலியோ",
    price: "₹149–₹499",
    description: "Present your experience, skills and achievements in a polished format for your next opportunity.",
    descriptionTa: "உங்கள் திறன்கள், அனுபவம் மற்றும் சாதனைகளை அடுத்த வாய்ப்புக்காக சிறப்பாகக் காட்சிப்படுத்துங்கள்.",
    items: ["Personal portfolio", "Professional profile", "Resume / CV", "Achievements profile", "Work experience profile", "LinkedIn content", "Personal branding", "Introduction presentation"],
    itemsTa: ["தனிப்பட்ட போர்ட்ஃபோலியோ", "தொழில்முறை சுயவிவரம்", "Resume / CV", "சாதனைகள் சுயவிவரம்", "பணி அனுபவம்", "LinkedIn உள்ளடக்கம்", "தனிப்பட்ட பிராண்டிங்", "அறிமுக விளக்கக்காட்சி"]
  },
  {
    id: "startup",
    number: "04",
    title: "Startup Support",
    titleTa: "ஸ்டார்ட்அப் ஆதரவு",
    price: "₹199–₹1,499",
    description: "Turn an early idea into a more structured concept with practical planning, positioning and a clear next step.",
    descriptionTa: "உங்கள் ஆரம்ப யோசனையை திட்டமிடல், சந்தை நிலைப்பாடு மற்றும் அடுத்த படிகளுடன் வடிவமைக்க உதவுகிறோம்.",
    items: ["Startup idea discussion", "Business model planning", "Market research plan", "Competitor analysis", "Business plan outline", "Name and tagline ideas", "MVP feature planning", "Pitch deck and roadmap"],
    itemsTa: ["ஸ்டார்ட்அப் யோசனை ஆலோசனை", "வணிக மாதிரி திட்டமிடல்", "சந்தை ஆய்வு திட்டம்", "போட்டி ஆய்வு", "வணிகத் திட்ட வரைவு", "பெயர் மற்றும் Tagline", "MVP அம்சத் திட்டம்", "Pitch deck மற்றும் Roadmap"]
  },
  {
    id: "student",
    number: "05",
    title: "Student Solutions",
    titleTa: "மாணவர் தீர்வுகள்",
    price: "₹99–₹399",
    description: "Well-organized visual and document support for academic presentations, project showcases and campus events.",
    descriptionTa: "கல்வி விளக்கக்காட்சிகள், திட்டக் காட்சிகள் மற்றும் கல்லூரி நிகழ்வுகளுக்கான ஆவண மற்றும் வடிவமைப்பு உதவி.",
    items: ["Project report formatting", "Seminar presentation", "Assignment layout", "Abstract / synopsis", "Research poster", "Project demo slides", "College event poster", "Charts and infographics"],
    itemsTa: ["திட்ட அறிக்கை வடிவமைப்பு", "செமினார் விளக்கக்காட்சி", "Assignment வடிவமைப்பு", "Abstract / Synopsis", "ஆய்வு போஸ்டர்", "திட்ட Demo Slides", "கல்லூரி நிகழ்வு போஸ்டர்", "Charts மற்றும் Infographics"]
  },
  {
    id: "digital",
    number: "06",
    title: "Digital Services",
    titleTa: "டிஜிட்டல் சேவைகள்",
    price: "₹99–₹499",
    description: "Useful branded assets for day-to-day business communication, promotions and professional presentation.",
    descriptionTa: "தினசரி வணிகத் தொடர்பு, விளம்பரம் மற்றும் தொழில்முறை பயன்பாட்டிற்கான டிஜிட்டல் வடிவமைப்புகள்.",
    items: ["Logo and basic brand assets", "Digital visiting card", "QR code", "Poster / flyer", "Social media creative", "Brochure and menu", "Invoice / quotation template", "Letterhead and certificate"],
    itemsTa: ["லோகோ மற்றும் பிராண்ட் வடிவமைப்பு", "டிஜிட்டல் விசிட்டிங் கார்டு", "QR குறியீடு", "போஸ்டர் / ஃப்ளையர்", "சமூக ஊடக வடிவமைப்பு", "ப்ரோஷர் மற்றும் மெனு", "Invoice / Quotation வடிவம்", "லெட்டர்ஹெட் மற்றும் சான்றிதழ்"]
  }
];
