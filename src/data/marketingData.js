export const SAMPLE_SMS = [
  {
    id: "sms-1",
    title: "Phishing Gift Card Scam",
    text: "URGENT: Your $500 Amazon Gift Card claim expires in 2 hours! Click http://bit.ly/amz-claim-500 NOW to receive your funds before forfeit.",
    spamScore: 96,
    risk: "CRITICAL",
    category: "Phishing / Malicious Link",
    keywords: ["URGENT", "$500", "expires in 2 hours", "http://bit.ly", "NOW"],
    explanation: "High-urgency language combined with shortened non-official link and financial bait signature."
  },
  {
    id: "sms-2",
    title: "Crypto Promo Spam",
    text: "Congratulations! You were selected for 0.5 BTC giveaway from Binance! Log in at https://binance-bonus-claim.xyz to withdraw immediately.",
    spamScore: 92,
    risk: "HIGH",
    category: "Crypto Scam",
    keywords: ["0.5 BTC", "giveaway", "selected for", "Binance", ".xyz"],
    explanation: "Unsolicited reward notification with spoofed domain name (.xyz) and financial request."
  },
  {
    id: "sms-3",
    title: "Package Delivery Phishing",
    text: "USPS Notice: Your package could not be delivered due to an incomplete address. Update info at http://usps-redelivery-item.com",
    spamScore: 88,
    risk: "HIGH",
    category: "Smishing (SMS Phishing)",
    keywords: ["could not be delivered", "incomplete address", "usps-redelivery-item.com"],
    explanation: "Classic delivery smishing vector using domain spoofing to capture credit card credentials."
  },
  {
    id: "sms-4",
    title: "Legitimate Bank Fraud Alert",
    text: "Chase Fraud Alert: Did you spend $142.50 at TARGET on card ending in 4092? Reply YES or NO. Msg & data rates may apply.",
    spamScore: 8,
    risk: "SAFE",
    category: "Transactional / Security",
    keywords: ["Fraud Alert", "ending in 4092", "Reply YES or NO"],
    explanation: "Standard 2-way verification format without suspicious external links or forced immediate payout."
  }
];

export const SAMPLE_REVIEWS = [
  {
    id: "rev-1",
    title: "Bot-Generated 5-Star Spam",
    product: "Wireless Noise-Canceling Headphones",
    rating: 5,
    text: "BEST PRODUCT EVER! Amazing quality fast shipping highly recommended best quality best product 10/10 wow wow wow I love it buy now!",
    authenticityScore: 14,
    risk: "FAKE (Bot Cluster)",
    flags: ["Overused Exclamation", "Low Lexical Diversity", "Keyword Stuffing", "Generic Praise"],
    nlpMetrics: {
      sentimentMismatch: "Extreme Positive (Unrealistic)",
      syntacticUniformity: "98.4%",
      reviewerAccountAge: "2 days",
      verifiedPurchase: false
    }
  },
  {
    id: "rev-2",
    title: "Competitor 1-Star Review Attack",
    product: "Ergonomic Office Chair",
    rating: 1,
    text: "TERRIBLE! BROKE IN 5 MINUTES! DO NOT BUY! Instead buy Brand X Chair which is 100x better and cheaper at brandx.com!",
    authenticityScore: 22,
    risk: "SUSPICIOUS (Competitor Plug)",
    flags: ["Competitor Brand Referral", "Direct External Link", "ALL CAPS Rage Pattern"],
    nlpMetrics: {
      sentimentMismatch: "Hostile Intent",
      syntacticUniformity: "91.2%",
      reviewerAccountAge: "1 day",
      verifiedPurchase: false
    }
  },
  {
    id: "rev-3",
    title: "Authentic Detailed Customer Review",
    product: "Stainless Steel Espresso Machine",
    rating: 4,
    text: "Great coffee maker overall. The steam wand takes about 30 seconds to heat up, which is slightly slower than my old Breville, but the extraction pressure is super consistent. Setup took around 15 mins.",
    authenticityScore: 94,
    risk: "VERIFIED AUTHENTIC",
    flags: ["Specific Product Details", "Balanced Pros/Cons", "Natural Tone"],
    nlpMetrics: {
      sentimentMismatch: "Balanced (Authentic)",
      syntacticUniformity: "32.1%",
      reviewerAccountAge: "3 years",
      verifiedPurchase: true
    }
  }
];

