import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    year: 2023,
    title: "Address Keeper",
    description: "Mobile app built with Flutter to manage personal info sharing.",
    githubUrl: "https://github.com/ctrlVnt/addresskeeper",
    liveUrl: "",
  },
  {
    year: 2023,
    title: "CineMit",
    description: "Group movie meeting app with full stack development.",
    githubUrl: "",
    liveUrl: "https://www.cinemit.app/",
  },
  {
    year: 2024,
    title: "Real YT Music",
    description: "Youtube player without ads with PIP mode.",
    githubUrl: "https://github.com/ctrlVnt/Real-YT-Music",
    liveUrl: "",
  },
  {
    year: 2024,
    title: "Skeleton Race",
    description: "3D cross-platform survival game with skeletons.",
    githubUrl: "https://github.com/ctrlVnt/skeleton-race",
    liveUrl: "https://skeleton-race.netlify.app/",
  },
];

export const ProjectsTimeline = () => {
  const timelineRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const projectsEls = gsap.utils.toArray<HTMLElement>(".timeline-project");

    // Animazione dei progetti che appaiono
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

    // Animazione linea verticale
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
      className="relative bg-background text-white min-h-screen py-20 px-4"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        My projects
      </h2>

      <div className="relative max-w-4xl mx-auto flex flex-col md:flex-row">
        {/* Linea verticale */}
        <div className="hidden md:block w-1 bg-white/20 absolute left-1/2 top-0 bottom-0 -translate-x-1/2">
          <div
            ref={lineRef}
            className="w-full bg-primary origin-top transform scale-y-0"
          />
        </div>

        {/* Progetti */}
        <div className="flex-1 flex flex-col space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <div
              key={index}
              className="timeline-project relative flex flex-col md:flex-row items-start md:items-center md:space-x-12"
            >
              {/* Punto sulla timeline */}
              <div className="hidden md:flex w-6 h-6 rounded-full bg-primary absolute left-1/2 -translate-x-1/2" />

              <div className="md:pl-16">
                <span className="text-primary font-bold text-xl">
                  {project.year}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mt-2">
                  {project.title}
                </h3>
                <p className="mt-2 mb-4 text-white/80">{project.description}</p>

                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                      Codice
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-primary hover:bg-primary/80 px-4 py-2 rounded-lg transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
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
