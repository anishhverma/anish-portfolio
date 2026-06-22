import ScrollProgress from "@/components/ScrollProgress";
import CursorSpotlight from "@/components/CursorSpotlight";
import FloatingBackground from "@/components/FloatingBackground";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import CaseStudies from "@/components/CaseStudies";
import ProofOfWork from "@/components/ProofOfWork";
import Results from "@/components/Results";
import Tools from "@/components/Tools";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      {/* Ambient Effects */}
      <ScrollProgress />
      <CursorSpotlight />
      <FloatingBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <CaseStudies />
        <ProofOfWork />
        <Results />
        <Tools />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-700/50 py-8 text-center text-sm text-slate-400">
        <div className="mx-auto max-w-6xl px-6">
          <p>
            © {new Date().getFullYear()} Anish Verma. Built with passion and
            purpose.
          </p>
        </div>
      </footer>
    </>
  );
}
