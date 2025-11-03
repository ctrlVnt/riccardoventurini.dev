import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 80%",
          end: "bottom 20%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div ref={contentRef} className="text-center">
         
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Do you have a project in mind? Do you want to report any bugs in my apps? Write to me! I'll be happy to hear from you
          </p>
          
          <Button
            size="lg"
            className="bg-gradient-primary hover:glow-primary transition-all duration-300 mb-8"
            asChild
          >
            <a href="mailto:contact@example.com" className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Send mail
            </a>
          </Button>
          
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 text-muted-foreground hover:text-primary" />
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <footer className="mt-20 pt-8 border-t border-border text-center text-muted-foreground">
        <p>© 2025 Full-Stack Developer. All rights reserved.</p>
      </footer>
    </section>
  );
};
