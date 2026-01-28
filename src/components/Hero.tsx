import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { Mouse } from "lucide-react";

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
  const mouse = useRef<SVGSVGElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

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

      [img1Ref, img2Ref, img3Ref, img4Ref].forEach((ref) => {
        gsap.from(ref.current, {
          y: 30,
          opacity: 0,
          duration: 1,
          delay: titleDuration + 0.6,
          ease: "power3.out",
        });
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

      gsap.from(backgroundRef.current, {
        opacity: 0,
        duration: 1,
        delay: titleDuration + 0.5,
        ease: "power3.out",
      });

      const tl = gsap.timeline();

      tl.from(mouse.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: titleDuration + 0.5,
        ease: "power3.out",
      });

      tl.to(mouse.current, {
        opacity: 0.2,
        duration: 0.6,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
      }, ">");

      

      const images = [img1Ref.current, img2Ref.current, img3Ref.current, img4Ref.current];

      const quickX = images.map((img) => gsap.quickTo(img, "x", { duration: 0.6, ease: "power3.out" }));
      const quickY = images.map((img) => gsap.quickTo(img, "y", { duration: 0.6, ease: "power3.out" }));

      const handleMouseMove = (e: MouseEvent) => {
        const { innerWidth, innerHeight } = window;
        const x = e.clientX - innerWidth / 2;
        const y = e.clientY - innerHeight / 2;

        images.forEach((img, i) => {
          if (!img) return;
          const strength = i * 0.01 + 0.01;
          quickX[i](x * strength);
          quickY[i](y * strength);
        });
      };

      window.addEventListener("mousemove", handleMouseMove);

      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
<div className="absolute inset-0" ref={backgroundRef}>
  <div 
    className="absolute inset-0 bg-background/90"
    style={{
      backgroundImage: `
        linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
      `,
      backgroundSize: '50px 50px'
    }}
  />
  
  <div 
    className="absolute inset-0"
    style={{
      background: 'linear-gradient(to bottom, transparent 0%, transparent 50%, rgba(9, 11, 13, 1) 100%)'
    }}
  />
</div>
      
      <img ref={img2Ref} className="absolute w-40 md:w-80 top-10 left-10" src="https://assets.codepen.io/16327/3D-tunnel.png"/>
      <img ref={img3Ref} className="absolute w-40 md:w-80 bottom-10 left-20 md:left-40" src="https://assets.codepen.io/16327/3D-semi.png"/>
      <img ref={img4Ref} className="invisible md:visible absolute w-40 md:w-80 top-0 right-90" src="https://assets.codepen.io/16327/3D-cone.png"/>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
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
          Scroll to know me better
        </p>

        <Mouse ref={mouse} className="text-xl text-muted-foreground mx-auto"></Mouse>
      </div>
    </section>
  );
};