"use client";

import { motion } from "framer-motion";
import PhoneMockup from "./mockups/PhoneMockup";
import BrowserMockup from "./mockups/BrowserMockup";

const basePath = "/anish-portfolio";

export default function ProofOfWork() {
  return (
    <section id="proof-of-work" className="relative bg-slate-950 px-4 py-24 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950" />
      
      <div className="relative mx-auto max-w-7xl space-y-32">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-sora text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
            notable <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 italic">Projects</span>
          </h2>
          <p className="mt-4 text-xl text-slate-400">
            Real data, real results.
          </p>
        </motion.div>

        {/* =========================================
            SECTION 1: SARTHAK (Dark / Hero / Overlapping)
            Reference: download (13).png
            ========================================= */}
        <div className="relative rounded-[2.5rem] bg-slate-900 border border-slate-800 p-8 sm:p-12 lg:p-16 overflow-hidden">
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[url('/anish-portfolio/grid.svg')] opacity-5" />

          <div className="relative grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left: Text & Metrics */}
            <div className="space-y-8 z-10">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl">🎬</span>
                  <h3 className="font-sora text-3xl font-bold text-white sm:text-4xl">
                    Sarthak Goswami
                  </h3>
                </div>
                <p className="text-xl text-blue-400 font-medium mb-4">Growth Associate & Social Media Strategist</p>
                <p className="text-slate-300 leading-relaxed max-w-lg">
                  Scaled Sarthak Goswami's creator brand across YouTube, Instagram, Facebook, and X. Built a content repurposing engine and developed standalone viral short-form content.
                </p>
              </motion.div>

              {/* Floating Metric Bento */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="bg-slate-950 rounded-3xl p-6 border border-slate-800 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="text-6xl font-bold text-blue-500">↗</span>
                  </div>
                  <p className="text-4xl font-black text-white mb-2 tracking-tight">15.5M<span className="text-green-500 text-3xl ml-1">↑</span></p>
                  <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">Views on Single Reel</p>
                </div>
                <div className="bg-slate-950 rounded-3xl p-6 border border-slate-800 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <span className="text-6xl font-bold text-emerald-500">↗</span>
                  </div>
                  <p className="text-4xl font-black text-white mb-2 tracking-tight">923K<span className="text-green-500 text-3xl ml-1">↑</span></p>
                  <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">Long-form Views</p>
                </div>
                <div className="bg-slate-950 rounded-3xl p-6 border border-slate-800 shadow-2xl col-span-2 relative overflow-hidden flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-black text-white mb-1 tracking-tight">34.3%<span className="text-green-500 text-2xl ml-1">↑</span></p>
                    <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">Audience Retention</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-white mb-1 tracking-tight">126K<span className="text-amber-500 text-2xl ml-1">↑</span></p>
                    <p className="text-sm text-slate-400 font-medium uppercase tracking-wider">X Impressions</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Overlapping Mockups */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[600px] lg:h-[700px] w-full"
            >
              <div className="absolute top-0 right-0 w-[90%] z-10 shadow-2xl hover:z-30 transition-all duration-300 hover:scale-105">
                <BrowserMockup 
                  src={`${basePath}/portfolio/sarthak/planning.png`} 
                  alt="Analytics Dashboard" 
                  aspectRatio="aspect-[16/10]"
                />
              </div>
              <div className="absolute bottom-10 left-0 z-20 shadow-2xl hover:z-30 transition-all duration-300 hover:scale-105 origin-bottom-left">
                <PhoneMockup 
                  src={`${basePath}/portfolio/sarthak/cjp-leverage.png`} 
                  alt="Viral Reels" 
                  className="w-[240px] sm:w-[260px]"
                />
              </div>
              <div className="absolute bottom-0 right-10 z-20 shadow-2xl hover:z-30 transition-all duration-300 hover:scale-105 origin-bottom-right">
                <PhoneMockup 
                  src={`${basePath}/portfolio/sarthak/x-post.png`} 
                  alt="X Viral Post" 
                  className="w-[220px] sm:w-[240px]"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* =========================================
            SECTION 2 & 3: BENTO BOX STYLE (Light/Grey layout)
            Reference: download (4).png & download (7).png
            ========================================= */}
        <div className="grid lg:grid-cols-2 gap-8">
          
          {/* MY INDIAN THINGS */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] bg-slate-100 p-8 sm:p-12 overflow-hidden relative"
          >
            {/* Soft glow behind phone */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
            
            <div className="relative z-10 space-y-8">
              <div>
                <h3 className="font-sora text-3xl font-bold text-slate-900 mb-2">My Indian Things</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full border border-slate-300 text-xs font-medium text-slate-600 bg-white/50 backdrop-blur-sm">Social Media Strategy</span>
                  <span className="px-3 py-1 rounded-full border border-slate-300 text-xs font-medium text-slate-600 bg-white/50 backdrop-blur-sm">Brand Management</span>
                </div>
              </div>

              {/* Bento Items */}
              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex gap-4 items-start">
                  <div className="bg-blue-100 p-3 rounded-xl text-blue-600">📱</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Grid Strategy</h4>
                    <p className="text-sm text-slate-600 mt-1">Designed consistent visual grid with branded mockups.</p>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex gap-4 items-start">
                  <div className="bg-amber-100 p-3 rounded-xl text-amber-600">🎉</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Festival Campaigns</h4>
                    <p className="text-sm text-slate-600 mt-1">Created themed posts to tap into seasonal engagement.</p>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 flex items-center justify-between">
                  <div>
                    <p className="text-3xl font-black text-slate-900">100+</p>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Posts Published</p>
                  </div>
                  <div className="h-12 w-px bg-slate-200"></div>
                  <div>
                    <p className="text-3xl font-black text-slate-900 flex items-center">Full <span className="text-green-500 ml-1 text-2xl">✓</span></p>
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wide">Grid Presence</p>
                  </div>
                </div>
              </div>

              {/* Mockup */}
              <div className="mt-8 flex justify-center pb-8">
                <div className="relative group perspective-1000">
                  <motion.div whileHover={{ rotateY: -5, rotateX: 5 }} className="transition-transform duration-500 ease-out">
                    <PhoneMockup src={`${basePath}/portfolio/my-indian-things/grid-1.png`} alt="Instagram Grid" className="shadow-2xl" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ASTROPORT */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-[2.5rem] bg-indigo-50 p-8 sm:p-12 overflow-hidden relative"
          >
            {/* Soft glow behind phone */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50" />
            
            <div className="relative z-10 space-y-8">
              <div>
                <h3 className="font-sora text-3xl font-bold text-slate-900 mb-2">Astroport India</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full border border-indigo-200 text-xs font-medium text-indigo-700 bg-white/50 backdrop-blur-sm">Creative Campaign</span>
                  <span className="px-3 py-1 rounded-full border border-indigo-200 text-xs font-medium text-indigo-700 bg-white/50 backdrop-blur-sm">Ad Strategy</span>
                </div>
              </div>

              {/* Bento Items */}
              <div className="space-y-4">
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-indigo-100 flex gap-4 items-start">
                  <div className="bg-indigo-100 p-3 rounded-xl text-indigo-600">✨</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Campaign Creatives</h4>
                    <p className="text-sm text-slate-600 mt-1">Designed ad creatives for stargazing resort awareness.</p>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-indigo-100 flex gap-4 items-start">
                  <div className="bg-emerald-100 p-3 rounded-xl text-emerald-600">🎯</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Event Marketing</h4>
                    <p className="text-sm text-slate-600 mt-1">Tourism Day & Women's Day engagement content.</p>
                  </div>
                </div>
                <div className="bg-indigo-600 rounded-2xl p-6 shadow-lg text-white flex items-center justify-between relative overflow-hidden">
                  <div className="absolute -right-4 -top-4 w-24 h-24 bg-white opacity-10 rounded-full blur-xl"></div>
                  <div>
                    <p className="text-3xl font-black">Multi</p>
                    <p className="text-xs font-bold text-indigo-200 uppercase tracking-wide">Location Brand</p>
                  </div>
                  <div className="h-12 w-px bg-indigo-500"></div>
                  <div>
                    <p className="text-3xl font-black flex items-center">Ads <span className="text-amber-400 ml-1 text-xl">★</span></p>
                    <p className="text-xs font-bold text-indigo-200 uppercase tracking-wide">Paid Campaigns</p>
                  </div>
                </div>
              </div>

              {/* Mockup */}
              <div className="mt-8 flex justify-center pb-8">
                 <div className="relative group perspective-1000">
                  <motion.div whileHover={{ rotateY: 5, rotateX: 5 }} className="transition-transform duration-500 ease-out">
                    <PhoneMockup src={`${basePath}/portfolio/astroport/ad-post.jpg`} alt="Astroport Ad" className="shadow-2xl" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* =========================================
            SECTION 4: UPTOWN MEDIA (Horizontal Browser Style)
            ========================================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700 p-8 sm:p-12 lg:p-16 relative overflow-hidden"
        >
           <div className="absolute inset-0 bg-[url('/anish-portfolio/grid.svg')] opacity-10" />
           
           <div className="relative z-10 grid lg:grid-cols-12 gap-12 items-center">
             
             {/* Left Text */}
             <div className="lg:col-span-5 space-y-8">
                <div>
                  <h3 className="font-sora text-3xl font-bold text-white mb-2">Uptown Media</h3>
                  <p className="text-emerald-400 font-medium">Founder & Creative Director</p>
                </div>
                
                <p className="text-slate-300 leading-relaxed">
                  Built and ran a creative services agency delivering end-to-end digital and print projects. Managed a network of freelancers and acquired clients through direct outreach.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-950/50 rounded-2xl p-5 border border-slate-700">
                     <p className="text-2xl font-black text-white">End-to-End</p>
                     <p className="text-xs text-slate-400 uppercase tracking-wide mt-1">Project Mgmt</p>
                  </div>
                  <div className="bg-slate-950/50 rounded-2xl p-5 border border-slate-700">
                     <p className="text-2xl font-black text-white">Print+Digi</p>
                     <p className="text-xs text-slate-400 uppercase tracking-wide mt-1">Assets Delivered</p>
                  </div>
                </div>
             </div>

             {/* Right Browser Mockup */}
             <div className="lg:col-span-7">
               <motion.div whileHover={{ scale: 1.02 }} className="transition-transform duration-500">
                 <BrowserMockup 
                    src={`${basePath}/portfolio/uptown-media/carousel-1.png`} 
                    alt="Uptown Media Carousel Design" 
                    aspectRatio="aspect-video"
                 />
               </motion.div>
             </div>

           </div>
        </motion.div>

      </div>
    </section>
  );
}
