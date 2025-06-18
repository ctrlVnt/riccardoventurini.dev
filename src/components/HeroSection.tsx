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
          <h1 className="font-bold font-inter mb-6">
            <span className="text-4xl md:text-5xl text-white">Hi, I'm</span>
            <br />
            <br />
            <span className="text-5xl md:text-7xl bg-primary bg-clip-text text-transparent">
              Riccardo Venturini
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Full Stack Developer
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => scrollToSection('#portfolio')}
              className="bg-gradient-to-r from-dev-primary to-dev-secondary text-dark-bg px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-dev-primary/25 transition-all duration-300 transform hover:scale-105"
            >
              View My Projects
            </button>
            <button
              onClick={() => scrollToSection('#contact')}
              className="border-2 border-dev-primary text-dev-primary px-8 py-4 rounded-full font-semibold hover:bg-dev-primary hover:text-dark-bg transition-all duration-300"
            >
              Contact Me
            </button>
          </div>

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
