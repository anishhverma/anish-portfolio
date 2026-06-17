// ─── Portfolio Data ──────────────────────────────────────────────────────────

export const siteConfig = {
  name: "Anish",
  fullName: "Anish Verma",
  title: "Social Media Strategist & Growth Associate",
  tagline:
    "I help creators and brands grow through content strategy, audience insights, performance analytics, and growth-focused social media operations.",
  email: "anishverma@email.com", // TODO: Replace with real email
  linkedin: "https://www.linkedin.com/in/anishhverma/",
  instagram: "https://instagram.com/anishhverma", // TODO: Replace with real handle
  twitter: "https://x.com/anishhverma", // TODO: Replace with real handle
};

// ─── About ───────────────────────────────────────────────────────────────────

export const aboutText = [
  "I'm a Social Media Strategist and Growth Associate currently working with Feline Media — the team behind Sarthak Goswami and The Sunday Show, one of India's most prominent independent creator-led media brands.",
  "My journey started with hands-on internships in social media management, where I learned the fundamentals of content scheduling, audience engagement, and brand building. From there I founded Uptown Media, a creative services agency where I managed clients, coordinated freelancers, and delivered end-to-end digital projects.",
  "Today, I specialize in content strategy, short-form content repurposing, YouTube growth, performance analytics, and community management. I turn long-form podcasts and interviews into high-performing reels and shorts, optimize thumbnails and titles for CTR, and build data-driven reporting workflows using AI-powered tools.",
  "I'm deeply passionate about the creator economy, growth engineering, AI-assisted analytics, and the intersection of content and data.",
];

// ─── Skills ──────────────────────────────────────────────────────────────────

export interface Skill {
  name: string;
  level: number; // 0-100
  category: "strategy" | "growth" | "analytics" | "creative";
}

export const skills: Skill[] = [
  { name: "Social Media Strategy", level: 95, category: "strategy" },
  { name: "Content Growth", level: 92, category: "growth" },
  { name: "Content Repurposing", level: 90, category: "growth" },
  { name: "Analytics & Reporting", level: 88, category: "analytics" },
  { name: "YouTube Growth", level: 90, category: "growth" },
  { name: "SEO Optimization", level: 82, category: "strategy" },
  { name: "Community Management", level: 85, category: "strategy" },
  { name: "Trend Research", level: 92, category: "strategy" },
  { name: "Competitor Analysis", level: 85, category: "analytics" },
  { name: "A/B Testing", level: 80, category: "analytics" },
  { name: "Content Packaging", level: 88, category: "creative" },
  { name: "Thumbnail Strategy", level: 87, category: "creative" },
  { name: "Audience Retention Optimization", level: 86, category: "analytics" },
  { name: "Canva Design", level: 82, category: "creative" },
  { name: "AI-Assisted Analytics", level: 84, category: "analytics" },
];

// ─── Experience ──────────────────────────────────────────────────────────────

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
  isCurrent?: boolean;
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Doctor Doors",
    role: "Social Media Management Intern",
    period: "Early Career",
    description:
      "Built foundational social media management skills through hands-on content creation and audience engagement.",
    highlights: [
      "Managed the company's Twitter (X) presence with consistent scheduling and publishing",
      "Created text-based social media posts and static creatives",
      "Developed core skills in content scheduling, audience engagement, and platform operations",
    ],
  },
  {
    id: 2,
    company: "Astroport India",
    role: "Social Media & Marketing Intern",
    period: "Internship",
    description:
      "Managed multi-platform social media for a multi-location resort brand, driving bookings and brand awareness.",
    highlights: [
      "Managed Instagram, Facebook, and X accounts across multiple resort locations",
      "Designed promotional creatives and edited short-form video content",
      "Assisted in running paid campaigns to increase inquiries and bookings",
      "Wrote captions and marketing copy aligned with branding goals",
    ],
  },
  {
    id: 3,
    company: "My Indian Things",
    role: "Social Media & Content Management Intern",
    period: "Internship",
    description:
      "Oversaw end-to-end content operations including planning, scheduling, QA, and performance monitoring.",
    highlights: [
      "Maintained content calendars for consistent communication",
      "Conducted quality assurance reviews before publication",
      "Monitored content performance and engagement metrics",
      "Managed audience interactions and community engagement",
    ],
  },
  {
    id: 4,
    company: "Uptown Media",
    role: "Founder",
    period: "Entrepreneurship",
    description:
      "Founded and managed a creative services agency delivering digital solutions to clients through a network of freelance creatives.",
    highlights: [
      "Acquired clients through outreach, networking, and referrals",
      "Built and coordinated a network of freelance designers and editors",
      "Managed end-to-end project delivery, from discovery calls to final handoff",
      "Generated revenue through successful project acquisition and management",
    ],
  },
  {
    id: 5,
    company: "Feline Media",
    role: "Social Media Strategist & Growth Associate",
    period: "Current",
    description:
      "Leading content strategy, growth operations, and analytics for Sarthak Goswami's The Sunday Show — one of India's most prominent independent creator-led media brands with 1.6M+ subscribers.",
    highlights: [
      "Repurpose long-form content into high-performing short-form reels and shorts",
      "Develop hooks, narrative structures, and story flows for maximum retention",
      "Collaborate on thumbnail strategy, titles, and SEO-optimized descriptions",
      "Build AI-powered analytics workflows and performance reporting systems",
      "Conduct A/B testing on thumbnails, titles, posting schedules, and content formats",
      "Monitor viral trends and cultural moments to identify content opportunities",
      "Manage community engagement across YouTube, Instagram, Facebook, and X",
    ],
    isCurrent: true,
  },
];

