// src/landing/pages.js
// All SEO landing pages. Add new pages here — they auto-appear in routes, sitemap, and schema.

// ── Helper to generate a page for a Kerala district ──
function districtPage(district, districtAlt, slug, coords) {
  return {
    slug,
    district,
    districtAlt,
    geo: coords,
    metaTitle: `ATS Resume Writing Service in ${district} | Forge Digital`,
    metaDescription: `Looking for a professional ATS resume writing service in ${district}, Kerala? Forge Digital delivers ATS-optimized CVs, LinkedIn optimization, cover letters & digital portfolios. Starting ₹299. Express 6-hour delivery available.`,
    keywords: `ATS resume ${district}, resume writing ${district}, resume service ${districtAlt || district}, CV writing ${district} Kerala, resume for freshers ${district}, LinkedIn optimization ${district}, career branding ${district}, Forge Digital ${district}`,
    heroTitle: `Professional ATS Resume Writing Service in ${district}`,
    heroSubtitle: `Forge Digital helps students, freshers, and professionals in ${district} land more interviews with ATS-optimised resumes, LinkedIn profiles, and career branding — delivered digitally.`,
    sections: [
      {
        heading: `Why ${district} Professionals Trust Forge Digital`,
        body: `Whether you're a fresh graduate from a ${district} college or an experienced professional looking for your next career move, your resume is the first impression you make on every employer. In today's job market, that impression is filtered through an Applicant Tracking System before a human ever sees it.\n\nForge Digital specialises in creating resumes that pass ATS filters with precision while maintaining the premium aesthetic that catches a recruiter's eye. Based in Calicut and serving all of Kerala digitally, we understand the local job market and the national opportunities our clients pursue.`,
      },
      {
        heading: 'Our Services',
        body: `**ATS-Friendly Resume Writing** — Keyword-optimised, cleanly formatted resumes that pass every ATS filter and look stunning when a recruiter opens them. Delivered in both PDF and editable Word format.\n\n**Express Resume — 6 Hour Delivery** — Urgent deadline? We deliver a fully polished, interview-ready resume to your inbox within 6 hours.\n\n**Cover Letter Writing** — Tailored, compelling cover letters that articulate your unique value proposition for specific roles and companies.\n\n**LinkedIn Profile Optimization** — 87% of recruiters use LinkedIn to find candidates. We optimise your headline, summary, skills, and keyword density for maximum recruiter visibility.\n\n**Digital Portfolio Building** — Stunning, responsive portfolios that showcase your work and strengthen your personal brand online.`,
      },
      {
        heading: `ATS Resume Writing for Freshers in ${district}`,
        body: `If you're a recent graduate from ${district}, your resume is competing with thousands of other fresh graduates across India. Generic templates from Canva won't survive an ATS scan.\n\nForge Digital builds purpose-built fresher resumes that highlight your academic achievements, internships, projects, and skills — formatted exactly the way ATS systems expect. We know what recruiters in IT, healthcare, banking, and government sectors are looking for, and we craft your resume to match.`,
      },
      {
        heading: 'How It Works',
        body: `**Step 1:** Contact us on WhatsApp with your current resume or career details.\n\n**Step 2:** Our expert writers analyse your background and the roles you're targeting.\n\n**Step 3:** We craft your ATS-optimised resume, tailored to your industry and career level.\n\n**Step 4:** You receive the finished resume in PDF + Word format, ready to apply.\n\nThe entire process takes 24–48 hours. Express 6-hour delivery is available for urgent needs.`,
      },
      {
        heading: 'Pricing',
        body: `Forge Digital's resume writing services start at just **₹299** — making professional career branding accessible to students and freshers across ${district} and all of Kerala.\n\nAll services are delivered digitally via WhatsApp and email. No matter where you are in ${district}, you get the same premium quality.`,
      },
    ],
    faq: [
      {
        q: `How much does resume writing cost in ${district}?`,
        a: `Forge Digital's resume writing services start at ₹299 for freshers and students. Pricing varies based on experience level and additional services like LinkedIn optimization or express delivery. Contact us on WhatsApp for a custom quote.`,
      },
      {
        q: `Can I get a resume delivered the same day in ${district}?`,
        a: `Yes. Forge Digital offers Express Resume delivery within 6 hours for urgent deadlines. All services are delivered digitally, so there's no delay regardless of your location in ${district}.`,
      },
      {
        q: `Do you provide resume writing for freshers in ${district}?`,
        a: `Absolutely. A large percentage of our clients are fresh graduates and students from Kerala. We build ATS-optimised resumes specifically designed for entry-level job applications.`,
      },
      {
        q: `What format do you deliver resumes in?`,
        a: `Every resume from Forge Digital is delivered in both PDF and editable Word (.docx) format — ensuring compatibility with every ATS and employer requirement.`,
      },
    ],
    cta: {
      text: `Get Your ATS Resume – ${district}`,
      waMessage: `Hi, I'm from ${district} and I need a professional ATS resume. Can you help me?`,
    },
  };
}

