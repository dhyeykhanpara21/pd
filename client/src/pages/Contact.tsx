import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Message transmitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen py-24 px-4 md:px-6 star-field" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Contact Station Info */}
          <div className="space-y-12">
            <div className="fade-in-item opacity-0 translate-y-8 transition-all duration-1000">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
                <span className="nebula-text">Contact</span>
                <br />
                <span className="text-gray-400">Station</span>
              </h1>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-green-400 uppercase tracking-wider text-sm">Communication Open</span>
              </div>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                Ready to bring your ideas to life? Let's collaborate to create extraordinary 
                web experiences that combine cutting-edge technology with beautiful design. 
                I'm available for freelance projects and full-time opportunities.
              </p>
            </div>

            {/* Communication Channels */}
            <div className="fade-in-item opacity-0 translate-y-8 transition-all duration-1000 space-y-8">
              <div className="bg-black/20 rounded-lg p-6 border border-gray-800/50 hover:border-purple-500/30 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-3 h-3 rounded-full bg-blue-400 animate-pulse"></div>
                  <h3 className="text-sm text-gray-400 uppercase tracking-wider">Primary Channel</h3>
                </div>
                <a 
                  href="mailto:alex.chen.dev@gmail.com"
                  className="text-lg sm:text-xl text-white hover:text-purple-300 transition-colors block"
                  data-cursor="pointer"
                >
                  dhyey2112004@gmail.com
                </a>
              </div>

              <div className="bg-black/20 rounded-lg p-6 border border-gray-800/50 hover:border-purple-500/30 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                  <h3 className="text-sm text-gray-400 uppercase tracking-wider">Emergency Frequency</h3>
                </div>
                <a 
                  href="tel:+15551234567"
                  className="text-xl text-white hover:text-purple-300 transition-colors block"
                  data-cursor="pointer"
                >
                  +91 97377 94277
                </a>
              </div>

              <div className="bg-black/20 rounded-lg p-6 border border-gray-800/50">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse"></div>
                  <h3 className="text-sm text-gray-400 uppercase tracking-wider">Current Location</h3>
                </div>
                <p className="text-xl text-white">Gandhinagar, GJ</p>
              </div>
            </div>

            {/* Social Networks */}
            <div className="fade-in-item opacity-0 translate-y-8 transition-all duration-1000">
              <h3 className="text-sm text-gray-400 uppercase tracking-wider mb-6 flex items-center">
                <div className="w-2 h-2 rounded-full bg-purple-400 mr-3"></div>
                Galactic Networks
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <a 
                  href="https://github.com/dhyeykhanpara21" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-black/20 rounded-lg p-4 border border-gray-800/50 hover:border-purple-500/30 transition-all duration-300 text-center group"
                  data-cursor="pointer"
                >
                  <div className="text-gray-400 group-hover:text-white transition-colors text-sm uppercase tracking-wider">
                    GitHub Galaxy
                  </div>
                </a>
                
                <a 
                  href="https://www.linkedin.com/in/dhyeykhanpara2112004/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-black/20 rounded-lg p-4 border border-gray-800/50 hover:border-purple-500/30 transition-all duration-300 text-center group"
                  data-cursor="pointer"
                >
                  <div className="text-gray-400 group-hover:text-white transition-colors text-sm uppercase tracking-wider">
                    LinkedIn Nebula
                  </div>
                </a>
              </div>
            </div>

            {/* Response Time */}
            <div className="fade-in-item opacity-0 translate-y-8 transition-all duration-1000 text-center bg-black/20 rounded-lg p-6 border border-gray-800/50">
              <div className="text-4xl font-bold text-white mb-2">24h</div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">Average Response Time</div>
              <div className="w-12 h-12 mx-auto mt-4 rounded-full bg-gradient-to-r from-green-500 to-blue-500 animate-pulse"></div>
            </div>
          </div>

          {/* Right Column - Message Transmission */}
          <div className="fade-in-item opacity-0 translate-y-8 transition-all duration-1000">
            <div className="bg-black/20 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-8 text-white flex items-center">
                <div className="w-3 h-3 rounded-full bg-purple-400 mr-3 animate-pulse"></div>
                Message Transmission
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-gray-400 uppercase tracking-wider mb-3">
                      Commander Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b-2 border-gray-700 focus:border-purple-400 py-3 text-white placeholder-gray-500 focus:outline-none transition-colors"
                      placeholder="Enter your call sign"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-400 uppercase tracking-wider mb-3">
                      Communication Frequency
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b-2 border-gray-700 focus:border-purple-400 py-3 text-white placeholder-gray-500 focus:outline-none transition-colors"
                      placeholder="your.signal@galaxy.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm text-gray-400 uppercase tracking-wider mb-3">
                      Mission Brief
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-transparent border-b-2 border-gray-700 focus:border-purple-400 py-3 text-white placeholder-gray-500 focus:outline-none resize-none transition-colors"
                      placeholder="Describe your mission objectives..."
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full cosmic-gradient text-white py-4 rounded-lg hover:scale-105 transition-all duration-300 font-medium tracking-wider uppercase text-sm"
                  data-cursor="pointer"
                >
                  Transmit Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="text-center mt-16 space-x-8">
          <Link 
            to="/github"
            className="text-gray-400 hover:text-white transition-colors text-lg border-b border-transparent hover:border-purple-400"
            data-cursor="pointer"
          >
            GitHub Galaxy →
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