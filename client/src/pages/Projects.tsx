import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { usePortfolio } from "../lib/stores/usePortfolio";

const projects = [
  {
    id: 1,
    title: "Suchi Tracker",
    planet: "Mercury",
    description: "Real-time inventory and sales tracking dashboard designed for Anganwadi centers, built with user-specific roles and streamlined record management.",
    year: "2024",
    tech: ["PHP", "SQL", "CSS", "JavaScript"],
    status: "Live",
    color: "var(--mercury-color)",
    link: "https://github.com/dhyeykhanpara21/Suchi_Tracker2"
  },
  // {
  //   id: 2,
  //   title: "Luphonix Prime",
  //   planet: "Venus",
  //   description: "Personal portfolio website highlighting full-stack projects, tech stack, GitHub integration, and smooth user interface using Django.",
  //   year: "2024",
  //   tech: ["HTML", "CSS", "JavaScript", "Django"],
  //   status: "Live",
  //   color: "var(--venus-color)",
  //   link: "https://github.com/Luphonix-Prime/Luphonix"
  // },
  {
    id: 3,
    title: "NixKart",
    planet: "Earth",
    description: "Full-fledged eCommerce platform with cart, authentication, inventory, admin dashboard, and MongoDB integration.",
    year: "2025",
    tech: ["HTML", "CSS", "JavaScript", "Django", "MongoDB"],
    status: "Production",
    color: "var(--earth-color)",
    link: "https://github.com/Luphonix-Prime/Luphonix-nixkart"
  },
  {
    id: 4,
    title: "Online Voting System",
    planet: "Mars",
    description: "A secure online voting platform with candidate panel, real-time results, and voter validation system built with PHP.",
    year: "2023",
    tech: ["HTML", "CSS", "PHP", "JavaScript"],
    status: "Beta",
    color: "var(--mars-color)",
    link: "https://github.com/dhyeykhanpara21/online-voting-system"
  },
  {
    id: 5,
    title: "Configurator",
    planet: "Jupiter",
    description: "Interactive file configurator for validating dynamic setups with front-end validation logic and backend readiness using Next.js.",
    year: "2024",
    tech: ["Next.js", "JavaScript", "HTML", "CSS"],
    status: "Active",
    color: "var(--jupiter-color)",
    link: "https://github.com/dhyeykhanpara21/configurator"
  },
  {
    id: 6,
    title: "Jarvis AI",
    planet: "Saturn",
    description: "A voice-controlled AI assistant built with Python to automate desktop tasks and provide intelligent interactions using NLP.",
    year: "2022",
    tech: ["Python", "SpeechRecognition", "pyttsx3", "OS Automation"],
    status: "Maintained",
    color: "var(--saturn-color)",
    link: "https://github.com/dhyeykhanpara21/Jarvis-AI"
  }
  
];

export default function Projects() {
  const [selectedPlanet, setSelectedPlanet] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { setSelectedPlanet: setGlobalSelectedPlanet } = usePortfolio();

  // Add this new effect to handle planet filtering animations
  useEffect(() => {
    const items = document.querySelectorAll('.project-item');
    items.forEach((item) => {
      // Reset the animation classes
      item.classList.remove('opacity-100', 'translate-y-0');
      item.classList.add('opacity-0', 'translate-y-8');
      
      // Re-trigger the animation after a short delay
      setTimeout(() => {
        item.classList.add('opacity-100', 'translate-y-0');
      }, 100);
    });
  }, [selectedPlanet]); // This effect runs when selectedPlanet changes

  // Keep the existing intersection observer effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.project-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('opacity-100', 'translate-y-0');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredProjects = selectedPlanet 
    ? projects.filter(p => p.planet === selectedPlanet)
    : projects;

  return (
    <div className="min-h-screen py-24 px-4 md:px-6 star-field" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6">
            <span className="nebula-text">Solar</span>
            <br />
            <span className="text-gray-400">Projects</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore digital creations across the cosmic expanse, each project representing 
            a unique celestial body in our development solar system.
          </p>
        </div>

        {/* Planet Filter */}
        <div className="flex justify-center mb-16">
          <div className="bg-black/30 backdrop-blur-sm rounded-full p-2 border border-purple-500/30">
            <button
              onClick={() => {
                setSelectedPlanet(null);
                setGlobalSelectedPlanet(null);
              }}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                !selectedPlanet 
                  ? 'cosmic-gradient text-white' 
                  : 'text-gray-400 hover:text-white'
              }`}
              data-cursor="pointer"
            >
              All Planets
            </button>
            {Array.from(new Set(projects.map(p => p.planet))).map(planet => (
              <button
                key={planet}
                onClick={() => {
                  setSelectedPlanet(planet);
                  setGlobalSelectedPlanet(planet);
                }}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  selectedPlanet === planet 
                    ? 'cosmic-gradient text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
                data-cursor="pointer"
              >
                {planet}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className="project-item opacity-0 translate-y-8 transition-all duration-700"
            >
              <div className="bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300 group">
                {/* Planet Indicator */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-4 h-4 rounded-full animate-pulse planet-glow"
                      style={{ backgroundColor: project.color, color: project.color }}
                    ></div>
                    <span className="text-sm text-gray-400 uppercase tracking-wider">
                      {project.planet}
                    </span>
                  </div>
                  <span className={`text-xs px-3 py-1 rounded-full ${
                    project.status === 'Launched' ? 'bg-green-500/20 text-green-400' :
                    project.status === 'Active' ? 'bg-blue-500/20 text-blue-400' :
                    project.status === 'Orbiting' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Project Content */}
                <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="text-xs px-3 py-1 bg-gray-800/50 text-gray-300 rounded-full border border-gray-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{project.year}</span>
                  <div className="flex space-x-4">
                    <a 
                      href={project.link}
                      className="text-purple-400 hover:text-purple-300 transition-colors text-sm uppercase tracking-wider"
                      data-cursor="pointer"
                    >
                      Explore →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back to Home */}
        <div className="text-center mt-16">
          <Link 
            to="/"
            className="text-gray-400 hover:text-white transition-colors text-lg border-b border-transparent hover:border-purple-400"
            data-cursor="pointer"
          >
            ← Return to Home Base
          </Link>
        </div>
      </div>
    </div>
  );
}