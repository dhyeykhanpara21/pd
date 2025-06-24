import { ReactNode, useRef, useEffect } from "react";
import { cn } from "../lib/utils";

interface FloatingCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "left" | "right" | "up" | "down";
}

export default function FloatingCard({ 
  children, 
  className, 
  delay = 0,
  direction = "up"
}: FloatingCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card || typeof window === 'undefined' || !window.gsap) return;

    // Initial state based on direction
    const initialTransform = {
      left: { x: -100, y: 0 },
      right: { x: 100, y: 0 },
      up: { x: 0, y: 100 },
      down: { x: 0, y: -100 }
    }[direction];

    // Set initial state
    window.gsap.set(card, {
      x: initialTransform.x,
      y: initialTransform.y,
      opacity: 0,
      scale: 0.8
    });

    // Create ScrollTrigger animation
    window.gsap.to(card, {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 1.2,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Hover animation
    const handleMouseEnter = () => {
      window.gsap.to(card, {
        scale: 1.05,
        y: -10,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      window.gsap.to(card, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [delay, direction]);

  return (
    <div
      ref={cardRef}
      className={cn(
        "glass-card p-6 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-xl",
        "hover:bg-white/15 transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}