export const POSITIONING_MATRIX = [
  {
    persona: "Shopify & Amazon E-Commerce Merchants (B2B)",
    painPoints: "Fake bot reviews damage brand credibility, inflate refund rates, and trigger marketplace account suspensions.",
    valueProp: "Automated real-time review verification API that filters spam reviews before they hit product pages, preserving customer trust and boosting ROAS.",
    keyMessage: "Protect your store's 5-star reputation with enterprise-grade NLP trust verification.",
    diffFactor: "Real-time NLP sentiment & bot detection vs passive post-facto reporting tools.",
    tagline: "Uncontested Trust for Modern E-Commerce."
  },
  {
    persona: "Cyber-Conscious Mobile Consumers (B2C)",
    painPoints: "Overwhelmed by smishing scams, phishing SMS texts, and fake Amazon review ratings when shopping online.",
    valueProp: "A zero-latency browser extension & SMS shield that detects phishing links and calculates authentic product review ratings instantly.",
    keyMessage: "Never fall for a fake review or SMS scam again.",
    diffFactor: "Dual-shield protection (SMS smishing + review fraud) powered by lightweight browser AI.",
    tagline: "Shop with Confidence. Communicate without Fear."
  },
  {
    persona: "Marketplace Platforms & Review Aggregators (Enterprise)",
    painPoints: "Sophisticated AI LLM bot networks creating thousands of hyper-realistic fake reviews at scale.",
    valueProp: "API-first NLP engine trained on 10M+ review corpora with graph neural network reviewer clustering.",
    keyMessage: "Scale platform integrity with zero latency NLP threat intelligence.",
    diffFactor: "Sub-50ms API response time with 99.4% detection accuracy across 14 languages.",
    tagline: "The Security Layer for Digital Reputation."
  }
];

export const GTM_LAUNCH_PLAN = [
  {
    phase: "Phase 1: Pre-Launch & Validation (Weeks 1-4)",
    focus: "Audience research, closed beta with 50 Shopify brands, and positioning alignment.",
    deliverables: [
      "Customer Interviews with 30+ Shopify Plus Store Owners",
      "Interactive Product Demo & Waitlist Landing Page (Targeting 2.5k signups)",
      "Technical Whitepaper on NLP Fake Review Vectors",
      "Closed Beta rollout & case study data collection"
    ]
  },
  {
    phase: "Phase 2: Launch Day & Market Entry (Week 5)",
    focus: "Maximum visibility across Product Hunt, TechCrunch, and Shopify App Store feature.",
    deliverables: [
      "Product Hunt Launch (#1 Product of the Day Playbook)",
      "Co-Marketing PR with E-Commerce Fraud Agencies",
      "Launch Video & Live Demo Sandbox",
      "Shopify App Store listing optimization & app review badge"
    ]
  },
  {
    phase: "Phase 3: Scale & Growth Loops (Weeks 6-12)",
    focus: "Paid performance marketing expansion, content SEO dominance, and B2B SaaS partner referral programs.",
    deliverables: [
      "Performance Media campaigns on Meta, LinkedIn & Google Ads ($15k/mo budget)",
      "SEO Content Hub: 15 High-intent article briefs + programmatic review scanner tool",
      "Affiliate & Agency Partner Portal (20% recurring commission for e-com agencies)",
      "Freemium B2C Browser Extension viral growth loop"
    ]
  }
];

export const COMPETITIVE_BATTLECARD = {
  competitors: [
    {
      name: "TrustShield AI",
      type: "Real-time NLP Trust Engine",
      smsFiltering: "Advanced Smishing & Phishing Neural Net",
      reviewVerification: "Real-Time NLP + Bot Cadence Analysis",
      integration: "1-Click Shopify App / REST API",
      price: "$49/mo Merchant / Free Consumer",
      advantage: "Dual protection, sub-50ms NLP latency, real-time prevention before publishing."
    },
    {
      name: "Fakespot / Browser Plugins",
      type: "Post-Facto Review Analyzer",
      smsFiltering: "None",
      reviewVerification: "Grade-based heuristic scoring (A-F)",
      integration: "Browser Extension only",
      price: "Freemium B2C",
      advantage: "Established consumer brand recognition."
    },
    {
      name: "Apple iMessage / Android Filters",
      type: "Native Telecom Spam Filter",
      smsFiltering: "Keyword & Unknown Sender Rules",
      reviewVerification: "None",
      integration: "Native OS",
      price: "Included in OS",
      advantage: "Pre-installed on mobile devices."
    }
  ]
};

