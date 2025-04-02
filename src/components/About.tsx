
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-2/3">
            <p className="mb-4 text-lg">
              I'm Sudhir Balu Palse, a professional with expertise in programming and technical design.
              My technical skills include C, C++, AutoCAD, and Fusion 360. I have experience working at
              D Mart Supermarket in the prompt company and I'm passionate about emerging technologies.
            </p>
            <p className="text-lg">
              With a certificate in Programming Essentials in Python, I continue to expand my knowledge
              and skills in various technical domains.
            </p>
          </div>
          <div className="md:w-1/3 bg-secondary p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="font-medium">Name:</span>
                <span>Sudhir Balu Palse</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-medium">Email:</span>
                <a href="mailto:palsesudhir9@gmail.com" className="text-primary hover:underline">
                  palsesudhir9@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-medium">Phone:</span>
                <a href="tel:+917028142154" className="hover:underline">
                  +91 7028142154
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
