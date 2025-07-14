import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const repositories = [
  {
    id: 1,
    name: "Suchi Tracker",
    description: "Inventory and sales management system designed for Anganwadi centers with real-time tracking and user-specific dashboards.",
    language: "PHP / SQL / CSS",
    stars: 92,
    forks: 21,
    color: "var(--uranus-color)",
    status: "Live",
    link: "https://github.com/dhyeykhanpara21/Suchi_Tracker2"
  },
  // {
  //   id: 2,
  //   name: "Luphonix Prime",
  //   description: "Personal portfolio and project showcase website highlighting advanced web development work with clean UI and responsive design.",
  //   language: "HTML / CSS / JavaScript / Django",
  //   stars: 80,
  //   forks: 18,
  //   color: "var(--venus-color)",
  //   status: "Live",
  //   link: "https://github.com/Luphonix-Prime/Luphonix"
  // },
  {
    id: 3,
    name: "NixKart",
    description: "E-commerce platform with admin panel, inventory tracking, user authentication, cart system, and MongoDB integration.",
    language: "HTML / CSS / JavaScript / Django / MongoDB",
    stars: 104,
    forks: 26,
    color: "var(--mars-color)",
    status: "Live",
    link: "https://github.com/Luphonix-Prime/Luphonix-nixkart"
  },
  {
    id: 4,
    name: "Voting System",
    description: "Digital voting platform with secure user authentication and real-time vote count management for institutional use cases.",
    language: "HTML / CSS / JavaScript / PHP",
    stars: 58,
    forks: 12,
    color: "var(--earth-color)",
    status: "Beta",
    link: "https://github.com/dhyeykhanpara21/online-voting-system"
  },
  {
    id: 5,
    name: "Configurator",
    description: "Interactive file validator and dynamic configurator built using Next.js, designed for customizable product setups with validation logic.",
    language: "Next.js / JavaScript",
    stars: 73,
    forks: 15,
    color: "var(--jupiter-color)",
    status: "Active Development",
    link: "https://github.com/dhyeykhanpara21/configurator"
  },
  {
    id: 6,
    name: "Jarvis AI",
    description: "Voice-controlled desktop assistant using Python that integrates with OS features, automation tools, and AI APIs for productivity tasks.",
    language: "Python",
    stars: 88,
    forks: 19,
    color: "var(--saturn-color)",
    status: "Maintained",
    link: "https://github.com/dhyeykhanpara21/Jarvis-AI"
  }
  
];

const contributions = [
  { day: "Mon", commits: 3 },
  { day: "Tue", commits: 7 },
  { day: "Wed", commits: 2 },
  { day: "Thu", commits: 8 },
  { day: "Fri", commits: 5 },
  { day: "Sat", commits: 1 },
  { day: "Sun", commits: 4 }
];

