"use client";

import { motion } from "framer-motion";
import { caseStudies } from "@/lib/data";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function CaseStudies() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-sora)] text-3xl md:text-4xl font-bold text-slate-50 mb-4">
            Featured Projects
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Real-world strategies that drove measurable growth and engagement.
          </p>
        </motion.div>

        {/* Card grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {caseStudies.map((study) => (
            <motion.div
              key={study.id}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="group relative bg-slate-800 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 overflow-hidden"
            >
              {/* Main card content */}
              <div className="p-7">
                {/* Category badge */}
                <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-500/20 text-blue-400 mb-4">
                  {study.category}
                </span>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-sora)] text-xl font-semibold text-slate-50 mb-3">
                  {study.title}
                </h3>

                {/* Objective */}
                <p className="text-slate-400 text-sm leading-relaxed mb-5">
                  {study.objective}
                </p>

                {/* Strategy & Result — revealed on hover */}
                <div className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-60 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  <div className="border-t border-slate-700 pt-4 mb-4 space-y-3">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                        Strategy
                      </span>
                      <p className="text-slate-300 text-sm mt-1 leading-relaxed">
                        {study.strategy}
                      </p>
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-green-400">
                        Result
                      </span>
                      <p className="text-slate-300 text-sm mt-1 leading-relaxed">
                        {study.result}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Metric */}
                <div className="border-t border-slate-700 pt-4 mt-2">
                  <p className="font-[family-name:var(--font-sora)] text-2xl font-bold text-blue-400">
                    {study.metric}
                  </p>
                </div>
              </div>

              {/* Hover hint */}
              <div className="absolute top-4 right-4 text-slate-600 group-hover:text-slate-400 transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
