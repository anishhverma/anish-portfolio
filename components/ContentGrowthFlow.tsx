"use client";

import { motion } from "framer-motion";
import { growthFlowSteps } from "@/lib/data";

const stepVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.2, duration: 0.45, ease: "easeOut" as const },
  }),
};

const connectorVariants = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: (i: number) => ({
    opacity: 1,
    scaleX: 1,
    transition: { delay: i * 0.2 + 0.15, duration: 0.35, ease: "easeOut" as const },
  }),
};

const connectorVerticalVariants = {
  hidden: { opacity: 0, scaleY: 0 },
  visible: (i: number) => ({
    opacity: 1,
    scaleY: 1,
    transition: { delay: i * 0.2 + 0.15, duration: 0.35, ease: "easeOut" as const },
  }),
};

export default function ContentGrowthFlow() {
  const lastIdx = growthFlowSteps.length - 1;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="w-full"
    >
      {/* Desktop — horizontal flow */}
      <div className="hidden md:flex items-center justify-center gap-0">
        {growthFlowSteps.map((step, i) => {
          const isLast = i === lastIdx;
          return (
            <div key={step.label} className="flex items-center">
              {/* Step node */}
              <motion.div
                custom={i}
                variants={stepVariants}
                className={`flex flex-col items-center justify-center w-36 h-28 rounded-xl border ${
                  isLast
                    ? "bg-green-500/10 border-green-500/40 shadow-lg shadow-green-500/10"
                    : "bg-slate-800 border-slate-700"
                } transition-colors duration-300`}
              >
                <span className="text-3xl mb-2">{step.icon}</span>
                <span
                  className={`text-xs font-semibold text-center leading-tight px-2 ${
                    isLast ? "text-green-400" : "text-slate-300"
                  }`}
                >
                  {step.label}
                </span>
              </motion.div>

              {/* Connector arrow (not after last) */}
              {!isLast && (
                <motion.div
                  custom={i}
                  variants={connectorVariants}
                  className="flex items-center origin-left mx-1"
                >
                  <div className="w-10 h-[2px] bg-gradient-to-r from-blue-500 to-blue-400 relative">
                    {/* Animated dashes */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-300/60 to-transparent"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "linear" as const,
                        delay: i * 0.3,
                      }}
                      style={{ width: "60%" }}
                    />
                  </div>
                  <svg
                    className="w-3 h-3 text-blue-400 -ml-[2px]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" />
                  </svg>
                </motion.div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile — vertical flow */}
      <div className="flex md:hidden flex-col items-center gap-0">
        {growthFlowSteps.map((step, i) => {
          const isLast = i === lastIdx;
          return (
            <div key={step.label} className="flex flex-col items-center">
              {/* Step node */}
              <motion.div
                custom={i}
                variants={stepVariants}
                className={`flex flex-col items-center justify-center w-44 h-24 rounded-xl border ${
                  isLast
                    ? "bg-green-500/10 border-green-500/40 shadow-lg shadow-green-500/10"
                    : "bg-slate-800 border-slate-700"
                } transition-colors duration-300`}
              >
                <span className="text-3xl mb-1.5">{step.icon}</span>
                <span
                  className={`text-xs font-semibold text-center leading-tight px-2 ${
                    isLast ? "text-green-400" : "text-slate-300"
                  }`}
                >
                  {step.label}
                </span>
              </motion.div>

              {/* Connector arrow (not after last) */}
              {!isLast && (
                <motion.div
                  custom={i}
                  variants={connectorVerticalVariants}
                  className="flex flex-col items-center origin-top my-1"
                >
                  <div className="w-[2px] h-8 bg-gradient-to-b from-blue-500 to-blue-400 relative overflow-hidden">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-300/60 to-transparent"
                      animate={{ y: ["-100%", "100%"] }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "linear" as const,
                        delay: i * 0.3,
                      }}
                      style={{ height: "60%" }}
                    />
                  </div>
                  <svg
                    className="w-3 h-3 text-blue-400 -mt-[2px]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" />
                  </svg>
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
