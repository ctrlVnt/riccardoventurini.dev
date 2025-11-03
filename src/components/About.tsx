import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".about-text", {
        y: 30,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 px-4 bg-background text-white"
    >
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="about-title text-4xl md:text-5xl font-bold mb-6">
          About Me
        </h2>
        <p className="about-text text-lg md:text-xl text-white/90 leading-relaxed">
          Ciao! Sono Riccardo Venturini, un Full-Stack Developer appassionato di
          tecnologia e design. Amo creare esperienze digitali eleganti e
          funzionali, combinando la mia conoscenza di front-end e back-end per
          costruire applicazioni complete. Sono sempre alla ricerca di nuove
          sfide e progetti interessanti da sviluppare.
        </p>
      </div>
    </section>
  );
};
