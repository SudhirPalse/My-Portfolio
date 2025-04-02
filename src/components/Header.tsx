
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="py-6 bg-white/80 backdrop-blur-sm sticky top-0 z-10 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-xl font-semibold">Sudhir Palse</h1>
        <nav>
          <ul className="flex gap-6">
            <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
            <li><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
            <li><a href="#experience" className="hover:text-primary transition-colors">Experience</a></li>
            <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
