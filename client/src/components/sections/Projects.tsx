import { useState } from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";
import FloatingCard from "../FloatingCard";

const projects = [
  {
    id: 1,
    title: "3D Portfolio Experience",
    description: "An immersive portfolio website built with Three.js and React, featuring scroll-based camera movement and interactive 3D elements.",
    image: "/api/placeholder/600/400",
    tags: ["Three.js", "React", "GSAP", "WebGL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true
  },
  {
    id: 2,
    title: "Interactive Data Visualization",
    description: "Real-time data visualization dashboard with WebGL-accelerated charts and smooth animations.",
    image: "/api/placeholder/600/400",
    tags: ["D3.js", "WebGL", "TypeScript", "Node.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true
  },
  {
    id: 3,
    title: "Mobile-First E-commerce",
    description: "Modern e-commerce platform with PWA capabilities, optimized for mobile-first user experience.",
    image: "/api/placeholder/600/400",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "PWA"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false
  },
  {
    id: 4,
    title: "AI-Powered Chat Interface",
    description: "Intelligent chat interface with natural language processing and real-time conversation analytics.",
    image: "/api/placeholder/600/400",
    tags: ["React", "OpenAI", "Socket.io", "Python"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false
  }
];

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.featured);

  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <FloatingCard className="text-center mb-16" delay={0.2}>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Featured Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A collection of projects that showcase my passion for creating 
            innovative digital experiences and solving complex problems.
          </p>
        </FloatingCard>

        {/* Filter buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/20 backdrop-blur-md rounded-full p-1 border border-white/30">
            <Button
              variant={filter === 'all' ? 'default' : 'ghost'}
              onClick={() => setFilter('all')}
              className={`rounded-full px-6 ${
                filter === 'all' 
                  ? 'bg-white/30 text-gray-800' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              All Projects
            </Button>
            <Button
              variant={filter === 'featured' ? 'default' : 'ghost'}
              onClick={() => setFilter('featured')}
              className={`rounded-full px-6 ${
                filter === 'featured' 
                  ? 'bg-white/30 text-gray-800' 
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Featured
            </Button>
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <FloatingCard 
              key={project.id} 
              className="group cursor-pointer overflow-hidden"
              delay={index * 0.2}
              direction={index % 2 === 0 ? 'left' : 'right'}
            >
              {/* Project image placeholder */}
              <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-purple-200 to-blue-200 flex items-center justify-center">
                  <Eye className="w-12 h-12 text-purple-600 opacity-50" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                      Featured
                    </Badge>
                  )}
                </div>

                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary"
                      className="bg-white/50 text-gray-700 hover:bg-white/70 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex space-x-3 pt-4">
                  <Button 
                    asChild
                    size="sm"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  
                  <Button 
                    asChild
                    variant="outline" 
                    size="sm"
                    className="bg-white/20 border-white/30 hover:bg-white/30"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </FloatingCard>
          ))}
        </div>
      </div>
    </section>
  );
}
