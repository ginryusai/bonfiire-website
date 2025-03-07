
import React from 'react';
import Logo from './Logo';
import { cn } from '@/lib/utils';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-md bg-white/80 transition-all duration-300",
      className
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo size="md" />
        <nav className="hidden md:flex space-x-8">
          {['Home', 'About', 'Contact'].map((item) => (
            <a 
              key={item} 
              href="#" 
              className="text-gray-600 hover:text-bonfire-orange transition-colors duration-300 text-sm tracking-wide"
            >
              {item}
            </a>
          ))}
        </nav>
        <div className="flex items-center">
          <button className="px-4 py-2 text-sm rounded-full bg-gradient-to-r from-bonfire-orange to-bonfire-yellow text-white shadow-md hover:shadow-lg hover:opacity-90 transition-all duration-300">
            Get the App
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
