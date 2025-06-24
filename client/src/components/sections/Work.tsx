import { useEffect, useRef } from "react";

const projects = [
  {
    id: 1,
    title: "Interactive Data Visualization",
    subtitle: "WebGL Dashboard",
    description: "Real-time data visualization platform with custom WebGL rendering engine for financial markets.",
    year: "2024",
    tech: ["Three.js", "WebGL", "TypeScript", "Node.js"],
    image: "/api/placeholder/800/600"
  },
  {
    id: 2,
    title: "3D E-commerce Experience",
    subtitle: "Immersive Shopping",
    description: "Revolutionary e-commerce platform featuring 3D product visualization and AR try-on capabilities.",
    year: "2023",
    tech: ["React", "Three.js", "WebAR", "Stripe"],
    image: "/api/placeholder/800/600"
  },
  {
    id: 3,
    title: "AI-Powered Analytics",
    subtitle: "Machine Learning Platform",
    description: "Advanced analytics platform leveraging machine learning for predictive business insights.",
    year: "2023",
    tech: ["Python", "TensorFlow", "React", "PostgreSQL"],
    image: "/api/placeholder/800/600"
  },
  {
    id: 4,
    title: "Blockchain Marketplace",
    subtitle: "NFT Trading Platform",
    description: "Decentralized marketplace for digital assets with advanced trading and portfolio management.",
    year: "2022",
    tech: ["Solidity", "Web3.js", "Next.js", "IPFS"],
    image: "/api/placeholder/800/600"
  }
];

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.project-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate-in');
              }, index * 200);
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

  return (
    <section 
      id="work" 
      ref={sectionRef}
      className="min-h-screen py-20 px-6 max-w-7xl mx-auto"
    >
      <div className="mb-20">
        <h2 className="text-6xl md:text-8xl font-bold mb-6">
          Selected
          <br />
          <span className="text-gray-500">Works</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl">
          A collection of projects that showcase innovation in web technologies, 
          3D experiences, and user-centered design solutions.
        </p>
      </div>

      <div className="space-y-32">
        {projects.map((project, index) => (
          <div 
            key={project.id}
            className="project-item opacity-0 translate-y-20 transition-all duration-1000 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            style={{
              gridTemplateColumns: index % 2 === 1 ? '5fr 7fr' : '7fr 5fr'
            }}
          >
            {/* Project Image */}
            <div className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="aspect-[4/3] bg-gray-900 rounded-lg overflow-hidden group cursor-pointer">
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                  <div className="text-gray-600 text-6xl">
                    {String(project.id).padStart(2, '0')}
                  </div>
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className={`lg:col-span-5 space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div className="space-y-2">
                <div className="text-sm text-gray-500 uppercase tracking-wider">
                  {project.year} / {project.subtitle}
                </div>
                <h3 className="text-4xl md:text-5xl font-bold leading-tight">
                  {project.title}
                </h3>
              </div>

              <p className="text-gray-400 text-lg leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="px-3 py-1 text-sm border border-gray-700 rounded-full text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4 pt-4">
                <button 
                  className="text-white hover:text-gray-300 transition-colors text-sm uppercase tracking-wider"
                  data-cursor="pointer"
                >
                  View Project →
                </button>
                <button 
                  className="text-gray-500 hover:text-gray-300 transition-colors text-sm uppercase tracking-wider"
                  data-cursor="pointer"
                >
                  Live Demo →
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Projects */}
      <div className="text-center mt-32">
        <button 
          className="text-2xl text-white hover:text-gray-300 transition-colors border-b border-white/20 hover:border-white/50"
          data-cursor="pointer"
        >
          View All Projects
        </button>
      </div>


    </section>
  );
}