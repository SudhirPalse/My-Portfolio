
import React, { useEffect } from 'react';

const Skills: React.FC = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.skill-card');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animated-card');
          }, index * 100);
        }
      });
    }, { threshold: 0.1 });
    
    cards.forEach(card => observer.observe(card));
    
    return () => {
      cards.forEach(card => observer.unobserve(card));
    };
  }, []);

  const skills = [
    { name: 'C', level: '90%' },
    { name: 'C++', level: '85%' },
    { name: 'AutoCAD', level: '80%' },
    { name: 'Fusion 360', level: '75%' },
    { name: 'Python', level: '70%' }
  ];
  
  return (
    <section id="skills" className="py-16 px-4 bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold relative pb-3 mb-6 inline-block">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card bg-white shadow-sm hover:shadow-md transition-shadow duration-300 rounded-lg p-4 flex flex-col">
              <div className="w-full">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2.5">
                  <div 
                    className="bg-primary h-2.5 rounded-full"
                    style={{ width: skill.level }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4">Certifications</h3>
          <div className="bg-white shadow-sm hover:shadow-md transition-shadow duration-300 rounded-lg p-4 flex items-center gap-3">
            <div className="bg-primary/20 p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="font-medium">Programming Essentials in Python</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