export default function GitHub() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll('.fade-in-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('opacity-100', 'translate-y-0');
              }, index * 100);
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
    <div className="min-h-screen py-24 px-4 md:px-6 star-field" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="fade-in-item opacity-0 translate-y-8 transition-all duration-1000">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6">
              <span className="nebula-text">GitHub</span>
              <br />
              <span className="text-gray-400">Galaxy</span>
            </h1>
            <div className="flex justify-center items-center space-x-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-green-400 uppercase tracking-wider text-sm">Repository Active</span>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore the vast code universe, where each repository represents a star system 
              containing innovative solutions and cosmic development adventures.
            </p>
          </div>
        </div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="fade-in-item opacity-0 translate-y-8 transition-all duration-1000 bg-black/20 rounded-lg p-6 border border-gray-800/50 text-center">
            <div className="text-3xl font-bold text-white mb-2">25+</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">Repositories</div>
            <div className="w-8 h-1 bg-purple-500 mx-auto mt-3 rounded-full"></div>
          </div>
          
          <div className="fade-in-item opacity-0 translate-y-8 transition-all duration-1000 bg-black/20 rounded-lg p-6 border border-gray-800/50 text-center">
            <div className="text-3xl font-bold text-white mb-2">847</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">Total Stars</div>
            <div className="w-8 h-1 bg-yellow-500 mx-auto mt-3 rounded-full"></div>
          </div>
          
          <div className="fade-in-item opacity-0 translate-y-8 transition-all duration-1000 bg-black/20 rounded-lg p-6 border border-gray-800/50 text-center">
            <div className="text-3xl font-bold text-white mb-2">162</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">Forks</div>
            <div className="w-8 h-1 bg-blue-500 mx-auto mt-3 rounded-full"></div>
          </div>
          
          <div className="fade-in-item opacity-0 translate-y-8 transition-all duration-1000 bg-black/20 rounded-lg p-6 border border-gray-800/50 text-center">
            <div className="text-3xl font-bold text-white mb-2">5.6k</div>
            <div className="text-gray-400 text-sm uppercase tracking-wider">Commits</div>
            <div className="w-8 h-1 bg-green-500 mx-auto mt-3 rounded-full"></div>
          </div>
        </div>

        {/* Contribution Graph */}
        <div className="fade-in-item opacity-0 translate-y-8 transition-all duration-1000 mb-16">
          <h3 className="text-2xl font-bold mb-8 text-white flex items-center">
            <div className="w-3 h-3 rounded-full bg-green-400 mr-3 animate-pulse"></div>
            Weekly Activity
          </h3>
          <div className="bg-black/20 rounded-lg p-6 border border-gray-800/50">
            <div className="flex justify-between items-end h-32">
              {contributions.map((day, index) => (
                <div key={day.day} className="flex flex-col items-center space-y-2">
                  <div 
                    className="w-8 bg-purple-500 rounded-t transition-all duration-500 hover:bg-purple-400"
                    style={{ height: `${(day.commits / 8) * 100}%`, minHeight: '50px' }}
                  ></div>
                  <span className="text-xs text-gray-500">{day.day}</span>
                  <span className="text-xs text-gray-400">{day.commits}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Repository Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-white flex items-center">
            <div className="w-3 h-3 rounded-full bg-blue-400 mr-3 animate-pulse"></div>
            Featured Repositories
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repositories.map((repo, index) => (
              <div 
                key={repo.id}
                className="fade-in-item opacity-0 translate-y-8 transition-all duration-700"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="bg-black/20 backdrop-blur-sm border border-gray-800/50 rounded-lg p-6 hover:border-purple-500/30 transition-all duration-300 group h-full">
                  {/* Repository Header */}
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-white group-hover:text-purple-300 transition-colors">
                      {repo.name}
                    </h4>
                    <div 
                      className="w-3 h-3 rounded-full animate-pulse planet-glow"
                      style={{ backgroundColor: repo.color, color: repo.color }}
                    ></div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {repo.description}
                  </p>

                  {/* Language & Status */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-gray-400"></div>
                      <span className="text-xs text-gray-400">{repo.language}</span>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      repo.status === 'Production' || repo.status === 'Live' ? 'bg-green-500/20 text-green-400' :
                      repo.status === 'Active Development' ? 'bg-blue-500/20 text-blue-400' :
                      repo.status === 'Beta' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-gray-500/20 text-gray-400'
                    }`}>
                      {repo.status}
                    </span>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center space-x-1">
                        <span>⭐</span>
                        <span>{repo.stars}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <span>🔗</span>
                        <span>{repo.forks}</span>
                      </span>
                    </div>
                    <a 
                      href={repo.link}
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                      data-cursor="pointer"
                    >
                      View →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center fade-in-item opacity-0 translate-y-8 transition-all duration-1000">
          <div className="bg-black/20 rounded-lg p-8 border border-gray-800/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Join the Mission</h3>
            <p className="text-gray-300 mb-6">
              Explore the full GitHub galaxy and contribute to ongoing space missions. 
              Together, we can build the future of digital exploration.
            </p>
            <a 
              href="https://github.com/dhyeykhanpara21"
              target="_blank"
              rel="noopener noreferrer"
              className="cosmic-gradient text-white px-8 py-3 rounded-full hover:scale-105 transition-all duration-300 font-medium tracking-wider uppercase text-sm inline-block"
              data-cursor="pointer"
            >
              Visit GitHub Galaxy
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="text-center mt-16 space-x-8">
          <Link 
            to="/contact"
            className="text-gray-400 hover:text-white transition-colors text-lg border-b border-transparent hover:border-purple-400"
            data-cursor="pointer"
          >
            Contact Station →
          </Link>
          <Link 
            to="/"
            className="text-gray-400 hover:text-white transition-colors text-lg border-b border-transparent hover:border-purple-400"
            data-cursor="pointer"
          >
            ← Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}