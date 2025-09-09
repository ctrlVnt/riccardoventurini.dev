import React from 'react';
import { Code2, Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-surface text-white py-12 border-t border-dev-primary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-dev-primary" />
              <span className="font-bold text-xl font-inter">Riccardo Venturini</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer passionate about modern technologies and innovative solutions.
              I turn ideas into digital reality.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Portfolio', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-dev-primary transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-white">Connect with me</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/ctrlVnt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-dev-primary transition-colors duration-200 transform hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/riccardo-venturini-14b6b7261/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-dev-primary transition-colors duration-200 transform hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:riccardoventurini220@gmail.com"
                className="text-gray-400 hover:text-dev-primary transition-colors duration-200 transform hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
            <div className="pt-4">
              <p className="text-gray-400 text-sm">
                📧 riccardoventurini220@gmail.com
              </p>
              <p className="text-gray-400 text-sm">
                📍 Nantes, France
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-dev-primary/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm flex items-center">
              © {currentYear} Riccardo Venturini. Built with 
              <Heart className="h-4 w-4 text-red-500 mx-1" fill="currentColor" />
              and lots of coffee ☕
            </p>
            <p className="text-gray-500 text-sm mt-2 md:mt-0">
              All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
