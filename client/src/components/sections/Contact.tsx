import { useState, useEffect, useRef } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="min-h-screen py-20 px-6 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Column - Contact Info */}
        <div className="space-y-12">
          <div className="fade-in-item opacity-0 translate-y-8 transition-all duration-1000">
            <h2 className="text-6xl md:text-7xl font-bold mb-8">
              Let's
              <br />
              <span className="text-gray-500">Connect</span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Ready to bring your ideas to life? Let's discuss how we can work 
              together to create something amazing.
            </p>
          </div>

          {/* Contact Details */}
          <div className="fade-in-item opacity-0 translate-y-8 transition-all duration-1000 space-y-8">
            <div>
              <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-2">Email</h3>
              <a 
                href="mailto:contact@example.com"
                className="text-xl text-white hover:text-gray-300 transition-colors"
                data-cursor="pointer"
              >
                contact@example.com
              </a>
            </div>

            <div>
              <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-2">Phone</h3>
              <a 
                href="tel:+15551234567"
                className="text-xl text-white hover:text-gray-300 transition-colors"
                data-cursor="pointer"
              >
                +1 (555) 123-4567
              </a>
            </div>

            <div>
              <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-2">Location</h3>
              <p className="text-xl text-white">Gandhinagar, GJ</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="fade-in-item opacity-0 translate-y-8 transition-all duration-1000">
            <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-6">Follow</h3>
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
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-white transition-colors text-sm uppercase tracking-wider"
                data-cursor="pointer"
              >
                Twitter
              </a>
            </div>
          </div>

          {/* Response Time */}
          <div className="fade-in-item opacity-0 translate-y-8 transition-all duration-1000">
            <div className="text-4xl font-bold text-white mb-2">24h</div>
            <div className="text-gray-500 text-sm uppercase tracking-wider">Average Response Time</div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="fade-in-item opacity-0 translate-y-8 transition-all duration-1000">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-500 uppercase tracking-wider mb-3">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-gray-700 focus:border-white py-3 text-white placeholder-gray-500 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-500 uppercase tracking-wider mb-3">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-gray-700 focus:border-white py-3 text-white placeholder-gray-500 focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-gray-500 uppercase tracking-wider mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-transparent border-b border-gray-700 focus:border-white py-3 text-white placeholder-gray-500 focus:outline-none resize-none transition-colors"
                  placeholder="Tell me about your project..."
                />
              </div>
            </div>

            <button 
              type="submit"
              className="text-white hover:text-gray-300 transition-colors text-lg uppercase tracking-wider border-b border-white/20 hover:border-white/50 pb-1"
              data-cursor="pointer"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="fade-in-item opacity-0 translate-y-8 transition-all duration-1000 text-center mt-32 pt-16 border-t border-gray-800">
        <p className="text-gray-500 text-sm">
          © 2024 Creative Developer. Built with React, Three.js, and passion.
        </p>
      </div>
    </section>
  );
}
