"use client";

import { motion } from "framer-motion";
import { tools } from "@/lib/data";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export default function Tools() {
  return (
    <section id="tools" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-sora)] text-3xl md:text-4xl font-bold text-slate-50 mb-4">
            Tools &amp; Platforms
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            The platforms and tools I use daily to drive growth and create
            impact.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-3 md:grid-cols-5 gap-4 md:gap-5"
        >
          {tools.map((tool) => (
            <motion.div
              key={tool.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-center gap-3 p-5 md:p-6 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500 transition-colors duration-300 cursor-default"
            >
              <span className="text-3xl md:text-4xl">{tool.icon}</span>
              <span className="text-xs md:text-sm font-medium text-slate-300 text-center leading-tight">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
