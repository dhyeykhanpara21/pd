
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import Stats3D from "../components/3d/Stats3D";

const portfolioStats = [
  { label: "Projects Completed", value: "50+", type: "rocket" as const },
  { label: "Technologies Mastered", value: "15+", type: "lightning" as const },
  { label: "Years Experience", value: "3+", type: "star" as const },
  { label: "Happy Clients", value: "25+", type: "sparkle" as const }
];

const featuredTechnologies = [
  { name: "React & Next.js", category: "Frontend", color: "#61DAFB" },
  { name: "Three.js & WebGL", category: "3D Graphics", color: "#000000" },
  { name: "TypeScript", category: "Language", color: "#3178C6" },
  { name: "Node.js & Python", category: "Backend", color: "#339933" },
  { name: "MongoDB & PostgreSQL", category: "Database", color: "#47A248" },
  { name: "Docker & AWS", category: "DevOps", color: "#FF9900" }
];

const recentProjects = [
  {
    name: "Suchi Tracker",
    description: "Inventory management system for Anganwadi centers",
    tech: ["React", "Firebase", "Material-UI"],
    status: "Live"
  },
  {
    name: "NixKart",
    description: "Full-featured eCommerce platform",
    tech: ["Django", "PostgreSQL", "Bootstrap"],
    status: "Development"
  },
  {
    name: "3D Portfolio",
    description: "Interactive space-themed portfolio",
    tech: ["Three.js", "React", "WebGL"],
    status: "Live"
  }
];

export default function Home() {
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

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
        }, "-=1")
        .from(statsRef.current?.children, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out"
        }, "-=0.5")
        .from(techRef.current?.children, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: "power3.out"
        }, "-=0.3")
        .from(projectsRef.current?.children, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out"
        }, "-=0.2");
    }
  }, []);

  return (
    <div className="min-h-screen py-12 px-4 md:px-6 star-field">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="min-h-screen flex items-center justify-center relative pt-20 pb-24">
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
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                  Full-Stack Developer & 3D Graphics Specialist
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  I'm Dhyey Khanpara, a passionate Full-Stack Developer based in Gandhinagar, Gujarat. 
                  I create immersive digital experiences that blend cutting-edge web technologies with stunning visual design, 
                  specializing in React.js, Django, and 3D web graphics.
                </p>
                
                <p className="text-sm sm:text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                  With expertise in modern JavaScript frameworks, backend development, and creative coding, 
                  I transform complex ideas into scalable, interactive solutions that engage users and drive results.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8 text-sm">
                <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 border border-purple-500/20">
                  <div className="text-purple-400 font-semibold">Location</div>
                  <div className="text-gray-300">Gandhinagar, GJ</div>
                </div>
                <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 border border-blue-500/20">
                  <div className="text-blue-400 font-semibold">Experience</div>
                  <div className="text-gray-300">3+ Years</div>
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
          </div>
        </div>

        {/* Portfolio Stats Section */}
        <div ref={statsRef} className="py-20 border-t border-gray-800/50">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Mission Statistics</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Track record of successful missions across the digital universe
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolioStats.map((stat, index) => (
              <div key={index} className="text-center bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-gray-800/50 hover:border-purple-500/30 transition-all duration-300 relative">
                {/* 3D Icon Container */}
                <div className="h-20 mb-3 relative">
                  <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
                    <ambientLight intensity={0.4} />
                    <pointLight position={[2, 2, 2]} intensity={0.6} color="#8b5cf6" />
                    <pointLight position={[-2, -2, 2]} intensity={0.3} color="#06b6d4" />
                    
                    <Stats3D type={stat.type} position={[0, 0, 0]} scale={1.2} />
                  </Canvas>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack Section */}
        <div ref={techRef} className="py-20 border-t border-gray-800/50">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Technology Arsenal</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Cutting-edge tools and technologies I use to build innovative solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTechnologies.map((tech, index) => (
              <div 
                key={index} 
                className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-gray-800/50 hover:border-purple-500/30 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div 
                    className="w-4 h-4 rounded-full group-hover:animate-pulse" 
                    style={{ backgroundColor: tech.color }}
                  ></div>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">{tech.category}</span>
                </div>
                <h4 className="text-white font-medium text-lg group-hover:text-purple-300 transition-colors">
                  {tech.name}
                </h4>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Projects Preview */}
        <div ref={projectsRef} className="py-20 border-t border-gray-800/50">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Recent Missions</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Latest projects showcasing innovation and technical excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentProjects.map((project, index) => (
              <div key={index} className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-gray-800/50 hover:border-purple-500/30 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-white font-bold text-lg group-hover:text-purple-300 transition-colors">
                    {project.name}
                  </h4>
                  <span className={`text-xs px-2 py-1 rounded-full uppercase tracking-wider ${
                    project.status === 'Live' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="text-xs px-2 py-1 bg-purple-500/10 text-purple-300 rounded-full border border-purple-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/projects"
              className="text-purple-400 hover:text-white transition-colors text-lg border-b border-purple-400/50 hover:border-white/50 pb-1"
              data-cursor="pointer"
            >
              View All Projects →
            </Link>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="py-20 border-t border-gray-800/50 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Launch Your Next Project?</h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Let's collaborate to bring your ideas to life with cutting-edge technology and innovative design. 
              From concept to deployment, I'll help you create something extraordinary.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link 
                to="/contact"
                className="cosmic-gradient text-white px-8 py-4 rounded-full hover:scale-105 transition-all duration-300 font-medium tracking-wider uppercase text-sm"
                data-cursor="pointer"
              >
                Start Your Mission
              </Link>
              
              <Link 
                to="/about"
                className="text-gray-400 hover:text-white transition-colors text-sm uppercase tracking-wider border-b border-transparent hover:border-purple-400"
                data-cursor="pointer"
              >
                Learn More About Me
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-8 left-6 hidden xl:block z-20">
          <div className="text-xs text-gray-500 uppercase tracking-wider bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-gray-800/30">
            <div className="flex items-center space-x-2 mb-1">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
              <span>Current Location</span>
            </div>
            <div className="text-white text-sm">Gandhinagar, Gujarat</div>
          </div>
        </div>

        <div className="absolute bottom-8 right-6 hidden xl:block z-20">
          <div className="text-xs text-gray-500 uppercase tracking-wider text-right bg-black/40 backdrop-blur-sm rounded-lg p-3 border border-gray-800/30">
            <div className="flex items-center justify-end space-x-2 mb-1">
              <span>Mission Status</span>
              <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
            </div>
            <div className="text-white text-sm">Available for New Missions</div>
          </div>
        </div>

        {/* Orbital animation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
