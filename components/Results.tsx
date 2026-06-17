"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { metrics } from "@/lib/data";
import ContentGrowthFlow from "./ContentGrowthFlow";

// ── Animated counter hook ────────────────────────────────────────────────────

function useCounter(target: number, duration: number, start: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    let rafId: number;

    const isDecimal = target % 1 !== 0;
    const decimalPlaces = isDecimal
      ? target.toString().split(".")[1]?.length ?? 1
      : 0;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;

      setCount(
        isDecimal
          ? parseFloat(current.toFixed(decimalPlaces))
          : Math.floor(current)
      );

      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [target, duration, start]);

  return count;
}

// ── Single metric card ───────────────────────────────────────────────────────

function MetricCard({
  value,
  suffix,
  label,
  index,
  inView,
}: {
  value: number;
  suffix: string;
  label: string;
  index: number;
  inView: boolean;
}) {
  const count = useCounter(value, 2000, inView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="flex flex-col items-center text-center p-6"
    >
      <span className="font-[family-name:var(--font-sora)] text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-50 tabular-nums">
        {count}
        <span className="text-blue-400">{suffix}</span>
      </span>
      <span className="mt-2 text-sm md:text-base text-slate-400 font-medium">
        {label}
      </span>
    </motion.div>
  );
}

// ── Results section ──────────────────────────────────────────────────────────

export default function Results() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="results" className="relative py-28 px-6 overflow-hidden">
      {/* Ambient glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-blue-500/8 blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-blue-600/5 blur-2xl" />
      </div>

      <div className="relative max-w-6xl mx-auto" ref={sectionRef}>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-widest rounded-full bg-blue-500/20 text-blue-400 mb-5"
          >
            Impact
          </motion.span>
          <h2 className="font-[family-name:var(--font-sora)] text-3xl md:text-5xl font-bold text-slate-50 mb-4">
            Results &amp; Achievements
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Numbers that reflect the impact of strategic thinking and relentless
            execution.
          </p>
        </motion.div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {metrics.map((m, i) => (
            <MetricCard
              key={m.label}
              value={m.value}
              suffix={m.suffix}
              label={m.label}
              index={i}
              inView={isInView}
            />
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-slate-700" />
          <span className="text-slate-500 text-xs font-semibold uppercase tracking-widest">
            Content Growth Pipeline
          </span>
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-slate-700" />
        </div>

        {/* Growth flow */}
        <ContentGrowthFlow />
      </div>
    </section>
  );
}
