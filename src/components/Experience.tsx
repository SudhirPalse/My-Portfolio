
import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold relative pb-3 mb-6 inline-block">Work Experience</h2>
        
        <div className="relative border-l-2 border-primary pl-8 ml-4">
          <div className="mb-10 relative">
            <div className="absolute -left-11 bg-white p-1">
              <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full"></div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-semibold">D Mart Supermarket</h3>
              <p className="text-muted-foreground mb-4">Prompt Company</p>
              
              <div className="mb-4">
                <h4 className="font-medium">Project: Emerging Technology</h4>
                <p className="mt-2">
                  Worked on implementing emerging technologies to enhance the customer shopping experience and
                  operational efficiency at D Mart Supermarket.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-accent rounded-full text-sm">Retail</span>
                <span className="px-3 py-1 bg-accent rounded-full text-sm">Technology</span>
                <span className="px-3 py-1 bg-accent rounded-full text-sm">Innovation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
