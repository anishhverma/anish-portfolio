"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ScreenshotGallery from "./ScreenshotGallery";

/* ─── Types ────────────────────────────────────────────────────────────────── */

interface MetricItem {
  value: string;
  label: string;
  color?: "blue" | "green" | "amber";
}

interface CaseStudyData {
  id: string;
  client: string;
  icon: string;
  role: string;
  period: string;
  challenge: string;
  strategy: string[];
  metrics: MetricItem[];
  gallery: { src: string; alt: string; caption?: string }[];
  platforms: string[];
}

/* ─── Data ─────────────────────────────────────────────────────────────────── */

const basePath = "/anish-portfolio";

const caseStudiesData: CaseStudyData[] = [
  {
    id: "sarthak",
    client: "Sarthak Goswami — Feline Media",
    icon: "🎬",
    role: "Growth Associate & Social Media Strategist",
    period: "Current",
    challenge:
      "Scale Sarthak Goswami's creator brand across YouTube, Instagram, Facebook, and X — growing from a strong YouTube base into a cross-platform media powerhouse with measurable engagement and audience retention.",
    strategy: [
      "Built a content repurposing engine: Long-form → Reels/Shorts with optimized hooks, pacing, and narrative arcs",
      "Developed standalone short-form content (on-ground coverage, protest content, trend-jacking) that consistently went viral",
      "Created week-on-week analytics dashboards tracking views, retention, CTR, subscriber conversion, and traffic sources",
      "Managed multi-platform distribution across YouTube, Instagram, Facebook, and X with platform-native optimization",
      "A/B tested thumbnails, titles, and posting schedules to maximize algorithmic reach",
    ],
    metrics: [
      { value: "15.5M", label: "Views on a Single Reel", color: "blue" },
      { value: "923K", label: "Views on One Long-form Video", color: "blue" },
      { value: "165K hrs", label: "Watch Time Generated", color: "green" },
      { value: "7.1%", label: "Click-Through Rate", color: "green" },
      { value: "34.3%", label: "Audience Retention Rate", color: "amber" },
      { value: "126K", label: "Impressions on X Post", color: "amber" },
    ],
    gallery: [
      {
        src: `${basePath}/portfolio/sarthak/cjp-leverage.png`,
        alt: "Viral reels grid",
        caption:
          "Standalone short-form content — 15.5M, 4.1M, 3.5M, 1.9M views",
      },
      {
        src: `${basePath}/portfolio/sarthak/react-repurpose.png`,
        alt: "React repurpose content",
        caption: "Repurposed React content — 2.8M, 2.3M, 1M+ views",
      },
      {
        src: `${basePath}/portfolio/sarthak/xplain-repurpose.png`,
        alt: "Explainer repurpose content",
        caption: "Repurposed Xplain content — 3.9M, 1.3M, 1.1M views",
      },
      {
        src: `${basePath}/portfolio/sarthak/yt-analytics.png`,
        alt: "YouTube Studio analytics",
        caption: "YT Analytics — 923K views, 165K watch hrs, +3.1K subs",
      },
      {
        src: `${basePath}/portfolio/sarthak/viral-shorts.png`,
        alt: "Viral shorts compilation",
        caption:
          "On-ground viral coverage — 1.4M, 692K, 644K, 404K, 330K views",
      },
      {
        src: `${basePath}/portfolio/sarthak/fb-reels.png`,
        alt: "Facebook reels performance",
        caption: "Facebook reels — 3.9M, 1.9M, 275K views",
      },
      {
        src: `${basePath}/portfolio/sarthak/x-post.png`,
        alt: "X/Twitter viral post",
        caption: "X post — 126K impressions, 590 retweets, 4.6K likes",
      },
      {
        src: `${basePath}/portfolio/sarthak/planning.png`,
        alt: "Week-on-week analytics",
        caption:
          "Analytics dashboard — retention, CTR, traffic source tracking",
      },
      {
        src: `${basePath}/portfolio/sarthak/yt-channel.png`,
        alt: "YouTube channel overview",
        caption: "Channel performance overview",
      },
      {
        src: `${basePath}/portfolio/sarthak/yt-reacts.png`,
        alt: "Sarthak Reacts channel",
        caption: "Sarthak Reacts — secondary channel management",
      },
      {
        src: `${basePath}/portfolio/sarthak/yt-docs.png`,
        alt: "Documentary content",
        caption: "Long-form documentary content analytics",
      },
    ],
    platforms: ["YouTube", "Instagram", "Facebook", "X"],
  },
  {
    id: "my-indian-things",
    client: "My Indian Things",
    icon: "🏠",
    role: "Social Media & Content Manager",
    period: "Internship",
    challenge:
      "Build a cohesive Instagram presence for an Indian home décor and wallpaper brand — creating engaging product showcases, festival content, and meme marketing to drive brand awareness and customer engagement.",
    strategy: [
      "Designed a consistent visual grid strategy with branded product mockups and lifestyle photography",
      "Created festival-themed posts (Janmashtami, Dhanteras, Bhai Dooj, Diwali) to tap into seasonal engagement spikes",
      "Developed meme content and relatable posts to humanize the brand and boost shareability",
      "Managed full Instagram content calendar including reels, carousels, and static posts",
    ],
    metrics: [
      { value: "100+", label: "Posts Created & Published", color: "blue" },
      { value: "Full Grid", label: "Instagram Presence Built", color: "green" },
      {
        value: "Multi-format",
        label: "Reels, Carousels & Stories",
        color: "amber",
      },
    ],
    gallery: [
      {
        src: `${basePath}/portfolio/my-indian-things/grid-1.png`,
        alt: "Instagram grid 1",
        caption: "Product showcases, festival posts, and branded content",
      },
      {
        src: `${basePath}/portfolio/my-indian-things/grid-2.png`,
        alt: "Instagram grid 2",
        caption: "Reels, carousels, and engagement-driven content",
      },
      {
        src: `${basePath}/portfolio/my-indian-things/grid-3.png`,
        alt: "Instagram grid 3",
        caption: "Festival campaigns, memes, and trend-based content",
      },
    ],
    platforms: ["Instagram", "Facebook"],
  },
  {
    id: "uptown-media",
    client: "Uptown Media",
    icon: "🏢",
    role: "Founder & Creative Director",
    period: "Entrepreneurship",
    challenge:
      "Build and run a creative services agency from scratch — acquiring clients, managing a network of freelancers, and delivering end-to-end digital and print projects.",
    strategy: [
      "Acquired clients through cold outreach, networking, and referrals",
      "Built a network of freelance designers, editors, and content creators",
      "Delivered carousel designs, standee graphics, print catalogs, and YouTube video editing",
      "Managed full project lifecycle from discovery calls to final handoff",
    ],
    metrics: [
      { value: "Multiple", label: "Clients Served", color: "blue" },
      { value: "Print + Digital", label: "Project Types", color: "green" },
      { value: "End-to-End", label: "Project Management", color: "amber" },
    ],
    gallery: [
      {
        src: `${basePath}/portfolio/uptown-media/standee-1.png`,
        alt: "Standee design 1",
        caption: "Print standee design for client",
      },
      {
        src: `${basePath}/portfolio/uptown-media/standee-2.png`,
        alt: "Standee design 2",
        caption: "Print standee design",
      },
      {
        src: `${basePath}/portfolio/uptown-media/carousel-1.png`,
        alt: "Carousel design",
        caption: "Social media carousel design",
      },
      {
        src: `${basePath}/portfolio/uptown-media/carousel-2.png`,
        alt: "Carousel design 2",
        caption: "Social media carousel design",
      },
      {
        src: `${basePath}/portfolio/uptown-media/social-media.png`,
        alt: "Social media content",
        caption: "Social media content management",
      },
    ],
    platforms: ["Instagram", "Print", "YouTube"],
  },
  {
    id: "astroport",
    client: "Astroport India",
    icon: "🌌",
    role: "Social Media & Marketing Intern",
    period: "Internship",
    challenge:
      "Create compelling social media creatives for a unique stargazing resort brand, building awareness and driving booking inquiries across multiple locations.",
    strategy: [
      "Designed ad creatives and promotional posts highlighting the resort experience",
      "Created event-based content for Tourism Day, Women's Day, and seasonal campaigns",
      "Wrote marketing copy aligned with the brand's adventure-luxury positioning",
      "Assisted in running paid campaigns to increase inquiries",
    ],
    metrics: [
      { value: "Multi-location", label: "Brand Managed", color: "blue" },
      {
        value: "Ad Creatives",
        label: "Campaign Assets Created",
        color: "green",
      },
      { value: "Paid + Organic", label: "Campaign Types", color: "amber" },
    ],
    gallery: [
      {
        src: `${basePath}/portfolio/astroport/ad-post.jpg`,
        alt: "Astroport ad creative",
        caption: "Promotional ad creative for hotel transformation",
      },
      {
        src: `${basePath}/portfolio/astroport/blanket-stars.jpg`,
        alt: "Blanket of Stars post",
        caption: "Stargazing experience content post",
      },
      {
        src: `${basePath}/portfolio/astroport/bucket-list.jpg`,
        alt: "Bucket list post",
        caption: "Travel bucket list engagement content",
      },
      {
        src: `${basePath}/portfolio/astroport/women-day.jpg`,
        alt: "Women's Day post",
        caption: "Women's Day campaign creative",
      },
      {
        src: `${basePath}/portfolio/astroport/tourism-day.jpg`,
        alt: "Tourism Day post",
        caption: "National Tourism Day creative",
      },
    ],
    platforms: ["Instagram", "Facebook"],
  },
];

