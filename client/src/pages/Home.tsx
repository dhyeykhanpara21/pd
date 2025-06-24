import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).gsap) {
      const gsap = (window as any).gsap;
      const timeline = gsap.timeline({ delay: 0.5 });

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
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative px-4 md:px-6 star-field pt-20 pb-24">
      <div className="max-w-6xl mx-auto text-center z-10">
        <div ref={titleRef} className="mb-8">
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10rem] font-bold leading-none tracking-tight mb-4">
            <span className="nebula-text">Dhyey</span>
            <br />
            <span className="text-gray-400">Khanpara</span>
          </h1>
          <div className="flex justify-center items-center space-x-4 mb-6">
            <div className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse planet-glow" style={{color: 'var(--sun-color)'}}></div>
            <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse planet-glow" style={{color: 'var(--mercury-color)'}}></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-300 animate-pulse planet-glow" style={{color: 'var(--venus-color)'}}></div>
            <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse planet-glow" style={{color: 'var(--earth-color)'}}></div>
            <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse planet-glow" style={{color: 'var(--mars-color)'}}></div>
          </div>
        </div>
        
        <div ref={subtitleRef} className="space-y-8">
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6">
            I'm Dhyey Khanpara, a passionate Full-Stack Developer and 3D Graphics Specialist based in Gandhinagar. 
            I create immersive digital experiences that blend cutting-edge web technologies with stunning visual design.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8 text-sm">
            <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20">
              <div className="text-purple-400 font-semibold">Location</div>
              <div className="text-gray-300">Gandhinagar, GJ</div>
            </div>
            <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 border border-blue-500/20">
              <div className="text-blue-400 font-semibold">Experience</div>
              <div className="text-gray-300">1+ Years</div>
            </div>
            <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 border border-green-500/20">
              <div className="text-green-400 font-semibold">Status</div>
              <div className="text-gray-300">Available for Launch</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/projects"
              className="cosmic-gradient text-white px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 font-medium tracking-wider uppercase text-sm"
              data-cursor="pointer"
            >
              Explore Projects
            </Link>
            
            <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
              <Link 
                to="/about"
                className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider border-b border-transparent hover:border-purple-400"
                data-cursor="pointer"
              >
                About Mission
              </Link>
              
              <Link 
                to="/github"
                className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider border-b border-transparent hover:border-purple-400"
                data-cursor="pointer"
              >
                GitHub Galaxy
              </Link>
              
              <Link 
                to="/contact"
                className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider border-b border-transparent hover:border-purple-400"
                data-cursor="pointer"
              >
                Contact Station
              </Link>
            </div>
          </div>
        </div>

        {/* Solar System Stats */}
        <div className="absolute bottom-8 left-6 hidden xl:block z-20">
          <div className="text-xs text-gray-500 uppercase tracking-wider bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-gray-800/30">
            <div className="flex items-center space-x-2 mb-1">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
              <span>Location</span>
            </div>
            <div className="text-white text-sm">Gandhinagar, GJ</div>
          </div>
        </div>

        <div className="absolute bottom-8 right-6 hidden xl:block z-20">
          <div className="text-xs text-gray-500 uppercase tracking-wider text-right bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-gray-800/30">
            <div className="flex items-center justify-end space-x-2 mb-1">
              <span>Status</span>
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
            </div>
            <div className="text-white text-sm">Available for Launch</div>
          </div>
        </div>
      </div>

      {/* Orbital animation */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-20 bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-pulse"></div>
      </div>
    </div>
  );
}