import { useEffect, useRef } from "react";

export default function Hero() {
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !(window as any).gsap) return;

    const gsap = (window as any).gsap;
    const timeline = gsap.timeline({ delay: 1 });

    timeline
      .from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out"
      })
      .from(subtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      }, "-=1");
  }, []);

  const scrollToWork = () => {
    const workSection = document.getElementById('work');
    workSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div ref={titleRef} className="mb-8">
            <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-bold leading-none tracking-tight">
              Creative
              <br />
              <span className="text-gray-500">Developer</span>
            </h1>
          </div>
          
          <div ref={subtitleRef} className="space-y-8">
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Crafting immersive digital experiences through innovative web technologies, 
              3D graphics, and interactive design solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button 
                onClick={scrollToWork}
                className="text-white hover:text-gray-300 transition-colors text-lg uppercase tracking-wider border-b border-white/20 hover:border-white/50 pb-1"
                data-cursor="pointer"
              >
                View My Work
              </button>
              
              <div className="flex space-x-8">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition-colors text-sm uppercase tracking-wider"
                  data-cursor="pointer"
                >
                  GitHub
                </a>
                
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-white transition-colors text-sm uppercase tracking-wider"
                  data-cursor="pointer"
                >
                  LinkedIn
                </a>
                
                <a 
                  href="mailto:contact@example.com"
                  className="text-gray-500 hover:text-white transition-colors text-sm uppercase tracking-wider"
                  data-cursor="pointer"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Floating stats */}
        <div className="absolute bottom-20 left-0 hidden lg:block">
          <div className="text-sm text-gray-500 uppercase tracking-wider">
            <div>Based in</div>
            <div className="text-white">Gandhinagar, GJ</div>
          </div>
        </div>

        <div className="absolute bottom-20 right-0 hidden lg:block">
          <div className="text-sm text-gray-500 uppercase tracking-wider text-right">
            <div>Available for</div>
            <div className="text-white">Freelance Projects</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-white to-transparent animate-pulse"></div>
      </div>
    </section>
  );
}
