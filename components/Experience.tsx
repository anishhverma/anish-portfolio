"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";

export default function Experience() {
  // Show experiences in reverse chronological order (most recent first)
  const sorted = [...experiences].sort((a, b) => b.id - a.id);

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-slate-50 sm:text-4xl lg:text-5xl">
            Professional Experience
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-blue-500" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            From hands-on internships to leading growth strategy for one of
            India&apos;s biggest creator brands.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line — left on mobile, center on desktop */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-700 md:left-1/2 md:-translate-x-px" />

          <div className="space-y-12 md:space-y-16">
            {sorted.map((exp, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.6,
                    delay: idx * 0.12,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="relative flex items-start md:justify-between"
                >
                  {/* ── Timeline Dot ── */}
                  <div
                    className={`absolute left-4 z-10 -translate-x-1/2 md:left-1/2 ${
                      exp.isCurrent ? "h-5 w-5" : "h-4 w-4"
                    }`}
                  >
                    <span
                      className={`block h-full w-full rounded-full border-2 ${
                        exp.isCurrent
                          ? "border-green-400 bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.5)]"
                          : "border-blue-400 bg-blue-500"
                      }`}
                    />
                  </div>

                  {/* ── Card ── */}
                  {/*
                    Mobile: always right of the line (pl-12)
                    Desktop: alternates left/right of center
                  */}
                  <div
                    className={`w-full pl-12 md:w-[calc(50%-2rem)] md:pl-0 ${
                      isEven
                        ? "md:mr-auto md:pr-8 md:text-right"
                        : "md:ml-auto md:pl-8 md:text-left"
                    }`}
                  >
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{
                        duration: 0.5,
                        delay: idx * 0.12 + 0.15,
                        ease: "easeOut" as const,
                      }}
                      className={`rounded-xl border bg-slate-800 p-6 ${
                        exp.isCurrent
                          ? "border-green-500/30 shadow-[0_0_20px_rgba(34,197,94,0.08)]"
                          : "border-slate-700"
                      }`}
                    >
                      {/* Header */}
                      <div
                        className={`mb-3 flex flex-wrap items-center gap-3 ${
                          isEven ? "md:justify-end" : "md:justify-start"
                        }`}
                      >
                        {/* Period Badge */}
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
                            exp.isCurrent
                              ? "bg-green-500/15 text-green-400"
                              : "bg-slate-700 text-slate-300"
                          }`}
                        >
                          {exp.isCurrent && (
                            <span className="relative flex h-2 w-2">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                            </span>
                          )}
                          {exp.period}
                        </span>
                      </div>

                      {/* Company */}
                      <h3 className="text-xl font-bold text-slate-50 sm:text-2xl">
                        {exp.company}
                      </h3>

                      {/* Role */}
                      <p className="mt-1 text-sm font-semibold text-blue-400">
                        {exp.role}
                      </p>

                      {/* Description */}
                      <p className="mt-3 text-sm leading-relaxed text-slate-300">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <ul
                        className={`mt-4 space-y-2 text-left ${
                          isEven ? "md:text-left" : ""
                        }`}
                      >
                        {exp.highlights.map((h, hIdx) => (
                          <motion.li
                            key={hIdx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.3,
                              delay: idx * 0.12 + 0.3 + hIdx * 0.06,
                            }}
                            className="flex items-start gap-2 text-sm text-slate-400"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                            <span>{h}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
