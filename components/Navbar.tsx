"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useMotionValueEvent, useScroll } from "framer-motion";
import { navLinks } from "@/lib/data";

// ─── Navbar Component ───────────────────────────────────────────────────────

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(false);

  const { scrollY } = useScroll();
  const lastScrollY = useRef<number>(0);
  const ticking = useRef<boolean>(false);

  // ── Hide/show navbar based on scroll direction ──────────────────────────

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    if (ticking.current) return;
    ticking.current = true;

    requestAnimationFrame(() => {
      const previous = lastScrollY.current;
      // Only hide when scrolled past a threshold and scrolling down
      if (latest > previous && latest > 80) {
        setHidden(true);
        setMobileMenuOpen(false); // Close mobile menu on scroll down
      } else if (latest < previous) {
        setHidden(false);
      }
      lastScrollY.current = latest;
      ticking.current = false;
    });
  });

  // ── IntersectionObserver for active section tracking ────────────────────

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    const handleIntersection = (id: string) => (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${id}`);
        }
      });
    };

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(handleIntersection(id), {
          rootMargin: "-20% 0px -70% 0px", // Trigger when section is near the top of viewport
          threshold: 0,
        });
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  // ── Smooth scroll handler ──────────────────────────────────────────────

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setMobileMenuOpen(false);

      const targetId = href.replace("#", "");
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const navbarHeight = 64; // approximate navbar height
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarHeight - 12;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    },
    []
  );

  // ── Lock body scroll when mobile menu is open ──────────────────────────

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // ── Render ─────────────────────────────────────────────────────────────

  return (
    <>
      {/* ── Desktop + Mobile Navbar ─────────────────────────────────────── */}
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: hidden ? "-100%" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" as const }}
        className="fixed top-[3px] left-0 right-0 z-40 bg-slate-900/80 backdrop-blur-xl border-b border-slate-700/50"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* ── Logo ──────────────────────────────────────────────────── */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="font-['Sora'] text-xl font-bold text-slate-50 tracking-tight transition-colors hover:text-blue-500"
            >
              Anish
              <span className="text-blue-500">.</span>
            </a>

            {/* ── Desktop Links ─────────────────────────────────────────── */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="relative px-3 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    <span
                      className={
                        isActive
                          ? "text-blue-400"
                          : "text-slate-300 hover:text-slate-50"
                      }
                    >
                      {link.label}
                    </span>

                    {/* Active indicator dot */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.span
                          layoutId="nav-active-dot"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0 }}
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-5 rounded-full bg-blue-500"
                        />
                      )}
                    </AnimatePresence>
                  </a>
                );
              })}
            </div>

            {/* ── Mobile Hamburger Button ───────────────────────────────── */}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="relative md:hidden flex flex-col items-center justify-center w-10 h-10 rounded-lg transition-colors hover:bg-slate-800"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" as const }}
                className="block w-5 h-[2px] bg-slate-50 rounded-full"
              />
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="block w-5 h-[2px] bg-slate-50 rounded-full mt-1.5"
              />
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" as const }}
                className="block w-5 h-[2px] bg-slate-50 rounded-full mt-1.5"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── Mobile Slide-in Panel ──────────────────────────────────────── */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 z-35 h-full w-72 bg-slate-900/95 backdrop-blur-xl border-l border-slate-700/50 md:hidden"
            >
              <div className="flex flex-col pt-24 px-6">
                {/* Section label */}
                <span className="text-xs font-medium uppercase tracking-widest text-slate-500 mb-4 pl-3">
                  Navigation
                </span>

                {navLinks.map((link, index) => {
                  const isActive = activeSection === link.href;
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      className={`relative flex items-center gap-3 px-3 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                        isActive
                          ? "bg-blue-500/10 text-blue-400"
                          : "text-slate-300 hover:bg-slate-800 hover:text-slate-50"
                      }`}
                    >
                      {/* Active indicator bar */}
                      {isActive && (
                        <motion.span
                          layoutId="mobile-active-bar"
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 rounded-full bg-blue-500"
                        />
                      )}
                      {link.label}
                    </motion.a>
                  );
                })}

                {/* Decorative separator */}
                <div className="mt-8 pt-6 border-t border-slate-700/50">
                  <p className="text-xs text-slate-500 pl-3">
                    © {new Date().getFullYear()} Anish Verma
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
