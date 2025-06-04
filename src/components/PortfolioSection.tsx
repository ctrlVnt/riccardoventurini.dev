import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import alexis from '/images/alexis.png';
import chiarasava from '/images/chiarasava.png';
import cinemit from '/images/cinemit.png';
import emergemobile from '/images/emergemobile.png';
import flashapp from '/images/flashapp.png';
import godot from '/images/godot.jpg';
import michela from '/images/michela.png';
import rytm from '/images/rytm.png';

const PortfolioSection = () => {
  const projects = [
    {
      title: "CineMit",
      description: "Dedicated group movie meeting app for organizing and watching movies shown at theaters together",
      image: cinemit,
      tech: ["Android"],
      liveUrl: "https://www.cinemit.app/",
      githubUrl: "#"
    },
    {
      title: "Skeleton Race",
      description: "3D cross-platform survival game where you face relentless hordes of skeletons. As time progresses, the challenge escalates, demanding strategic decision-making to overcome increasingly formidable adversaries",
      image: godot,
      tech: ["Godot"],
      liveUrl: "#",
      githubUrl: "https://github.com/ctrlVnt/skeleton-race"
    },
    {
      title: "Real YT Music",
      description: "Youtube player without ads and with PIP mode to watch and listen your favourite videos",
      image: rytm,
      tech: ["Android", "Kotlin"],
      liveUrl: "https://play.google.com/store/apps/details?id=com.ctrlvnt.rytm",
      githubUrl: "https://github.com/ctrlVnt/Real-YT-Music"
    },
    {
      title: "FlashApp",
      description: "Learning aid application through the creation of various decks of flashcards",
      image: flashapp,
      tech: ["Android", "Kotlin"],
      liveUrl: "https://play.google.com/store/apps/details?id=com.ctrlvnt.flashapp",
      githubUrl: "https://github.com/ctrlVnt/FlashApp"
    },
    {
      title: "EmergeMobile",
      description: "A web application developed for French forestry services to streamline tree maintenance in forests. The platform collects on-site data, processes it, and presents actionable insights through an intuitive web interface",
      image: emergemobile,
      tech: ["WebApp", "React", "SpringBoot", "PostgreSQL","Docker"],
      liveUrl: "#",
      githubUrl: "https://github.com/ctrlVnt/Thesis-for-the-Bachelor-s-Degree"
    },
    {
      title: "michelaventurini.it",
      description: "A refined and visually captivating portfolio website designed for an aerial dance artist. The site highlights performances, background, and contact information with a focus on elegance, fluidity, and the artistry of movement",
      image: michela,
      tech: ["Website", "React"],
      liveUrl: "https://michelaventurini.netlify.app/",
      githubUrl: "https://github.com/ctrlVnt/michelaventurini.it"
    },
    {
      title: "chiarasava.com",
      description: "A minimalist and elegant website developed in Angular to present a PhD student’s work, showcasing completed research as well as upcoming and past events. Designed with a harmonious pastel color palette and an intuitive navigation system, the site offers a clean and straightforward user experience",
      image: chiarasava,
      tech: ["Website", "Angular"],
      liveUrl: "https://chiarasava.netlify.app/",
      githubUrl: "#"
    },
    {
      title: "alexismalagnino.fr",
      description: "A personalized website built with Jekyll for a PhD student in biology, designed to showcase the discoveries made through their research and thesis work. The site has been customized to enhance its visual appeal and provide a more engaging and seamless navigation experience",
      image: alexis,
      tech: ["Website","Jekyll"],
      liveUrl: "https://alexismalagnino.netlify.app/",
      githubUrl: "#"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-dark-surface relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-inter mb-6 text-white">
            My Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A selection of the most meaningful projects I've built over the last few years.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-dark-accent rounded-lg shadow-lg overflow-hidden border border-dev-primary/10 hover:shadow-xl hover:shadow-dev-primary/10 transition-all duration-300 transform hover:-translate-y-2 group">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex space-x-3">
                    <a 
                      href={project.liveUrl}
                      className="bg-dev-primary text-dark-bg p-2 rounded-full hover:bg-dev-secondary transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="bg-dev-primary text-dark-bg p-2 rounded-full hover:bg-dev-secondary transition-colors duration-200"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold font-inter mb-3 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-dark-bg text-dev-primary px-3 py-1 rounded-full text-xs font-medium border border-dev-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
