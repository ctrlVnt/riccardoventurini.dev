import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import { Mail} from "lucide-react";
import { SocialIcon } from 'react-social-icons'

gsap.registerPlugin(ScrollTrigger);

const socialLinks = [
  { href: "https://www.linkedin.com/in/riccardo-venturini-14b6b7261/", network: "LinkedIn" },
  { href: "https://mastodon.social/@ctrlVnt", network: "Mastodon" },
  { href: "https://github.com/ctrlVnt", network: "GitHub" },
  { href: "https://medium.com/@riccardoventurini.dev", network: "Medium" },
  { href: "https://x.com/CtrlVnt", network: "Twitter" }
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
            <a href="mailto:riccardoventurini220@gmail.com" className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              riccardoventurini220@gmail.com
            </a>
          </Button>
          
         <div className="flex justify-center gap-6">
            {socialLinks.map((social) => (
              <SocialIcon 
                key={social.network}
                url={social.href} 
                target="_blank"
                rel="noopener noreferrer"
                style={{ height: 40, width: 40 }}
                bgColor="gray" 
                fgColor="white"
              />
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
