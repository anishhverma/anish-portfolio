"use client";

import { motion } from "framer-motion";
import { skills, type Skill } from "@/lib/data";

const categoryConfig: Record<
  Skill["category"],
  { label: string; color: string; bg: string; text: string }
> = {
  strategy: {
    label: "Strategy",
    color: "bg-blue-500",
    bg: "bg-blue-500/10",
    text: "text-blue-400",
  },
  growth: {
    label: "Growth",
    color: "bg-green-500",
    bg: "bg-green-500/10",
    text: "text-green-400",
  },
  analytics: {
    label: "Analytics",
    color: "bg-purple-500",
    bg: "bg-purple-500/10",
    text: "text-purple-400",
  },
  creative: {
    label: "Creative",
    color: "bg-amber-500",
    bg: "bg-amber-500/10",
    text: "text-amber-400",
  },
};

const categories = ["strategy", "growth", "analytics", "creative"] as const;

function groupByCategory(items: Skill[]) {
  const grouped: Record<string, Skill[]> = {};
  for (const skill of items) {
    if (!grouped[skill.category]) grouped[skill.category] = [];
    grouped[skill.category].push(skill);
  }
  return grouped;
}

export default function Skills() {
  const grouped = groupByCategory(skills);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-heading text-3xl font-bold text-slate-50 sm:text-4xl lg:text-5xl">
            Skills &amp; Expertise
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-blue-500" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            A deep toolkit spanning strategy, growth, analytics, and creative —
            honed through hands-on experience across brands and platforms.
          </p>
        </motion.div>

        {/* Skills Grid — 2 columns on desktop */}
        <div className="grid gap-12 md:grid-cols-2">
          {categories.map((cat, catIdx) => {
            const config = categoryConfig[cat];
            const catSkills = grouped[cat];
            if (!catSkills || catSkills.length === 0) return null;

            return (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.1 }}
                className="rounded-xl border border-slate-700 bg-slate-800 p-6"
              >
                {/* Category Label */}
                <div className="mb-6 flex items-center gap-3">
                  <span
                    className={`inline-block rounded-lg px-3 py-1 text-sm font-semibold ${config.bg} ${config.text}`}
                  >
                    {config.label}
                  </span>
                  <div className="h-px flex-1 bg-slate-700" />
                </div>

                {/* Skill Bars */}
                <div className="space-y-5">
                  {catSkills.map((skill, skillIdx) => (
                    <div key={skill.name}>
                      {/* Name + Percentage */}
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm font-medium text-slate-50">
                          {skill.name}
                        </span>
                        <motion.span
                          className="text-sm font-semibold text-slate-300"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: catIdx * 0.1 + skillIdx * 0.08 + 0.3,
                          }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>

                      {/* Progress Bar */}
                      <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-700/60">
                        <motion.div
                          className={`h-full rounded-full ${config.color}`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1,
                            delay: catIdx * 0.1 + skillIdx * 0.08,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
