import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-transparent pt-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <img
            src="images/profile.jpg"
            alt="RV"
            className="w-32 h-32 mx-auto mb-4 rounded-full flex items-center justify-center text-white text-4xl font-bold"
          />
          <h1 className="font-bold font-inter mb-6">
            <span className="text-5xl md:text-7xl bg-gray-100 bg-clip-text text-transparent">
              Riccardo Venturini
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Full Stack Developer
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/ctrlVnt" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-dev-primary transition-colors duration-200 transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/riccardo-venturini-14b6b7261/" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-dev-primary transition-colors duration-200 transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:riccardoventurini220@gmail.com"
               className="text-gray-400 hover:text-dev-primary transition-colors duration-200 transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>

          {/* Scroll indicator */}
          <button 
            onClick={() => scrollToSection('#about')}
            className="animate-bounce text-gray-500 hover:text-dev-primary transition-colors duration-200"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
