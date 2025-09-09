import React from 'react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "Flutter", level: 100 },
        { name: "Kotlin", level: 90 },
        { name: "Angular", level: 70 },
        { name: "React", level: 85 },
        { name: "Javascript", level: 75 },
        { name: "HTML/CSS", level: 100 }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Java (SpringBoot)", level: 95 },
        { name: "PostgreSQL", level: 100 },
        { name: "Node.js", level: 50 },
        { name: "Mongodb", level: 30 },
        { name: "RESTful APIs", level: 90 },
        { name: "Python", level: 30 }
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Docker", level: 85 },
        { name: "Git", level: 100 },
        { name: "CI/CD", level: 80 },
        { name: "Linux CLI", level: 90 },
        { name: "Bash Scripting", level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-32 bg-dark-bg/80 backdrop-blur-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-inter mb-6 text-white">
            My Skills
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Technologies and tools I use daily to build innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-dark-surface p-8 rounded-lg border border-dev-primary/20 hover:shadow-xl hover:shadow-dev-primary/10 transition-all duration-300">
              <h3 className="text-2xl font-bold font-inter mb-6 text-center text-white">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-dark-accent rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-dev-primary to-dev-secondary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
