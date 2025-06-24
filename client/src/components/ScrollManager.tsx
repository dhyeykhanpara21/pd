import { useEffect } from "react";
import { usePortfolio } from "../lib/stores/usePortfolio";

export default function ScrollManager() {
  const { setScrollProgress, setCurrentSection } = usePortfolio();

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / scrollHeight, 1);
      
      setScrollProgress(progress);

      // Determine current section based on scroll position
      const sections = ['home', 'work', 'about', 'contact'];
      const sectionProgress = progress * (sections.length - 1);
      const currentSectionIndex = Math.floor(sectionProgress);
      const currentSection = sections[Math.min(currentSectionIndex, sections.length - 1)];
      
      setCurrentSection(currentSection);

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    };

    // Initial call
    updateScrollProgress();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setScrollProgress, setCurrentSection]);

  // Initialize GSAP if available
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).gsap && (window as any).ScrollTrigger) {
      const gsap = (window as any).gsap;
      gsap.registerPlugin((window as any).ScrollTrigger);

      gsap.config({
        nullTargetWarn: false,
        trialWarn: false
      });
    }
  }, []);

  return null;
}
