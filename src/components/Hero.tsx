import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const subsubtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });

      gsap.from(subsubtitleRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.6,
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
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1
          ref={titleRef}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
        >
          Riccardo Venturini
        </h1>
        
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          Full-stack developer
        </p>
        <p
          ref={subsubtitleRef}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-8"
        >
         Scroll to know me better👇
        </p>
      </div>
    </section>
  );
};