// ─── Case Studies ────────────────────────────────────────────────────────────

export interface CaseStudy {
  id: number;
  title: string;
  category: string;
  objective: string;
  strategy: string;
  result: string;
  metric: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Short-Form Content Engine",
    category: "Content Repurposing",
    objective:
      "Transform long-form Sunday Show episodes into viral short-form content across platforms.",
    strategy:
      "Identified high-retention moments from podcasts and interviews, crafted compelling hooks and narrative arcs, optimized pacing and music for each platform's algorithm.",
    result:
      "Consistently produced viral reels and shorts that drove massive audience acquisition.",
    metric: "50+ Viral Reels", // TODO: Replace with real number
  },
  {
    id: 2,
    title: "YouTube Growth Strategy",
    category: "YouTube Growth",
    objective:
      "Increase CTR and audience retention across The Sunday Show's YouTube channel.",
    strategy:
      "A/B tested thumbnails and titles, optimized visual hierarchy, wrote SEO-focused descriptions, and refined content packaging for discoverability.",
    result:
      "Significant improvements in click-through rates and average view duration.",
    metric: "30% CTR Uplift", // TODO: Replace with real number
  },
  {
    id: 3,
    title: "Trend-Based Rapid Content",
    category: "Trend Execution",
    objective:
      "Capitalize on trending conversations and viral moments with rapid-response content.",
    strategy:
      "Monitored breaking news, audience conversations, and cultural moments in real-time. Designed trend-based static posts, memes, and creatives for immediate publishing.",
    result:
      "Captured high-engagement windows and expanded reach beyond core audience.",
    metric: "2x Engagement Spikes", // TODO: Replace with real number
  },
  {
    id: 4,
    title: "Analytics & Reporting System",
    category: "Analytics",
    objective:
      "Build a structured data pipeline for content performance analysis and decision-making.",
    strategy:
      "Extracted data from YouTube Studio and Meta Business Suite, built organized reporting workflows, and used AI-powered tools to identify audience behavior patterns.",
    result:
      "Enabled data-driven content decisions and clear performance visibility for management.",
    metric: "AI-Powered Insights", // TODO: Replace with real description
  },
];

// ─── Results / Metrics ───────────────────────────────────────────────────────

export interface Metric {
  value: number;
  suffix: string;
  label: string;
}

export const metrics: Metric[] = [
  { value: 10, suffix: "M+", label: "Total Views Generated" }, // TODO: Replace
  { value: 50, suffix: "+", label: "Viral Reels Created" }, // TODO: Replace
  { value: 5, suffix: "+", label: "Brands & Creators Served" },
  { value: 1.6, suffix: "M+", label: "Subscriber Channel" },
];

// ─── Tools & Platforms ───────────────────────────────────────────────────────

export interface Tool {
  name: string;
  icon: string; // emoji or SVG identifier
}

export const tools: Tool[] = [
  { name: "ChatGPT", icon: "🤖" },
  { name: "Claude", icon: "🧠" },
  { name: "Canva", icon: "🎨" },
  { name: "Excel", icon: "📊" },
  { name: "YouTube Studio", icon: "▶️" },
  { name: "Meta Business Suite", icon: "📱" },
  { name: "Instagram", icon: "📸" },
  { name: "Facebook", icon: "👥" },
  { name: "X (Twitter)", icon: "✖️" },
];

// ─── Content Growth Flow Steps ───────────────────────────────────────────────

export const growthFlowSteps = [
  { label: "Long-form Content", icon: "🎥" },
  { label: "Hook Creation", icon: "🪝" },
  { label: "Short-form Content", icon: "📱" },
  { label: "Audience Reach", icon: "📡" },
  { label: "Growth", icon: "📈" },
];

// ─── Navigation ──────────────────────────────────────────────────────────────

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Results", href: "#results" },
  { label: "Tools", href: "#tools" },
  { label: "Contact", href: "#contact" },
];