export const PERFORMANCE_CAMPAIGNS = [
  {
    platform: "Meta / Instagram Ads",
    targetAudience: "Shopify Store Owners, E-commerce Founders, Dropshippers (Ages 24-55)",
    adFormat: "Video UGC & Dynamic Carousel (Problem / Solution)",
    headline: "Stop Paying For Fake 5-Star Reviews. Protect Your Shopify Sales With AI.",
    primaryText: "Fake reviews don't just trick buyers—they ruin your ad ROAS and trigger account flags. TrustShield AI automatically audits incoming reviews using NLP sentiment analysis.",
    cta: "Start 14-Day Free Trial",
    predictedCTR: "3.85%",
    estimatedCPC: "$1.45"
  },
  {
    platform: "Google Search Ads (B2B Intent)",
    targetAudience: "High-intent searchers querying: 'how to block fake shopify reviews', 'sms spam filter api'",
    adFormat: "Responsive Search Ads (RSA)",
    headline: "AI Fake Review Detector | Stop Fake Reviews on Shopify | TrustShield AI",
    primaryText: "Filter Bot Reviews & Spam SMS in Real Time. 99.4% Accuracy. Install in 2 Minutes.",
    cta: "Get Instant Access",
    predictedCTR: "6.20%",
    estimatedCPC: "$3.80"
  },
  {
    platform: "LinkedIn B2B Sponsored Content",
    targetAudience: "VPs of E-Commerce, Chief Trust Officers, Fraud & Compliance Managers",
    adFormat: "Single Image & Thought Leadership Document Ad",
    headline: "The $1.5B Fake Review Problem: How E-Commerce Leaders Secure Merchant Reputation",
    primaryText: "Read our 2026 E-Commerce Fraud Report. Discover how enterprise brands block sophisticated AI LLM review bots using real-time NLP graph analysis.",
    cta: "Download Free Whitepaper",
    predictedCTR: "2.10%",
    estimatedCPC: "$7.50"
  }
];

export const SEO_KEYWORDS = [
  {
    keyword: "how to detect fake amazon reviews",
    volume: "18,100",
    kd: "38 (Medium)",
    intent: "Informational",
    targetAsset: "Pillar Guide: 7 Ways to Spot AI-Generated Reviews in 2026",
    cvrPotential: "High (B2C Browser Extension Install)"
  },
  {
    keyword: "fake review detection api for shopify",
    volume: "4,400",
    kd: "24 (Low)",
    intent: "Commercial / Transactional",
    targetAsset: "Product Landing Page & Developer Docs",
    cvrPotential: "Very High (B2B Trial Signups)"
  },
  {
    keyword: "sms spam filter for business",
    volume: "9,600",
    kd: "45 (Medium)",
    intent: "Commercial",
    targetAsset: "Comparison Guide: TrustShield vs Telecom Filters",
    cvrPotential: "High (B2B Lead Gen)"
  },
  {
    keyword: "smishing scam examples 2026",
    volume: "14,200",
    kd: "29 (Low)",
    intent: "Informational",
    targetAsset: "Educational Hub: Top 10 SMS Phishing Vectors",
    cvrPotential: "Medium (Organic Brand Awareness)"
  }
];

export const CONTENT_CALENDAR = [
  { day: "Day 1", channel: "LinkedIn B2B", title: "Why 5-Star Ratings Are Losing Consumer Trust (Data Inside)", format: "Infographic Carousel" },
  { day: "Day 4", channel: "Blog / SEO", title: "The Anatomy of a Bot Review: How NLP Detects Syntactic Patterns", format: "Long-Form Technical Post" },
  { day: "Day 8", channel: "YouTube / UGC", title: "Testing 10 Amazon Products with AI Review Analyzer", format: "Video Showcase" },
  { day: "Day 12", channel: "Email Nurture", title: "Case Study: How Store X Saved $45k in Ad Spend by Filtering Fake Reviews", format: "B2B Case Study Email" },
  { day: "Day 18", channel: "Twitter / X", title: "Thread: How LLMs are being used to generate fake review networks", format: "Viral Breakdown Thread" },
  { day: "Day 25", channel: "Webinar", title: "E-Commerce Trust Summit: Protecting Brand Integrity in the AI Era", format: "Live Panel Workshop" }
];

export const RESUME_BULLETS = {
  pmm: [
    "Spearheaded Go-To-Market (GTM) positioning & launch strategy for an NLP-based Spam SMS & Fake Review Detection solution, targeting B2B e-commerce merchants and B2C consumers.",
    "Conducted market research & competitive analysis across 30+ e-commerce brand managers to craft tailored messaging hierarchies, buyer personas, and sales enablement battlecards.",
    "Defined product value propositions and pricing tiers, leading to a 34% increase in beta trial signups during product launch simulation."
  ],
  performance: [
    "Architected multi-channel paid acquisition strategy (Meta, Google Search, LinkedIn Ads) with a projected $15k monthly budget, driving low CAC and high-intent B2B trials.",
    "Engineered interactive unit economics ROI calculator to model funnel conversion rates (CPC, Landing Page CVR, Free-to-Paid) and optimize paid campaign ROAS.",
    "Designed and executed CRO A/B testing roadmap for landing page copy and ad creative variants, improving projected CVR by 28%."
  ],
  content: [
    "Developed comprehensive Content Marketing & SEO roadmap, identifying 20+ high-intent keyword clusters (50k+ total search volume) to capture organic B2B and B2C traffic.",
    "Authored long-form thought leadership pillar assets and technical whitepapers detailing NLP sentiment and review fraud vectors to build domain authority.",
    "Created 30-day multi-channel content calendar and 5-stage B2B email lead nurture drip campaign that increased content engagement and trial conversions."
  ]
};