/* ─── Color Helpers ────────────────────────────────────────────────────────── */

const colorMap = {
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    text: "text-blue-400",
    glow: "shadow-blue-500/20",
  },
  green: {
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    text: "text-emerald-400",
    glow: "shadow-emerald-500/20",
  },
  amber: {
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    text: "text-amber-400",
    glow: "shadow-amber-500/20",
  },
};

/* ─── Component ────────────────────────────────────────────────────────────── */

export default function ProofOfWork() {
  const [expandedId, setExpandedId] = useState<string>("sarthak");

  return (
    <section id="proof-of-work" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" as const }}
          className="mb-16 text-center"
        >
          <h2 className="font-sora mb-4 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
            Proof of Work
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Real results from real clients. Screenshots, analytics, and metrics
            — not just claims.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-8">
          {caseStudiesData.map((study, idx) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
                ease: "easeOut" as const,
              }}
              className="overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm"
            >
              {/* Header — always visible */}
              <button
                onClick={() =>
                  setExpandedId(expandedId === study.id ? "" : study.id)
                }
                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-slate-800/50 sm:p-8"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{study.icon}</span>
                  <div>
                    <h3 className="font-sora text-xl font-semibold text-slate-50 sm:text-2xl">
                      {study.client}
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      {study.role}
                      <span className="ml-3 inline-flex items-center rounded-full border border-slate-600 px-2 py-0.5 text-xs text-slate-300">
                        {study.period}
                      </span>
                    </p>
                  </div>
                </div>
                {/* Platform badges */}
                <div className="hidden items-center gap-2 sm:flex">
                  {study.platforms.map((p) => (
                    <span
                      key={p}
                      className="rounded-full bg-slate-700/50 px-3 py-1 text-xs text-slate-300"
                    >
                      {p}
                    </span>
                  ))}
                  <svg
                    className={`ml-2 h-5 w-5 text-slate-400 transition-transform duration-300 ${
                      expandedId === study.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>

              {/* Expandable Content */}
              {expandedId === study.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" as const }}
                  className="border-t border-slate-700/50"
                >
                  <div className="space-y-8 p-6 sm:p-8">
                    {/* Challenge & Strategy */}
                    <div className="grid gap-6 lg:grid-cols-2">
                      {/* Challenge */}
                      <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-5">
                        <h4 className="font-sora mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-blue-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                          The Challenge
                        </h4>
                        <p className="text-sm leading-relaxed text-slate-300">
                          {study.challenge}
                        </p>
                      </div>

                      {/* Strategy */}
                      <div className="rounded-xl border border-slate-700/50 bg-slate-900/50 p-5">
                        <h4 className="font-sora mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-emerald-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                          The Strategy
                        </h4>
                        <ul className="space-y-2">
                          {study.strategy.map((s, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-slate-300"
                            >
                              <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-slate-500" />
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Metrics */}
                    <div>
                      <h4 className="font-sora mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                        Key Results
                      </h4>
                      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                        {study.metrics.map((metric, i) => {
                          const colors =
                            colorMap[metric.color || "blue"];
                          return (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.3,
                                delay: i * 0.05,
                              }}
                              className={`rounded-xl border ${colors.border} ${colors.bg} p-4 text-center shadow-lg ${colors.glow}`}
                            >
                              <p
                                className={`font-sora text-xl font-bold ${colors.text} sm:text-2xl`}
                              >
                                {metric.value}
                              </p>
                              <p className="mt-1 text-xs text-slate-400">
                                {metric.label}
                              </p>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Screenshot Gallery */}
                    <div>
                      <h4 className="font-sora mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-slate-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                        Evidence — Click to Expand
                      </h4>
                      <ScreenshotGallery
                        images={study.gallery}
                        columns={study.gallery.length <= 5 ? 3 : 3}
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
