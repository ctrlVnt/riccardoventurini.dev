import { Hero } from "@/components/Hero";
import { ProjectsTimeline } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { About } from "@/components/About";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProjectsTimeline />
      <Contact />
    </div>
  );
};

export default Index;
