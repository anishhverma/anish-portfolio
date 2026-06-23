"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PhoneMockup from "./mockups/PhoneMockup";
import BrowserMockup from "./mockups/BrowserMockup";

const basePath = "/anish-portfolio";

/* ─── Shared Animation ──────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

/* ═══════════════════════════════════════════════════════════════════════
   SECTION 01 — SARTHAK GOSWAMI (FELINE MEDIA)
   Dark hero layout with overlapping mockups and floating metrics
   ═══════════════════════════════════════════════════════════════════════ */
function SarthakSection() {
  return (
    <div className="space-y-16">
      {/* Section Divider */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-center gap-6">
        <span className="font-sora text-7xl font-black text-transparent [-webkit-text-stroke:2px_rgba(148,163,184,0.3)] sm:text-8xl">01</span>
        <div>
          <h3 className="font-sora text-3xl font-bold text-white sm:text-4xl">Social Media & Content Strategy</h3>
          <p className="text-lg text-blue-400 font-medium mt-1">Sarthak Goswami — Feline Media</p>
        </div>
      </motion.div>

      {/* Hero Block */}
      <div className="rounded-[2rem] bg-slate-900 border border-slate-800 p-6 sm:p-10 lg:p-14 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-emerald-500/5" />

        <div className="relative grid lg:grid-cols-2 gap-10 items-start">
          {/* Left — Info + Metrics */}
          <div className="space-y-8">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <p className="text-slate-300 leading-relaxed text-lg">
                Scaled Sarthak Goswami&apos;s creator brand across YouTube, Instagram, Facebook, and X.
                Built a content repurposing engine — Long-form → Reels/Shorts with optimized hooks and pacing.
                Developed standalone viral short-form content that consistently went viral.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {["YouTube", "Instagram", "Facebook", "X"].map((p) => (
                  <span key={p} className="rounded-full border border-slate-700 px-3 py-1 text-xs font-medium text-slate-300">{p}</span>
                ))}
              </div>
            </motion.div>

            {/* Floating Metrics */}
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 gap-3 sm:gap-4">
              <MetricCard value="15.5M" label="Views on Single Reel" arrow="↑" color="green" />
              <MetricCard value="923K" label="Long-form Video Views" arrow="↑" color="green" />
              <MetricCard value="165K hrs" label="Watch Time Generated" arrow="↑" color="blue" />
              <MetricCard value="7.1%" label="Click-Through Rate" arrow="↑" color="blue" />
              <MetricCard value="34.3%" label="Audience Retention" arrow="↑" color="amber" />
              <MetricCard value="126K" label="X Impressions" arrow="↑" color="amber" />
            </motion.div>
          </div>

          {/* Right — Overlapping Mockups */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative min-h-[500px] lg:min-h-[600px]"
          >
            {/* Browser: YT Analytics */}
            <div className="absolute top-0 right-0 w-[95%] z-10 hover:z-30 transition-all duration-300 hover:scale-[1.02]">
              <BrowserMockup src={`${basePath}/portfolio/sarthak/yt-analytics.png`} alt="YouTube Studio Analytics" />
            </div>
            {/* Phone: X post */}
            <div className="absolute bottom-0 left-0 z-20 hover:z-30 transition-all duration-300 hover:scale-105">
              <PhoneMockup src={`${basePath}/portfolio/sarthak/x-post.png`} alt="X Viral Post" className="w-[200px] sm:w-[220px]" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Row 2 — Viral Content Grids (All in Browser mockups) */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
        <h4 className="font-sora text-xl font-semibold text-slate-200">Viral Short-Form Content</h4>
        <p className="text-sm text-slate-400 max-w-2xl">Standalone reels & repurposed content with 15.5M, 4.1M, 3.9M, 3.5M, 2.8M+ views</p>
        <div className="grid md:grid-cols-2 gap-4">
          <BrowserMockup src={`${basePath}/portfolio/sarthak/cjp-leverage.png`} alt="CJP Viral Reels — 15.5M, 4.1M, 3.5M views" />
          <BrowserMockup src={`${basePath}/portfolio/sarthak/viral-shorts.png`} alt="On-ground coverage — 1.4M, 692K, 644K views" />
        </div>
      </motion.div>

      {/* Row 3 — Repurposed Content */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
        <h4 className="font-sora text-xl font-semibold text-slate-200">Repurposed Content Engine</h4>
        <p className="text-sm text-slate-400 max-w-2xl">Long-form → Short-form repurposing across React and Xplain formats</p>
        <div className="grid md:grid-cols-2 gap-4">
          <BrowserMockup src={`${basePath}/portfolio/sarthak/react-repurpose.png`} alt="React repurpose — 2.8M, 2.3M, 1M+ views" />
          <BrowserMockup src={`${basePath}/portfolio/sarthak/xplain-repurpose.png`} alt="Xplain repurpose — 3.9M, 1.3M, 1.1M views" />
        </div>
      </motion.div>

      {/* Row 4 — Multi-Platform Distribution */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
        <h4 className="font-sora text-xl font-semibold text-slate-200">Multi-Platform Distribution</h4>
        <p className="text-sm text-slate-400 max-w-2xl">Facebook Reels, YouTube Channels, and Analytics Dashboards</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <BrowserMockup src={`${basePath}/portfolio/sarthak/fb-reels.png`} alt="Facebook reels — 3.9M, 1.9M, 275K views" />
          <BrowserMockup src={`${basePath}/portfolio/sarthak/yt-channel.png`} alt="YouTube channel overview" />
          <BrowserMockup src={`${basePath}/portfolio/sarthak/yt-reacts.png`} alt="Sarthak Reacts channel" />
        </div>
      </motion.div>

      {/* Row 5 — Analytics & Planning */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-4">
        <h4 className="font-sora text-xl font-semibold text-slate-200">Analytics & Reporting</h4>
        <p className="text-sm text-slate-400 max-w-2xl">Week-on-week analysis dashboards and documentary content performance</p>
        <div className="grid md:grid-cols-2 gap-4">
          <BrowserMockup src={`${basePath}/portfolio/sarthak/planning.png`} alt="Week-on-week analytics dashboard" />
          <BrowserMockup src={`${basePath}/portfolio/sarthak/yt-docs.png`} alt="Long-form documentary analytics" />
        </div>
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   SECTION 02 — MY INDIAN THINGS
   Light-themed bento with phone mockups for Instagram grids
   ═══════════════════════════════════════════════════════════════════════ */
function MyIndianThingsSection() {
  return (
    <div className="space-y-12">
      {/* Section Divider */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-center gap-6">
        <span className="font-sora text-7xl font-black text-transparent [-webkit-text-stroke:2px_rgba(148,163,184,0.3)] sm:text-8xl">02</span>
        <div>
          <h3 className="font-sora text-3xl font-bold text-white sm:text-4xl">Social Media & Content</h3>
          <p className="text-lg text-emerald-400 font-medium mt-1">My Indian Things — Home Décor Brand</p>
        </div>
      </motion.div>

      {/* Light Bento Card */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="rounded-[2rem] bg-gradient-to-br from-slate-50 to-slate-100 p-6 sm:p-10 lg:p-14 overflow-hidden relative"
      >
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-200/40 rounded-full filter blur-[80px]" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-200/30 rounded-full filter blur-[60px]" />

        <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-start">
          {/* Left — Info */}
          <div className="space-y-6">
            <p className="text-slate-700 leading-relaxed text-lg">
              Built a cohesive Instagram presence for an Indian home décor and wallpaper brand —
              creating engaging product showcases, festival content, and meme marketing to drive brand awareness.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Instagram", "Facebook", "Content Calendar", "Festival Campaigns"].map((t) => (
                <span key={t} className="rounded-full border border-slate-300 px-3 py-1 text-xs font-medium text-slate-600 bg-white/60">{t}</span>
              ))}
            </div>

            {/* Mini Metrics */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
                <p className="text-3xl font-black text-slate-900">100+</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mt-1">Posts Published</p>
              </div>
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-200">
                <p className="text-3xl font-black text-slate-900">Full Grid</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mt-1">IG Presence Built</p>
              </div>
            </div>
          </div>

          {/* Right — Phone Mockup with main grid */}
          <div className="flex justify-center">
            <PhoneMockup src={`${basePath}/portfolio/my-indian-things/grid-1.png`} alt="Instagram Grid 1" />
          </div>
        </div>

        {/* More Grids Below */}
        <div className="relative z-10 mt-10 grid sm:grid-cols-2 gap-4">
          <BrowserMockup src={`${basePath}/portfolio/my-indian-things/grid-2.png`} alt="Instagram Grid 2 — Reels, carousels" />
          <BrowserMockup src={`${basePath}/portfolio/my-indian-things/grid-3.png`} alt="Instagram Grid 3 — Festival campaigns" />
        </div>
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   SECTION 03 — UPTOWN MEDIA
   Dark gradient with browser + phone mockups for print & digital
   ═══════════════════════════════════════════════════════════════════════ */
function UptownMediaSection() {
  return (
    <div className="space-y-12">
      {/* Section Divider */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-center gap-6">
        <span className="font-sora text-7xl font-black text-transparent [-webkit-text-stroke:2px_rgba(148,163,184,0.3)] sm:text-8xl">03</span>
        <div>
          <h3 className="font-sora text-3xl font-bold text-white sm:text-4xl">Creative Agency & Design</h3>
          <p className="text-lg text-violet-400 font-medium mt-1">Uptown Media — Founder</p>
        </div>
      </motion.div>

      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="rounded-[2rem] bg-gradient-to-br from-slate-900 via-slate-800 to-violet-950/30 border border-slate-700/50 p-6 sm:p-10 lg:p-14 overflow-hidden relative"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-blue-500/5" />

        <div className="relative z-10 grid lg:grid-cols-12 gap-10 items-start">
          {/* Left — Info */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-slate-300 leading-relaxed text-lg">
              Built and ran a creative services agency from scratch — acquiring clients, managing a freelancer network,
              and delivering end-to-end digital and print projects including carousels, standees, catalogs, and video editing.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Instagram", "Print Design", "YouTube", "Carousel Design"].map((t) => (
                <span key={t} className="rounded-full border border-slate-600 px-3 py-1 text-xs font-medium text-slate-300">{t}</span>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-slate-950/60 rounded-2xl p-5 border border-slate-700">
                <p className="text-2xl font-black text-white">End-to-End</p>
                <p className="text-xs text-slate-400 uppercase tracking-wide mt-1">Project Mgmt</p>
              </div>
              <div className="bg-slate-950/60 rounded-2xl p-5 border border-slate-700">
                <p className="text-2xl font-black text-white">Print + Digi</p>
                <p className="text-xs text-slate-400 uppercase tracking-wide mt-1">Assets Delivered</p>
              </div>
            </div>
          </div>

          {/* Right — Browser Mockup */}
          <div className="lg:col-span-7">
            <BrowserMockup src={`${basePath}/portfolio/uptown-media/social-media.png`} alt="Uptown Media social content" />
          </div>
        </div>

        {/* More Work */}
        <div className="relative z-10 mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Carousel designs in Browser */}
          <BrowserMockup src={`${basePath}/portfolio/uptown-media/carousel-1.png`} alt="Carousel design 1" />
          <BrowserMockup src={`${basePath}/portfolio/uptown-media/carousel-2.png`} alt="Carousel design 2" />
          {/* Print standees in Phone (portrait format) */}
          <PhoneMockup src={`${basePath}/portfolio/uptown-media/standee-1.png`} alt="Standee design 1" className="mx-auto" />
          <PhoneMockup src={`${basePath}/portfolio/uptown-media/standee-2.png`} alt="Standee design 2" className="mx-auto" />
        </div>
      </motion.div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   SECTION 04 — ASTROPORT
   Indigo/dark themed with phone mockups for social creatives
   ═══════════════════════════════════════════════════════════════════════ */
function AstroportSection() {
  return (
    <div className="space-y-12">
      {/* Section Divider */}
      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex items-center gap-6">
        <span className="font-sora text-7xl font-black text-transparent [-webkit-text-stroke:2px_rgba(148,163,184,0.3)] sm:text-8xl">04</span>
        <div>
          <h3 className="font-sora text-3xl font-bold text-white sm:text-4xl">Social Media & Marketing</h3>
          <p className="text-lg text-indigo-400 font-medium mt-1">Astroport India — Stargazing Resort</p>
        </div>
      </motion.div>

      <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        className="rounded-[2rem] bg-gradient-to-br from-indigo-950/50 via-slate-900 to-slate-900 border border-indigo-500/20 p-6 sm:p-10 lg:p-14 overflow-hidden relative"
      >
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/10 rounded-full filter blur-[100px]" />

        <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-start">
          {/* Left — Info */}
          <div className="space-y-6">
            <p className="text-slate-300 leading-relaxed text-lg">
              Created compelling social media creatives for a unique stargazing resort brand, building awareness
              and driving booking inquiries across multiple locations with event-based campaigns.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Instagram", "Facebook", "Ad Creatives", "Event Marketing"].map((t) => (
                <span key={t} className="rounded-full border border-indigo-500/30 px-3 py-1 text-xs font-medium text-indigo-300">{t}</span>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-indigo-600/20 rounded-2xl p-5 border border-indigo-500/30">
                <p className="text-2xl font-black text-white">Multi</p>
                <p className="text-xs text-indigo-300/80 uppercase tracking-wide mt-1">Location Brand</p>
              </div>
              <div className="bg-indigo-600/20 rounded-2xl p-5 border border-indigo-500/30">
                <p className="text-2xl font-black text-white">Paid + Organic</p>
                <p className="text-xs text-indigo-300/80 uppercase tracking-wide mt-1">Campaign Types</p>
              </div>
            </div>
          </div>

          {/* Right — Featured Phone Mockup */}
          <div className="flex justify-center">
            <PhoneMockup src={`${basePath}/portfolio/astroport/ad-post.jpg`} alt="Astroport Hotel Ad" />
          </div>
        </div>

        {/* All Creatives — Phone Mockups in a row */}
        <div className="relative z-10 mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          <PhoneMockup src={`${basePath}/portfolio/astroport/blanket-stars.jpg`} alt="Blanket of Stars post" className="w-full max-w-[220px] mx-auto" />
          <PhoneMockup src={`${basePath}/portfolio/astroport/bucket-list.jpg`} alt="Bucket list post" className="w-full max-w-[220px] mx-auto" />
          <PhoneMockup src={`${basePath}/portfolio/astroport/women-day.jpg`} alt="Women's Day campaign" className="w-full max-w-[220px] mx-auto" />
          <PhoneMockup src={`${basePath}/portfolio/astroport/tourism-day.jpg`} alt="Tourism Day creative" className="w-full max-w-[220px] mx-auto" />
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Metric Card Component ──────────────────────────────────────────── */
function MetricCard({ value, label, arrow, color }: { value: string; label: string; arrow: string; color: "green" | "blue" | "amber" }) {
  const arrowColor = color === "green" ? "text-green-500" : color === "blue" ? "text-blue-400" : "text-amber-400";
  return (
    <div className="bg-slate-950 rounded-2xl p-5 border border-slate-800 shadow-xl relative overflow-hidden group">
      <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">
        {value}<span className={`${arrowColor} text-xl sm:text-2xl ml-1`}>{arrow}</span>
      </p>
      <p className="text-[11px] sm:text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">{label}</p>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════════════ */
export default function ProofOfWork() {
  return (
    <section id="proof-of-work" className="relative bg-slate-950 px-4 py-24 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950" />

      <div className="relative mx-auto max-w-7xl space-y-32">
        {/* Section Header */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
          <h2 className="font-sora text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
            notable <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 italic">Projects</span>
          </h2>
          <p className="mt-4 text-xl text-slate-400">Real data, real results — not just claims.</p>
        </motion.div>

        <SarthakSection />
        <MyIndianThingsSection />
        <UptownMediaSection />
        <AstroportSection />
      </div>
    </section>
  );
}
