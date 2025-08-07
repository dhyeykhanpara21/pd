import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const skills = [
  { name: "JavaScript & TypeScript", planet: "Mercury", color: "var(--mercury-color)" },
  { name: "React & Next.js", planet: "Venus", color: "var(--venus-color)" },
  { name: "Three.js & WebGL", planet: "Earth", color: "var(--earth-color)" },
  { name: "Node.js & Python", planet: "Mars", color: "var(--mars-color)" },
  { name: "Django & Flask", planet: "Jupiter", color: "var(--jupiter-color)" },
  { name: "3D Graphics", planet: "Saturn", color: "var(--saturn-color)" }
];

const missions = [
  {
    year: "2025",
    role: "Full Stack Developer & Cybersecurity Analyst",
    station: "AphelionCyber",
    description: "Worked on secure web application development and cybersecurity implementations. Developed full-stack solutions using React, Node.js, and MongoDB while integrating security best practices such as JWT authentication, encrypted data flows, and vulnerability testing.",
    achievement: "Enhanced system security and performance across 3+ client systems while contributing to secure coding practices and vulnerability assessments."
  },
  {
    year: "2024",
    role: "Full Stack Developer Intern",
    station: "WebCodeGenie",
    description: "Collaborated with agile teams to design and deploy scalable web applications. Developed interactive React.js frontends and integrated RESTful APIs using Django and Flask. Deployed solutions using platforms like Google Cloud, Render, and Vercel.",
    achievement: "Successfully contributed to 5+ full-stack projects with seamless frontend-backend integration and cloud deployment."
  },
  {
    year: "2023",
    role: "Data Science & Cloud Intern",
    station: "Google Cloud Virtual Internship",
    description: "Completed hands-on training and projects in data science, machine learning, and cloud application development using Google Cloud services. Built end-to-end data pipelines and visualized results using Google Looker",
    achievement: "Earned multiple Google Cloud skill badges and successfully deployed a data analytics solution on GCP."
  }
];

export default function About() {
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
    <div className="min-h-screen py-24 px-4 md:px-6 star-field" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Mission Brief */}
          <div className="space-y-12">
            <div className="fade-in-item opacity-0 translate-y-8 transition-all duration-1000">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
                <span className="nebula-text">Mission</span>
                <br />
                <span className="text-gray-400">Control</span>
              </h1>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-green-400 uppercase tracking-wider text-sm">Active Mission</span>
              </div>
            </div>

            <div className="fade-in-item opacity-0 translate-y-8 transition-all duration-1000 space-y-6">
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              I'm Dhyey Khanpara, a full-stack developer with hands-on experience in crafting dynamic and scalable web applications. With a strong foundation in React.js, Django, and modern JavaScript technologies, I transform ideas into interactive digital solutions that are both performant and visually engaging.
              </p>
              
              <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
              Over the past 1+ years, I’ve worked on a variety of impactful projects—from building an inventory management system for Anganwadi centers (Suchi Tracker), to developing eCommerce platforms (NixKart). I enjoy integrating technologies like MongoDB, WebGL, and Firebase to create responsive UIs and seamless backend systems
              </p>

              <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed">
              When I’m not coding, I’m actively contributing to open-source, exploring new frontiers in 3D web, and pushing boundaries in creative coding.
              </p>
            </div>

            <div className="fade-in-item opacity-0 translate-y-8 transition-all duration-1000">
              <button 
                className="cosmic-gradient text-white px-8 py-3 rounded-full hover:scale-105 transition-all duration-300 font-medium tracking-wider uppercase text-sm"
                data-cursor="pointer"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/resume.pdf';
                  link.download = 'Dhyey_Khanpara_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                Download Mission Log
              </button>
            </div>
          </div>

          {/* Right Column - Skills & Experience */}
          <div className="space-y-16">
            {/* Skills Constellation */}
            <div className="fade-in-item opacity-0 translate-y-8 transition-all duration-1000">
              <h3 className="text-2xl font-bold mb-8 text-white flex items-center">
                <span className="w-2 h-2 rounded-full bg-purple-400 mr-3"></span>
                Core Technologies
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={skill.name}
                    className="flex items-center justify-between p-4 bg-black/20 rounded-lg border border-gray-800/50 hover:border-purple-500/30 transition-all duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <span className="text-gray-300">{skill.name}</span>
                    <div className="flex items-center space-x-3">
                      <span className="text-xs text-gray-500 uppercase tracking-wider">{skill.planet}</span>
                      <div 
                        className="w-3 h-3 rounded-full animate-pulse planet-glow"
                        style={{ backgroundColor: skill.color, color: skill.color }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission History */}
            <div className="fade-in-item opacity-0 translate-y-8 transition-all duration-1000">
              <h3 className="text-2xl font-bold mb-8 text-white flex items-center">
                <span className="w-2 h-2 rounded-full bg-blue-400 mr-3"></span>
                Mission History
              </h3>
              <div className="space-y-6">
                {missions.map((mission, index) => (
                  <div key={index} className="bg-black/20 rounded-lg p-6 border border-gray-800/50">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h4 className="text-white font-medium text-lg">{mission.role}</h4>
                        <p className="text-purple-400">{mission.station}</p>
                      </div>
                      <span className="text-gray-500 text-sm bg-gray-800/50 px-3 py-1 rounded-full">{mission.year}</span>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">{mission.description}</p>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                      <span className="text-green-400 text-xs">{mission.achievement}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mission Stats */}
            <div className="fade-in-item opacity-0 translate-y-8 transition-all duration-1000 grid grid-cols-2 gap-6">
              <div className="text-center bg-black/20 rounded-lg p-6 border border-gray-800/50">
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">Missions Completed</div>
                <div className="w-8 h-8 mx-auto mt-3 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 animate-pulse"></div>
              </div>
              <div className="text-center bg-black/20 rounded-lg p-6 border border-gray-800/50">
                <div className="text-4xl font-bold text-white mb-2">3+</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">Years in Space</div>
                <div className="w-8 h-8 mx-auto mt-3 rounded-full bg-gradient-to-r from-green-500 to-teal-500 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="text-center mt-16 space-x-8">
          <Link 
            to="/projects"
            className="text-gray-400 hover:text-white transition-colors text-lg border-b border-transparent hover:border-purple-400"
            data-cursor="pointer"
          >
            View Projects →
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