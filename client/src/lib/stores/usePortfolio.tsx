import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

interface PortfolioState {
  scrollProgress: number;
  cameraTarget: { x: number; y: number; z: number };
  currentSection: string;
  selectedPlanet: string | null;
  isLoading: boolean;
  
  // Actions
  setScrollProgress: (progress: number) => void;
  setCameraTarget: (target: { x: number; y: number; z: number }) => void;
  setCurrentSection: (section: string) => void;
  setSelectedPlanet: (planet: string | null) => void;
  setLoading: (loading: boolean) => void;
}

export const usePortfolio = create<PortfolioState>()(
  subscribeWithSelector((set) => ({
    scrollProgress: 0,
    cameraTarget: { x: 0, y: 0, z: 0 },
    currentSection: 'home',
    selectedPlanet: null,
    isLoading: true,
    
    setScrollProgress: (progress) => set({ scrollProgress: progress }),
    setCameraTarget: (target) => set({ cameraTarget: target }),
    setCurrentSection: (section) => set({ currentSection: section }),
    setSelectedPlanet: (planet) => set({ selectedPlanet: planet }),
    setLoading: (loading) => set({ isLoading: loading }),
  }))
);

// Subscribe to scroll progress changes
usePortfolio.subscribe(
  (state) => state.scrollProgress,
  (progress) => {
    // Determine current section based on scroll progress
    const sections = ['home', 'projects', 'about', 'contact'];
    const sectionIndex = Math.floor(progress * (sections.length - 1));
    const currentSection = sections[Math.min(sectionIndex, sections.length - 1)];
    
    usePortfolio.getState().setCurrentSection(currentSection);
  }
);
