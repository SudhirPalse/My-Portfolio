
import React from 'react';
import pic from "../../public/uploads/MyPic.png"
const Hero: React.FC = () => {
  return (
    <section className="hero-gradient py-20 md:py-32 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sudhir Balu Palse</h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-6">Professional Portfolio</p>
          <a 
            href="#contact" 
            className="inline-block bg-primary hover:bg-primary/90 transition-colors px-6 py-3 rounded-md font-medium"
          >
            Get In Touch
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img 
              src={pic}
              alt="Sudhir Balu Palse" 
              className="w-full h-full object-cover bg-secondary"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
