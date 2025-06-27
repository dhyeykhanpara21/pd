import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { path: "/", label: "Home", planet: "Sun" },
    { path: "/projects", label: "Projects", planet: "Mars" },
    { path: "/about", label: "About", planet: "Earth" },
    { path: "/github", label: "GitHub", planet: "Jupiter" },
    { path: "/contact", label: "Contact", planet: "Saturn" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 50;
      setIsScrolled(scrolled);
    };

    // Close mobile menu when clicking outside
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Element;
      const mobileMenuButton = target.closest('button');
      const mobileMenu = target.closest('.mobile-menu');
      
      if (isMobileMenuOpen && !mobileMenu && !mobileMenuButton) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-black/80 backdrop-blur-sm border-b border-purple-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">  {/* Adjusted padding */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-lg sm:text-xl font-bold">  {/* Responsive text size */}
            <Link 
              to="/"
              className="nebula-text hover:opacity-80 transition-opacity"
              data-cursor="pointer"
            >
              Dhyey Khanpara
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navigationItems.slice(1).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm uppercase tracking-wider transition-colors duration-300 flex items-center space-x-2 ${
                  location.pathname === item.path 
                    ? 'text-white' 
                    : 'text-gray-500 hover:text-white'
                }`}
                data-cursor="pointer"
              >
                <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  location.pathname === item.path ? 'animate-pulse' : ''
                }`} style={{
                  backgroundColor: location.pathname === item.path ? 
                    item.planet === 'Mars' ? 'var(--mars-color)' :
                    item.planet === 'Earth' ? 'var(--earth-color)' :
                    item.planet === 'Jupiter' ? 'var(--jupiter-color)' :
                    item.planet === 'Saturn' ? 'var(--saturn-color)' :
                    '#666'
                    : '#666'
                }}></div>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="text-white z-50 relative"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-cursor="pointer"
            >
              <div className={`w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
              }`}></div>
              <div className={`w-6 h-0.5 bg-white mb-1 transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
              }`}></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`md:hidden fixed inset-0 z-40 transition-all duration-300 mobile-menu ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}>
          <div className="absolute inset-0 bg-black/95 backdrop-blur-md"></div>  {/* Enhanced blur */}
          <div className="relative z-50 h-full flex flex-col justify-center items-center space-y-6 sm:space-y-8 p-4">  {/* Adjusted spacing */}
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xl sm:text-2xl uppercase tracking-wider transition-colors duration-300 flex items-center space-x-3 ${  /* Responsive text */
                  location.pathname === item.path 
                    ? 'text-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
                data-cursor="pointer"
              >
                <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  location.pathname === item.path ? 'animate-pulse' : ''
                }`} style={{
                  backgroundColor: location.pathname === item.path ? 
                    item.planet === 'Sun' ? 'var(--sun-color)' :
                    item.planet === 'Mars' ? 'var(--mars-color)' :
                    item.planet === 'Earth' ? 'var(--earth-color)' :
                    item.planet === 'Jupiter' ? 'var(--jupiter-color)' :
                    item.planet === 'Saturn' ? 'var(--saturn-color)' :
                    '#666'
                    : '#666'
                }}></div>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Solar System Progress Indicator */}
      <div className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-purple-500 via-blue-500 to-purple-500 w-full opacity-30"></div>
    </nav>
  );
}