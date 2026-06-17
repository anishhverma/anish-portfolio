"use client";

import { motion } from "framer-motion";
import { aboutText } from "@/lib/data";

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
      delay: i * 0.15,
    },
  }),
};

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-slate-900 px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-3xl">
        {/* Section Heading */}
        <motion.h2
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="font-sora mb-12 text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl"
        >
          About Me
        </motion.h2>

        {/* Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="rounded-2xl border border-slate-700 border-l-4 border-l-blue-500 bg-slate-800/50 p-6 sm:p-8 lg:p-10"
        >
          <div className="space-y-5">
            {aboutText.map((paragraph, index) => (
              <motion.p
                key={index}
                custom={index}
                variants={paragraphVariants}
                className="text-base leading-relaxed text-slate-300 sm:text-lg"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
