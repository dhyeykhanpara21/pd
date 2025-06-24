import { useEffect } from "react";

export function useGSAP(callback: () => void, deps: React.DependencyList = []) {
  useEffect(() => {
    // Wait for GSAP to be available
    const checkGSAP = () => {
      if (typeof window !== 'undefined' && window.gsap) {
        callback();
      } else {
        // Retry after a short delay
        setTimeout(checkGSAP, 100);
      }
    };

    checkGSAP();
  }, deps);
}
