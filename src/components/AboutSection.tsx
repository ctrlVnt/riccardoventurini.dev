import React from 'react';
import { Code, Coffee, Lightbulb, Users } from 'lucide-react';

const AboutSection = () => {
  const links = [
    {
      name: "GitHub",
      url: "https://github.com/ctrlvnt",
      image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      description: "Explore my open-source projects and contributions"
    },
    {
      name: "Buy Me a Coffee",
      url: "https://buymeacoffee.com/v3ntuz",
      image: "https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png",
      description: "Support my work with a small donation"
    },
    {
      name: "Product Hunt",
      url: "https://www.producthunt.com/@v3ntuz1",
      image: "images/product-hunt.jpg",
      description: "Check out my launched products and upvote"
    }
  ];

  /*,
    {
      name: "F-Droid",
      url: "https://f-droid.org/packages/yourpackage",
      image: "https://fdroid.gitlab.io/artwork/badge/get-it-on.png",
      description: "Get my apps from this open-source app store"
    }
      */

  return (
    <section id="about" className="py-32 bg-dark-surface/80 backdrop-blur-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-inter mb-6 text-white">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Full stack developer building modern web and mobile applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
             I am a Full Stack Developer with a degree from the University of Turin, 
             currently residing in France. As a passionate advocate for the open-source 
             community, I dedicate myself to developing projects that are freely accessible 
             to everyone. My expertise spans across various domains, but I have a particular 
             passion for mobile development.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              My passion for clean code and software architecture has led me to specialize 
              in Flutter, SpringBoot, and modern cloud technologies. I strongly believe that 
              the best technology is the one that simplifies people’s lives.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {['React', 'Kotlin', 'SpringBoot', 'Flutter', 'Java', 'Docker'].map((tech) => (
                <span key={tech} className="bg-dark-accent text-dev-primary px-4 py-2 rounded-full text-sm font-medium border border-dev-primary/20">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {links.map((item, index) => (
              <a 
                key={index} 
                href={item.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-6 rounded-lg bg-dark-accent/50 border border-dev-primary/10 hover:shadow-lg hover:shadow-dev-primary/10 transition-all duration-300 hover:scale-105"
              >
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="h-12 rounded-lg object-contain mb-4"
                />
                <h3 className="font-semibold text-lg mb-2 text-white">{item.name}</h3>
                <p className="text-gray-400 text-sm text-center px-2">{item.description}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
