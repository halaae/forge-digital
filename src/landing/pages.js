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

// ── Helper to generate a role-based landing page ──
function rolePage(role, slug, metaTitle, metaDesc, keywords, heroTitle, heroSubtitle, sections, faq) {
  return {
    slug,
    district: 'India',
    districtAlt: 'India',
    geo: { lat: 20.5937, lng: 78.9629 },
    metaTitle,
    metaDescription: metaDesc,
    keywords,
    heroTitle,
    heroSubtitle,
    sections,
    faq,
    cta: {
      text: `Get Your ${role} Resume`,
      waMessage: `Hi, I'm looking for a professional ${role} resume. Can you help me?`,
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

  // === LinkedIn Optimization India ===
  {
    slug: 'linkedin-optimization-india',
    district: 'India',
    districtAlt: 'India',
    geo: { lat: 20.5937, lng: 78.9629 },
    metaTitle: 'Best LinkedIn Profile Optimization Service India | Forge Digital',
    metaDescription: 'Boost your visibility to recruiters with India\'s top LinkedIn optimization service. Headline, summary, and keyword optimization to help you land more interviews. Starting ₹299.',
    keywords: 'LinkedIn optimization India, LinkedIn profile writing service India, LinkedIn headline optimization, professional LinkedIn writer India, recruiter visibility LinkedIn, LinkedIn branding India',
    heroTitle: 'India\'s Premium LinkedIn Optimization Service',
    heroSubtitle: '87% of recruiters use LinkedIn to find candidates. If your profile isn\'t appearing in searches, you\'re losing opportunities. Forge Digital transforms your LinkedIn presence into a recruiter magnet.',
    sections: [
      { heading: 'Why LinkedIn Optimization is Essential in India', body: 'The Indian job market is massive, and top companies (Google, Amazon, TCS, Infosys, Reliance) use LinkedIn as their primary sourcing tool. A generic profile is invisible.\n\nForge Digital uses a data-driven approach to optimize your profile for the LinkedIn search algorithm. We ensure you rank for the right keywords and that your profile communicates your unique value proposition at first glance.' },
      { heading: 'What Our LinkedIn Optimization Includes', body: '**Keyword-Rich Headline** — The #1 factor in search rankings.\n**Compelling About Summary** — A professional narrative that tells your story.\n**Experience Optimization** — Mirroring your ATS resume for consistency.\n**Skills Alignment** — Strategic skill selection to match industry demand.\n**Recruiter Visibility Settings** — Guidance on reaching the right eyes.' },
      { heading: 'How It Works', body: '1. Share your current profile and career goals via WhatsApp.\n2. We audit your presence against industry standards.\n3. We provide optimized text for every section of your profile.\n4. You receive implementation guidance to go live.' },
    ],
    faq: [
      { q: 'How much does LinkedIn optimization cost in India?', a: 'Our services start at ₹299. We offer bundles that include an ATS resume for maximum impact.' },
      { q: 'Will this help me get more job offers?', a: 'Optimized profiles typically see a 3x-5x increase in "Recruiter Appearances" in the first week. While we can\'t guarantee offers, we guarantee you\'ll be seen by more hiring managers.' },
    ],
    cta: { text: 'Optimize My LinkedIn Now', waMessage: 'Hi, I want to optimize my LinkedIn profile for the Indian job market.' },
  },

  // === 20 NEW PAGES START HERE ===

  // 1. Resume Service Bangalore
  rolePage('Bangalore', 'resume-service-bangalore', 'Best Resume Writing Service Bangalore | ATS Resume Forge Digital', 'Professional ATS resume writing service in Bangalore (Bengaluru). Tech resumes, product management, and executive CVs. Starting ₹299.', 'resume writing bangalore, resume service Bengaluru, tech resume writer bangalore, ATS resume bangalore', 'Bangalore\'s Leading ATS Resume Writing Service', 'Helping Bangalore\'s tech and corporate professionals land roles at top unicorns and MNCs with keyword-optimized, high-impact resumes.', 
    [{ heading: 'Serving the Silicon Valley of India', body: 'From Whitefield to Electronic City, Forge Digital provides Bangalore professionals with the competitive edge they need. We specialize in software engineering, data science, and product resumes that pass the strict filters of top tech firms.' }],
    [{ q: 'Do you provide tech resumes in Bangalore?', a: 'Yes, we are specialists in technical and engineering resumes for the Bangalore job market.' }]),

  // 2. Resume Service Kochi
  rolePage('Kochi', 'resume-service-kochi', 'Resume Writing Service Kochi | ATS Resume Kochi Kerala', 'Top-rated resume writing service in Kochi (Ernakulam). ATS-optimized CVs for Infopark, SmartCity, and maritime professionals. Starting ₹299.', 'resume service kochi, resume writing Ernakulam, CV writer Kochi, Kochi resume help', 'Kochi\'s #1 Resume Writing Service', 'Professional career branding for Kochi\'s IT hubs and maritime sectors. Delivered digitally, starting at ₹299.', 
    [{ heading: 'Kochi\'s Career Growth Partner', body: 'Serving Infopark, SmartCity, and the diverse industries of Ernakulam. We help Kochi professionals transition into high-paying roles with resumes that stand out.' }],
    [{ q: 'Is there a physical office in Kochi?', a: 'We operate 100% digitally to keep costs low for you, providing premium quality via WhatsApp and Email across Kochi.' }]),

  // 3. Software Engineer Resume India
  rolePage('Software Engineer', 'software-engineer-resume-india', 'Software Engineer Resume Writing Service India | ATS Tech Resume', 'Get a professional software engineer resume that passes tech ATS filters. Specialized for SDE 1, 2, 3 and Senior Engineer roles. Starting ₹299.', 'software engineer resume india, tech resume writer india, SDE resume service, developer resume india', 'The Ultimate Software Engineer Resume Service', 'Built by experts who understand tech stacks, microservices, and system design. We make your technical impact clear to both machines and humans.', 
    [{ heading: 'Resumes for the Modern Developer', body: 'We don\'t just list languages. We highlight your contributions to distributed systems, cloud migrations, and scalable architectures using industry-standard technical keywords.' }],
    [{ q: 'Do you cover all tech stacks?', a: 'Yes, from MERN and Java/Spring to AI/ML and DevOps roles.' }]),

  // 4. Resume Writing for Gulf Jobs
  rolePage('Gulf Jobs', 'resume-writing-for-gulf-jobs', 'Gulf Job Resume Writing Service | UAE, Qatar, Saudi Arabia CV', 'Professional CV writing for Gulf jobs. Specialized for UAE, Qatar, Oman, and Saudi Arabia job markets. ATS-optimized and GCC-compliant. Starting ₹299.', 'gulf job resume, UAE CV writing, Saudi Arabia job resume, Qatar CV service, GCC resume help', 'Land Your Dream Job in the Gulf', 'Forge Digital creates GCC-compliant resumes that highlight your international experience and technical expertise for top employers in Dubai, Doha, and Riyadh.', 
    [{ heading: 'Optimized for the GCC Market', body: 'The Gulf market has specific requirements for CV structure and information. We ensure your resume meets these standards while remaining 100% ATS-friendly for international firms.' }],
    [{ q: 'Can you help with Dubai job applications?', a: 'Yes, we specialize in UAE-style professional CVs.' }]),

  // 5. Data Analyst Resume India
  rolePage('Data Analyst', 'data-analyst-resume-india', 'Data Analyst Resume Writing Service India | ATS Data Science CV', 'Professional resume writing for Data Analysts, Data Scientists, and BI professionals. Highlight your SQL, Python, and Tableau impact. Starting ₹299.', 'data analyst resume india, data science resume service, BI analyst resume writer', 'Data-Driven Resumes for Data Professionals', 'Your resume should be as analytical as your work. We quantify your impact on business metrics using the right data-driven keywords.', 
    [{ heading: 'Visualizing Your Career Data', body: 'We help you articulate how you turned raw data into business insights, focusing on the specific tools and methodologies that recruiters look for in the Indian market.' }],
    [{ q: 'Do you help with Data Scientist resumes too?', a: 'Yes, we cover the full spectrum of data and analytics roles.' }]),

  // 6. Resume Service Mumbai
  rolePage('Mumbai', 'resume-service-mumbai', 'Best Resume Writing Service Mumbai | Finance & Corporate CVs', 'Mumbai\'s leading ATS resume service. Specialized for finance, banking, media, and executive roles. Starting ₹299.', 'resume writing mumbai, resume service Mumbai, banking resume mumbai', 'Mumbai\'s Premium Career Branding Service', 'From BKC to South Mumbai, we help the city\'s top professionals dominate the corporate job market with world-class resumes.', 
    [{ heading: 'The Financial Capital\'s Resume Experts', body: 'We understand the high-pressure demands of Mumbai\'s corporate world. Our resumes are designed to get you noticed by the top firms in India.' }],
    [{ q: 'Do you write resumes for investment banking?', a: 'Yes, we specialize in high-impact finance and banking resumes.' }]),

  // 7. Resume Service Chennai
  rolePage('Chennai', 'resume-service-chennai', 'Resume Writing Service Chennai | IT & Manufacturing CVs', 'Chennai\'s top-rated ATS resume writing service. Specialized for IT, automotive, and manufacturing sectors. Starting ₹299.', 'resume writing chennai, resume service Chennai, IT resume chennai', 'Chennai\'s Trusted Resume Partner', 'Helping Chennai\'s talent from OMR to Ambattur secure top roles with keyword-rich, professionally formatted resumes.', 
    [{ heading: 'Serving the Gateway to South India', body: 'Whether you\'re in the IT corridor or the manufacturing hub, we provide localized expertise for Chennai\'s competitive job market.' }],
    [{ q: 'Do you help with fresher resumes in Chennai?', a: 'Yes, we have a dedicated service for students and fresh graduates in Chennai.' }]),

  // 8. Resume Service Hyderabad
  rolePage('Hyderabad', 'resume-service-hyderabad', 'Resume Writing Service Hyderabad | Tech & Pharma CVs', 'Hyderabad\'s leading ATS resume service. Specialized for tech, pharma, and global capability centers (GCCs). Starting ₹299.', 'resume writing hyderabad, resume service Hyderabad, tech resume hyderabad', 'Hyderabad\'s Career Growth Hub', 'Empowering Hyderabad\'s professionals from HITEC City to Gachibowli with resumes that pass every global ATS filter.', 
    [{ heading: 'HITEC City\'s Resume Specialists', body: 'We help Hyderabad\'s tech and healthcare talent stand out in a sea of applications with precise keyword targeting and premium design.' }],
    [{ q: 'Do you cover pharma industry resumes?', a: 'Yes, we provide specialized resumes for the pharmaceutical and life sciences sectors.' }]),

  // 9. Resume Service Delhi
  rolePage('Delhi', 'resume-service-delhi', 'Resume Writing Service Delhi NCR | Corporate & Govt CVs', 'Top-rated resume writing service in Delhi, Gurgaon, and Noida. Optimized for corporate, consulting, and PSU roles. Starting ₹299.', 'resume writing delhi, resume service Gurgaon, Noida resume writer', 'Delhi NCR\'s Premier Resume Service', 'Navigating the competitive NCR job market requires a superior resume. We deliver ATS-optimized CVs to professionals across the capital region.', 
    [{ heading: 'Delhi NCR\'s Competitive Edge', body: 'From startups in Gurgaon to giants in Noida, we provide the career branding you need to stay ahead.' }],
    [{ q: 'Do you write resumes for senior consultants?', a: 'Yes, we specialize in executive and senior management resumes for the Delhi market.' }]),

  // 10. Nurse Resume Writing Service
  rolePage('Nurse', 'nurse-resume-writing-service', 'Nursing Resume Writing Service India | Healthcare CV Kerala', 'Specialized resume writing for nurses and healthcare professionals. Optimized for Indian and international hospitals (UK, UAE, Ireland). Starting ₹299.', 'nurse resume india, nursing CV writing kerala, healthcare resume service', 'Empowering Healthcare Heroes', 'We help nurses in Kerala and India secure positions at top domestic and international hospitals with professionally crafted medical resumes.', 
    [{ heading: 'Resumes for Caregivers', body: 'We highlight your clinical skills, certifications, and specialized experience in a format that healthcare recruiters trust.' }],
    [{ q: 'Do you help with resumes for UK nursing jobs?', a: 'Yes, we specialize in international nursing CV formats for the UK, Ireland, and Middle East.' }]),

  // 11. Project Manager Resume India
  rolePage('Project Manager', 'project-manager-resume-india', 'Project Manager Resume Writing Service India | PMP & Agile CV', 'Professional resume writing for Project Managers and Program Managers. Highlight your PMP, Agile, and Scrum impact. Starting ₹299.', 'project manager resume india, PM resume service, agile project manager CV', 'Strategic Resumes for Project Leaders', 'Your resume should be a project in excellence. We highlight your leadership, budget management, and delivery success using industry-standard PM keywords.', 
    [{ heading: 'Managing Your Career Success', body: 'We help PMs articulate complex project deliveries into high-impact bullet points that hiring managers value.' }],
    [{ q: 'Do you cover IT and non-IT project management?', a: 'Yes, we have expertise in construction, manufacturing, and IT project management resumes.' }]),

  // 12. Mechanical Engineer Resume India
  rolePage('Mechanical Engineer', 'mechanical-engineer-resume-india', 'Mechanical Engineer Resume Writing Service India | ATS CV', 'Professional resume writing for mechanical engineers. Optimized for automotive, manufacturing, and core sectors. Starting ₹299.', 'mechanical engineer resume india, core engineering resume service, design engineer CV', 'Core Engineering Career Branding', 'We help mechanical engineers highlight their design, manufacturing, and maintenance expertise for top industrial firms across India.', 
    [{ heading: 'Engineering Your Career Move', body: 'From CAD/CAM skills to shop floor management, we ensure your technical prowess is parsed correctly by engineering ATS systems.' }],
    [{ q: 'Do you help with resumes for Gulf engineering jobs?', a: 'Yes, we specialize in engineering CVs for both Indian and Middle Eastern markets.' }]),

  // 13. Electrical Engineer Resume India
  rolePage('Electrical Engineer', 'electrical-engineer-resume-india', 'Electrical Engineer Resume Writing Service India | ATS CV', 'Professional resume writing for electrical and electronics engineers. Optimized for power, semiconductor, and automation roles. Starting ₹299.', 'electrical engineer resume india, EEE resume service, power systems CV writer', 'Powered by Professionalism', 'High-impact resumes for electrical engineers that showcase technical mastery and project success in the energy and tech sectors.', 
    [{ heading: 'Conducting Your Career Growth', body: 'We translate your technical certifications and project experience into a narrative that resonates with engineering hiring managers.' }],
    [{ q: 'Do you help freshers in electrical engineering?', a: 'Yes, we build strong fresher resumes for EEE and ECE graduates.' }]),

  // 14. Digital Marketing Resume India
  rolePage('Digital Marketing', 'digital-marketing-resume-india', 'Digital Marketing Resume Writing Service India | SEO & Ads CV', 'Professional resume writing for Digital Marketers, SEO experts, and Ad specialists. Highlight your ROI and campaign success. Starting ₹299.', 'digital marketing resume india, SEO resume service, marketing manager CV', 'ROI-Focused Resumes for Marketers', 'As a marketer, your resume is your most important campaign. We optimize it for "conversions" — getting you more interviews.', 
    [{ heading: 'Marketing the Marketer', body: 'We highlight your impact on traffic, leads, and revenue using the same data-driven language you use in your daily work.' }],
    [{ q: 'Do you help with social media manager resumes?', a: 'Yes, we cover the full range of digital marketing and content roles.' }]),

  // 15. Sales Resume Writing Service
  rolePage('Sales', 'sales-resume-writing-service', 'Sales & BD Resume Writing Service India | Revenue-Focused CV', 'Professional resume writing for Sales Managers and Business Development professionals. Highlight your quota-crushing success. Starting ₹299.', 'sales resume india, business development resume, revenue manager CV', 'Closing the Deal on Your Next Career Move', 'We help sales professionals turn their targets and achievements into a compelling narrative that proves they are top performers.', 
    [{ heading: 'The Art of the Pitch', body: 'We focus on your numbers: revenue growth, market share increase, and client acquisition success.' }],
    [{ q: 'Do you write resumes for FMCG sales?', a: 'Yes, we cover FMCG, Tech/SaaS, and Real Estate sales roles.' }]),

  // 16. Banking Resume Writing Service
  rolePage('Banking', 'banking-resume-writing-service', 'Banking & Finance Resume Writing Service India | ATS CV', 'Professional resume writing for Bankers, Relationship Managers, and Investment Analysts. Optimized for HDFC, ICICI, SBI, and MNC banks. Starting ₹299.', 'banking resume india, finance resume service, relationship manager CV', 'Trusted Career Branding for Finance Professionals', 'We help India\'s banking talent secure roles at top financial institutions with precise, keyword-optimized resumes.', 
    [{ heading: 'Invested in Your Success', body: 'We understand the regulatory and technical keywords of the Indian banking sector, ensuring your resume passes every internal HR filter.' }],
    [{ q: 'Do you write resumes for entry-level bank roles?', a: 'Yes, we help freshers land roles in retail and corporate banking.' }]),

  // 17. Fresher Resume India
  rolePage('Fresher', 'fresher-resume-india', 'Best Fresher Resume Writing Service India | First Job CV', 'Professional resume writing for fresh graduates and students across India. Land your first job at top MNCs and startups. Starting ₹299.', 'fresher resume india, first job CV writing, student resume service', 'Your First Step to Career Success', 'Forge Digital specializes in building powerful entry-level resumes that highlight your potential, internships, and academic achievements.', 
    [{ heading: 'Launching Indian Careers', body: 'Competing with millions of graduates? You need a resume that stands out. We build purpose-built fresher resumes that recruiters love.' }],
    [{ q: 'Can I get a resume without work experience?', a: 'Yes! We focus on your projects, internships, and academic excellence to build a strong profile.' }]),

  // 18. Student Internship Resume Service
  rolePage('Internship', 'student-internship-resume-service', 'Student Internship Resume Writing Service India | Student CV', 'Get a professional resume for internship applications. Optimized for top companies and research roles. Starting ₹299.', 'internship resume india, student CV writing service, research internship resume', 'Secure the Best Internships', 'Your internship is the foundation of your career. We help you land it with a professional resume that highlights your academic and project work.', 
    [{ heading: 'Building Your Academic Brand', body: 'We help students from across India present their skills and coursework in a format that attracts top-tier internship providers.' }],
    [{ q: 'Do you help with IIT/NIT internship resumes?', a: 'Yes, we specialize in high-caliber student resumes for top institutions.' }]),

  // 19. CV Writing Service UAE
  rolePage('UAE', 'cv-writing-service-uae', 'Professional CV Writing Service UAE | Dubai & Abu Dhabi Jobs', 'Specialized CV writing for UAE and Dubai job markets. GCC-compliant, ATS-optimized, and recruiter-ready. Starting ₹299.', 'UAE CV writing service, Dubai resume writer, Abu Dhabi job CV', 'Your Gateway to Dubai\'s Job Market', 'We help professionals in India and the UAE secure roles in the Middle East with high-impact, GCC-compliant professional CVs.', 
    [{ heading: 'Dominating the Dubai Job Market', body: 'UAE recruiters have specific expectations. We ensure your CV meets them while remaining 100% ATS-friendly for international firms in the region.' }],
    [{ q: 'Are you based in the UAE?', a: 'We serve the UAE market digitally from India, providing the same premium quality at a much more affordable price point.' }]),

  // 20. Executive Resume Writing India
  rolePage('Executive', 'executive-resume-writing-india', 'Executive Resume Writing Service India | VP, Director & CEO CV', 'Premium executive resume writing for VPs, Directors, and C-level leaders in India. Specialized for high-stakes leadership roles. Starting ₹299.', 'executive resume india, CEO resume writer, leadership branding india', 'Elite Branding for Executive Leaders', 'Leadership requires a different narrative. We build high-impact executive profiles that communicate vision, strategy, and business impact.', 
    [{ heading: 'The Boardroom Perspective', body: 'We move beyond tactical tasks to highlight your strategic influence, revenue responsibility, and organizational leadership.' }],
    [{ q: 'Is this service confidential?', a: 'Absolutely. We maintain 100% confidentiality for all our executive clients.' }]),

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
