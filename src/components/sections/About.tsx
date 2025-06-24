import { useEffect, useRef } from "react";

const skills = [
  "JavaScript & TypeScript",
  "React & Next.js",
  "Three.js & WebGL",
  "Node.js & Python",
  "UI/UX Design",
  "3D Graphics"
];

const experience = [
  {
    year: "2024",
    role: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    description: "Leading development of immersive web experiences"
  },
  {
    year: "2023",
    role: "Full Stack Developer",
    company: "Digital Creative Studio",
    description: "Building interactive applications and 3D visualizations"
  },
  {
    year: "2022",
    role: "Web Developer",
    company: "Startup Ventures",
    description: "Developing responsive web applications and APIs"
  }
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

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
    <section 
      id="about" 
      ref={sectionRef}
      className="min-h-screen py-20 px-6 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Column - About Text */}
        <div className="space-y-12">
          <div className="fade-in-item opacity-0 translate-y-8 transition-all duration-1000">
            <h2 className="text-6xl md:text-7xl font-bold mb-8">
              About
              <br />
              <span className="text-gray-500">Me</span>
            </h2>
          </div>

          <div className="fade-in-item opacity-0 translate-y-8 transition-all duration-1000 space-y-6">
            <p className="text-xl text-gray-400 leading-relaxed">
              I'm a passionate developer who specializes in creating immersive digital 
              experiences that bridge the gap between technology and human interaction.
            </p>
            
            <p className="text-lg text-gray-500 leading-relaxed">
              With over 3 years of experience in web development, I focus on building 
              applications that not only function flawlessly but also provide engaging 
              user experiences through innovative design and cutting-edge technology.
            </p>

            <p className="text-lg text-gray-500 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, 
              contributing to open-source projects, or experimenting with 3D art 
              and interactive installations.
            </p>
          </div>

          <div className="fade-in-item opacity-0 translate-y-8 transition-all duration-1000">
            <button 
              className="text-white hover:text-gray-300 transition-colors text-lg uppercase tracking-wider border-b border-white/20 hover:border-white/50 pb-1"
              data-cursor="pointer"
            >
              Download Resume
            </button>
          </div>
        </div>

        {/* Right Column - Skills & Experience */}
        <div className="space-y-16">
          {/* Skills */}
          <div className="fade-in-item opacity-0 translate-y-8 transition-all duration-1000">
            <h3 className="text-2xl font-bold mb-8 text-white">Core Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={skill}
                  className="text-gray-400 hover:text-white transition-colors cursor-default"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="fade-in-item opacity-0 translate-y-8 transition-all duration-1000">
            <h3 className="text-2xl font-bold mb-8 text-white">Experience</h3>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-white font-medium">{exp.role}</h4>
                      <p className="text-gray-400">{exp.company}</p>
                    </div>
                    <span className="text-gray-500 text-sm">{exp.year}</span>
                  </div>
                  <p className="text-gray-500 text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="fade-in-item opacity-0 translate-y-8 transition-all duration-1000 grid grid-cols-2 gap-8">
            <div>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-500 text-sm uppercase tracking-wider">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">3+</div>
              <div className="text-gray-500 text-sm uppercase tracking-wider">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