// ── Kerala districts with coordinates ──
export const pages = [
  // === Kerala state-level ===
  {
    slug: 'resume-service-kerala',
    district: 'Kerala',
    districtAlt: 'Kerala',
    geo: { lat: 10.8505, lng: 76.2711 },
    metaTitle: 'Best Resume Writing Service in Kerala | ATS Resume – Forge Digital',
    metaDescription: 'Forge Digital is Kerala\'s top-rated ATS resume writing service. Professional CVs, LinkedIn optimization, cover letters & portfolios for students, freshers & professionals across Kerala. Starting ₹299.',
    keywords: 'resume service Kerala, ATS resume Kerala, resume writing Kerala, best resume writer Kerala, CV writing Kerala, resume for freshers Kerala, LinkedIn optimization Kerala, career branding Kerala, Forge Digital',
    heroTitle: 'Kerala\'s #1 ATS Resume Writing Service',
    heroSubtitle: 'Forge Digital delivers ATS-optimised resumes, LinkedIn profiles, cover letters, and digital portfolios to students, freshers, and professionals across every district in Kerala — all digitally, starting at just ₹299.',
    sections: [
      {
        heading: 'Why Kerala Trusts Forge Digital',
        body: 'Kerala has one of the highest literacy rates and most competitive job markets in India. From IT professionals in Kochi\'s Infopark to freshers graduating from Calicut University, TKM, CUSAT, and NIT Calicut — every career needs a resume that stands out.\n\nForge Digital is Kerala\'s dedicated resume writing service, purpose-built for the modern job market. Every resume we create is strictly ATS-compliant, keyword-optimised, and designed with a premium aesthetic that impresses both machines and humans.',
      },
      {
        heading: 'Services We Offer Across Kerala',
        body: '**ATS-Friendly Resume Writing** — Formatted to pass every Applicant Tracking System and optimised with role-specific keywords.\n\n**Express Resume — 6 Hour Delivery** — For urgent deadlines, get a polished resume in under 6 hours.\n\n**Cover Letter Writing** — Tailored narratives that communicate your unique value to employers.\n\n**LinkedIn Profile Optimization** — Improve your recruiter visibility on the platform where 87% of hiring happens.\n\n**Digital Portfolio Building** — Responsive, visually stunning portfolios that showcase your work.',
      },
      {
        heading: 'Serving Every District in Kerala',
        body: 'Forge Digital serves clients across all 14 districts of Kerala: Thiruvananthapuram, Kollam, Pathanamthitta, Alappuzha, Kottayam, Idukki, Ernakulam (Kochi), Thrissur, Palakkad, Malappuram, Kozhikode (Calicut), Wayanad, Kannur, and Kasaragod.\n\nAll services are delivered digitally via WhatsApp and email — professional resume writing is just a message away, no matter where you are in Kerala.',
      },
      {
        heading: 'How It Works',
        body: '**Step 1:** Contact us on WhatsApp with your current resume or career details.\n\n**Step 2:** Our expert team analyses your background and target roles.\n\n**Step 3:** We craft your ATS-optimised resume, tailored to your industry.\n\n**Step 4:** You receive the finished resume in PDF + Word format.\n\nStandard delivery: 24–48 hours. Express delivery: under 6 hours.',
      },
      {
        heading: 'Affordable Pricing for Kerala Students & Professionals',
        body: 'Starting at just **₹299**, Forge Digital makes professional resume writing accessible to everyone — from college students to senior executives.\n\nWe accept UPI, bank transfers, and online payments. No hidden charges, no subscriptions.',
      },
    ],
    faq: [
      { q: 'What is the best resume writing service in Kerala?', a: 'Forge Digital is Kerala\'s top-rated ATS resume writing and career branding service, serving students, freshers, and professionals across all 14 districts. Starting at ₹299 with express 6-hour delivery available.' },
      { q: 'How much does a professional resume cost in Kerala?', a: 'Forge Digital\'s resume writing services start at ₹299. Pricing varies by experience level and additional services. Contact us on WhatsApp for a custom quote.' },
      { q: 'Can Forge Digital write a resume for freshers in Kerala?', a: 'Yes. We specialise in fresher and student resumes — ATS-compliant, keyword-optimised, and designed for entry-level applications across IT, banking, healthcare, and government sectors.' },
      { q: 'How is the resume delivered?', a: 'All resumes are delivered digitally via WhatsApp and email in both PDF and editable Word (.docx) format. Standard delivery is 24–48 hours, with express 6-hour delivery available.' },
    ],
    cta: { text: 'Get Your ATS Resume – Kerala', waMessage: 'Hi, I\'m from Kerala and I need a professional ATS resume. Can you help me?' },
  },

  // === Resume Writing India (national) ===
  {
    slug: 'resume-writing-india',
    district: 'India',
    districtAlt: 'India',
    geo: { lat: 20.5937, lng: 78.9629 },
    metaTitle: 'Professional Resume Writing Service India | ATS Resume – Forge Digital',
    metaDescription: 'Forge Digital provides professional ATS resume writing services across India. ATS-optimized CVs, LinkedIn optimization, cover letters & portfolios for freshers & professionals. Starting ₹299.',
    keywords: 'resume writing India, ATS resume India, best resume writing service India, CV writing India, resume for freshers India, professional resume writer, LinkedIn optimization India, Forge Digital',
    heroTitle: 'India\'s Premium ATS Resume Writing Service',
    heroSubtitle: 'Forge Digital serves professionals, freshers, and students across India with ATS-compliant resumes, LinkedIn optimization, cover letters, and digital portfolios — all delivered digitally. Starting at ₹299.',
    sections: [
      { heading: 'Why Professionals Across India Choose Forge Digital', body: 'India\'s job market is one of the most competitive in the world. Whether you\'re applying to IT giants in Bangalore, financial firms in Mumbai, startups in Hyderabad, or government jobs in Delhi — your resume needs to survive an ATS scan first.\n\nForge Digital builds resumes that are strictly ATS-compliant, keyword-optimised for your target role, and designed with premium aesthetics that impress recruiters after the machine approves you.' },
      { heading: 'Services', body: '**ATS-Friendly Resume Writing** — Passes every ATS filter, optimised with role-specific keywords.\n\n**Express Resume — 6 Hour Delivery** — Urgent deadline? Delivered within 6 hours.\n\n**Cover Letter Writing** — Personalised, compelling narratives for each application.\n\n**LinkedIn Profile Optimization** — Maximum recruiter visibility.\n\n**Digital Portfolio Building** — Showcase your work beautifully.' },
      { heading: 'Who We Serve', body: 'Forge Digital serves clients across every state and city in India — from metros like Delhi, Mumbai, Bangalore, Chennai, Hyderabad, and Kolkata to tier-2 cities and smaller towns.\n\nOur clients include fresh graduates, experienced professionals, career changers, and executives across IT, engineering, healthcare, finance, marketing, and more.' },
      { heading: 'How It Works', body: '**Step 1:** Reach out on WhatsApp with your current resume or career details.\n**Step 2:** Our expert writers analyse your background.\n**Step 3:** We build your ATS-optimised resume.\n**Step 4:** Delivered in PDF + Word format.\n\nStandard: 24–48 hours. Express: under 6 hours.' },
      { heading: 'Pricing', body: 'Starting at just **₹299** — professional resume writing accessible to every Indian professional.\n\nUPI, bank transfer, and online payments accepted.' },
    ],
    faq: [
      { q: 'What is the best resume writing service in India?', a: 'Forge Digital is one of India\'s top ATS resume writing services, trusted by freshers and professionals across the country. Starting at ₹299.' },
      { q: 'How much does a resume cost in India?', a: 'Forge Digital\'s services start at ₹299. Contact us on WhatsApp for a detailed quote based on your experience level.' },
      { q: 'Do you offer express resume delivery?', a: 'Yes. Forge Digital offers 6-hour express delivery for urgent deadlines.' },
    ],
    cta: { text: 'Get Your ATS Resume Today', waMessage: 'Hi, I need a professional ATS resume. Can you help me?' },
  },

  // === LinkedIn Optimization Kerala ===
  {
    slug: 'linkedin-optimization-kerala',
    district: 'Kerala',
    districtAlt: 'Kerala',
    geo: { lat: 10.8505, lng: 76.2711 },
    metaTitle: 'LinkedIn Profile Optimization Service Kerala | Forge Digital',
    metaDescription: 'Boost your recruiter visibility with Forge Digital\'s LinkedIn optimization service in Kerala. 87% of recruiters use LinkedIn — make sure they find you. Starting ₹299.',
    keywords: 'LinkedIn optimization Kerala, LinkedIn profile writing Kerala, LinkedIn profile optimization India, LinkedIn headline optimization, recruiter visibility LinkedIn, Forge Digital Kerala',
    heroTitle: 'LinkedIn Profile Optimization Service in Kerala',
    heroSubtitle: '87% of recruiters use LinkedIn to find candidates. If your profile isn\'t optimised, you\'re invisible. Forge Digital transforms your LinkedIn presence to attract top opportunities.',
    sections: [
      { heading: 'Why LinkedIn Optimization Matters', body: 'LinkedIn is the world\'s largest professional network — and recruiters treat it as their primary sourcing tool. An optimised profile means:\n\n- Appearing in more recruiter searches\n- Getting discovered for roles you didn\'t even apply to\n- Building credibility before the first interview\n\nForge Digital optimises every element of your LinkedIn profile — headline, summary, experience, skills, endorsements, and keyword density — to maximise your visibility in recruiter searches.' },
      { heading: 'What We Optimise', body: '**Headline** — Your headline is the #1 search factor. We craft keyword-rich headlines that rank for your target roles.\n\n**About Summary** — A compelling, keyword-dense narrative that tells your professional story.\n\n**Experience Section** — Mirror your ATS resume with achievement-driven bullets.\n\n**Skills & Endorsements** — Strategic skill selection based on industry demand.\n\n**URL & Profile Photo** — Custom URL and professional appearance guidance.' },
      { heading: 'Who Needs LinkedIn Optimization', body: 'Every professional in Kerala — from fresh graduates to senior executives — benefits from LinkedIn optimization:\n\n- **Freshers** looking for their first job\n- **IT professionals** in Kochi, Trivandrum, and Calicut\n- **Career changers** pivoting to new industries\n- **Executives** seeking board positions or consulting opportunities\n- **Freelancers** building their personal brand' },
      { heading: 'How It Works', body: '**Step 1:** Share your current LinkedIn profile URL and resume.\n**Step 2:** Our team audits your profile against recruiter search algorithms.\n**Step 3:** We rewrite and optimise every section.\n**Step 4:** You receive a detailed before/after breakdown.\n\nDelivered within 24–48 hours.' },
      { heading: 'Pricing', body: 'LinkedIn optimization services start at **₹299**. Bundle with an ATS resume for maximum career impact.\n\nContact us on WhatsApp for a custom quote.' },
    ],
    faq: [
      { q: 'Does LinkedIn optimization really help get jobs?', a: '87% of recruiters use LinkedIn to source candidates. An optimised profile with the right keywords appears in significantly more recruiter searches, leading to inbound job opportunities you never applied to.' },
      { q: 'How is LinkedIn optimization delivered?', a: 'We provide optimised text for every section of your profile — headline, summary, experience, and skills — plus step-by-step implementation guidance. Delivered via WhatsApp and email.' },
      { q: 'Can freshers benefit from LinkedIn optimization?', a: 'Absolutely. Recruiters search for fresh graduates on LinkedIn too. We optimise your student profile to highlight projects, internships, and the right skills for your target entry-level roles.' },
    ],
    cta: { text: 'Optimise My LinkedIn Profile', waMessage: 'Hi, I need LinkedIn profile optimization. Can you help me?' },
  },

  // === Kerala district pages ===
  districtPage('Kozhikode', 'Calicut', 'ats-resume-kozhikode', { lat: 11.2588, lng: 75.7804 }),
  districtPage('Calicut', 'Kozhikode', 'ats-resume-calicut', { lat: 11.2588, lng: 75.7804 }),
  districtPage('Thiruvananthapuram', 'Trivandrum', 'ats-resume-thiruvananthapuram', { lat: 8.5241, lng: 76.9366 }),
  districtPage('Kochi', 'Ernakulam', 'ats-resume-kochi', { lat: 9.9312, lng: 76.2673 }),
  districtPage('Ernakulam', 'Kochi', 'ats-resume-ernakulam', { lat: 9.9816, lng: 76.2999 }),
  districtPage('Thrissur', null, 'ats-resume-thrissur', { lat: 10.5276, lng: 76.2144 }),
  districtPage('Kollam', null, 'ats-resume-kollam', { lat: 8.8932, lng: 76.6141 }),
  districtPage('Palakkad', null, 'ats-resume-palakkad', { lat: 10.7867, lng: 76.6548 }),
  districtPage('Kannur', null, 'ats-resume-kannur', { lat: 11.8745, lng: 75.3704 }),
  districtPage('Malappuram', null, 'ats-resume-malappuram', { lat: 11.0510, lng: 76.0711 }),
  districtPage('Kottayam', null, 'ats-resume-kottayam', { lat: 9.5916, lng: 76.5222 }),
  districtPage('Alappuzha', 'Alleppey', 'ats-resume-alappuzha', { lat: 9.4981, lng: 76.3388 }),
  districtPage('Wayanad', null, 'ats-resume-wayanad', { lat: 11.6854, lng: 76.1320 }),
  districtPage('Kasaragod', null, 'ats-resume-kasaragod', { lat: 12.4996, lng: 74.9869 }),
  districtPage('Idukki', null, 'ats-resume-idukki', { lat: 9.9189, lng: 76.9291 }),
  districtPage('Pathanamthitta', null, 'ats-resume-pathanamthitta', { lat: 9.2648, lng: 76.7870 }),
];

// All landing page slugs (for routes + sitemap)
export const landingSlugs = pages.map((p) => p.slug);

// Get page by slug
export function getLandingBySlug(slug) {
  return pages.find((p) => p.slug === slug) || null;
}
