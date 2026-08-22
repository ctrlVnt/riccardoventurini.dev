import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github, Play } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    year: 2018,
    title: "Bachelor",
    description: "Bachelor in Plastics Technology",
    githubUrl: "",
    liveUrl: "",
    playstore:""
  },
  {
    year: "2018 - 2021",
    title: "Studio MegeM",
    description: "I worked for 3 years in mechanical design field for a little studio",
    githubUrl: "",
    liveUrl: "",
    playstore:""
  },
  {
    year: "2020-2023",
    title: "Bachelor degree",
    description: "Bachelor degree in computer science at University of Turin",
    githubUrl: "https://github.com/ctrlVnt/Thesis-for-the-Bachelor-s-Degree",
    liveUrl: "",
    playstore:""
  },
  {
    year: 2023,
    title: "Emerge Mobile",
    description: "Internship at the National Forest Office (ONF) focused on restoring the front-end and back-end of their tree data collection system",
    githubUrl: "",
    liveUrl: "",
    playstore:""
  },
  {
    year: 2023,
    title: "FlashApp",
    description: "My inaugural Android application, which started as a university assignment. I chose to push its development further, eager to fully discover the mobile development landscape",
    githubUrl: "https://github.com/ctrlVnt/FlashApp",
    liveUrl: "",
    playstore:"https://play.google.com/store/apps/details?id=com.ctrlvnt.flashapp"
  },
  {
    year: "2023 - Ongoing",
    title: "Real YT Music",
    description: "My flatmate used YouTube to listen music in background from pc and I ask my self: why he can't do that with the mobile?",
    githubUrl: "https://github.com/ctrlVnt/Real-YT-Music",
    liveUrl: "",
    playstore:"https://play.google.com/store/apps/details?id=com.ctrlvnt.rytm"
  },
  {
    year: "2023 - 2026",
    title: "CineMit",
    description: "I wanted to learn something in a creative way. My friend had this idea, and I used my knowledge to bring it to life",
    githubUrl: "https://github.com/ctrlVnt/cinemit_showtimes-app",
    liveUrl: "https://www.cinemit.app/",
    platstoreUrl:"https://play.google.com/store/apps/details?id=com.ctrlvnt.cinemit"
  },
  {
    year: 2024,
    title: "Skeleton Race",
    description: "The world of video games has always intrigued me, so I started studying Godot and brought a small game to life",
    githubUrl: "https://github.com/ctrlVnt/skeleton-race",
    liveUrl: "https://skeleton-race.netlify.app/",
    playstore:""
  },
  {
    year: "2024 - 2025",
    title: "HelpDesk",
    description: "You know, in life you also have to live, so I discovered this world. I worked for Hermes",
    githubUrl: "",
    liveUrl: "",
    playstore:""
  },
  {
    year: "2025 - Ongoing",
    title: "Address Keeper",
    description: "One day, my Snapchat account, which was linked to an inherited phone number, was stolen. On another occasion, I didn't receive my voting card because I had forgotten to change my address. These incidents made me wonder: what if I had a single place to note down all the services where I needed to update my information whenever something changed?",
    githubUrl: "https://github.com/ctrlVnt/addresskeeper",
    liveUrl: "",
    playstore:"https://play.google.com/store/apps/details?id=com.ctrlvnt.addresskeeper"
  },
  {
    year: "2025 - Ongoing",
    title: "Master Degree",
    description: "I'm doing a master degree in visual computing at University of Nantes, let's hope",
    githubUrl: "",
    liveUrl: "",
    playstore:""
  },
  {
    year: "2026 - Ongoing",
    title: "Google Summer of Code 2026",
    description: "I'll work on a project for the GSoC 2026 to FOSSASIA project, focused on improving 3 flutter apps",
    githubUrl: "",
    liveUrl: "https://summerofcode.withgoogle.com/programs/2026/projects/4mtLHcWw",
    playstore:""
  },
];

export const ProjectsTimeline = () => {
  const timelineRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const projectsEls = gsap.utils.toArray<HTMLElement>(".timeline-project");

    
    projectsEls.forEach((el) => {
      gsap.from(el, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
      });
    });

    
    if (lineRef.current) {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top",
          ease: "none",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <section
      ref={timelineRef}
      className="relative bg-background min-h-screen py-20 px-4"
    >
      <h2 className="font-heading text-4xl md:text-5xl font-bold text-center mb-16">
        My timeline
      </h2>

      <div className="relative max-w-4xl mx-auto flex flex-col md:flex-row">
        {/* vertical line */}
        <div className="hidden md:block w-1 bg-white/20 absolute left-1/2 top-0 bottom-0 -translate-x-1/2">
          <div
            ref={lineRef}
            className="w-full bg-primary origin-top transform scale-y-0"
          />
        </div>

        {/* Projects */}
        <div className="flex-1 flex flex-col space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <div
              key={index}
              className="timeline-project relative flex flex-col md:flex-row items-start md:items-center md:space-x-12"
            >
              {/* Point on the timeline */}
              <div className="hidden md:flex w-6 h-6 rounded-full bg-primary absolute left-1/2 -translate-x-1/2" />

              <div className="md:pl-16">
                <span className="text-primary font-bold text-xl">
                  {project.year}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mt-2 w-60">
                  {project.title}
                </h3>
                <p className="mt-2 mb-4 w-60 text-white/80">{project.description}</p>

                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-primary hover:bg-primary/80 px-4 py-2 rounded-lg transition-all duration-300 text-black"
                    >
                      <ExternalLink className="w-4 h-4 text-black" />
                      Live
                    </a>
                  )}
                  {project.playstore && (
                    <a
                      href={project.playstore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-accent hover:bg-accent/80 px-4 py-2 rounded-lg transition-all duration-300 text-black"
                    >
                      <Play className="w-4 h-4" />
                      PlayStore
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
