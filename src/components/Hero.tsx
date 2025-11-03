import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const img1Ref = useRef<HTMLImageElement>(null);
  const img2Ref = useRef<HTMLImageElement>(null);
  const img3Ref = useRef<HTMLImageElement>(null);
  const img4Ref = useRef<HTMLImageElement>(null);
  const titleTextRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const subsubtitleRef = useRef<HTMLParagraphElement>(null);

  const TITLE_TEXT = "Riccardo Venturini";

  useEffect(() => {
    const ctx = gsap.context(() => {
      

     const titleElement = titleTextRef.current;

      gsap.to(titleElement, {
        
        scrambleText: {
          text: TITLE_TEXT,
          chars: "lowerCase", 
          revealDelay: 0.5,
          speed: 0.5,
        },
        
        duration: 2.5,
        opacity: 1,
        ease: "power2.out",
        delay: 0.2,
      });
     const titleDuration = 2.5;

      gsap.from(img1Ref.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: titleDuration + 0.5,
        ease: "power3.out",
      });

      gsap.from(img2Ref.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: titleDuration + 0.5,
        ease: "power3.out",
      });

      gsap.from(img3Ref.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: titleDuration + 0.5,
        ease: "power3.out",
      });

      gsap.from(img4Ref.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: titleDuration + 0.5,
        ease: "power3.out",
      });

      gsap.from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: titleDuration + 0.1,
        ease: "power3.out",
      });

      gsap.from(subsubtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: titleDuration + 0.3,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-background/90" />
      
      <img ref={img2Ref} className="absolute w-40 md:w-80 top-10 left-10" src="https://assets.codepen.io/16327/3D-tunnel.png"/>
      <img ref={img3Ref} className="absolute w-40 md:w-80 bottom-10 left-20 md:left-40" src="https://assets.codepen.io/16327/3D-semi.png"/>
      <img ref={img4Ref} className="invisible md:visible absolute w-40 md:w-80 top-0 right-90" src="https://assets.codepen.io/16327/3D-cone.png"/>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          <span ref={titleTextRef} className="opacity-0 whitespace-wrap"></span>
        </h1>
        
        <img ref={img1Ref} className="absolute w-40 md:w-80 top-0 right-0" src="https://assets.codepen.io/16327/3D-spiral.png"/>

        <h2
          ref={subtitleRef}
          className="font-heading text-2xl md:text-4xl text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          Full-stack developer
        </h2>
        <p
          ref={subsubtitleRef}
          className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
        >
         Scroll to know me better<br/><br/>👇
        </p>
      </div>
    </section>
  );
};
