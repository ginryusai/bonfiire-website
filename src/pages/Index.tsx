
import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Logo from '@/components/Logo';

const Index = () => {
  // Reference for the logo container to add some scroll animations
  const logoRef = useRef<HTMLDivElement>(null);

  // Add scroll effect for logo
  useEffect(() => {
    const handleScroll = () => {
      if (logoRef.current) {
        const scrollY = window.scrollY;
        const scale = Math.max(1 - scrollY * 0.001, 0.6);
        logoRef.current.style.transform = `scale(${scale})`;
        logoRef.current.style.opacity = `${Math.max(1 - scrollY * 0.002, 0.5)}`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero section */}
        <section className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 overflow-hidden">
          <div 
            ref={logoRef}
            className="mb-12 animate-scale-in"
          >
            <Logo size="lg" className="w-24 h-24 md:w-32 md:h-32" />
          </div>

          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-orange-50 text-bonfire-orange border border-orange-100">
              Connecting Communities
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              Spark Real Connections
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Discover local events, activities, and meet-ups designed to bring people together and create meaningful experiences.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-bonfire-orange to-bonfire-yellow text-white shadow-lg hover:shadow-xl hover:opacity-90 transition-all duration-300">
                Join the Community
              </button>
              <button className="px-8 py-3 rounded-full border border-gray-200 text-gray-700 hover:border-bonfire-orange hover:text-bonfire-orange transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-4 inset-x-0 h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
        </section>

        {/* Featured section */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-orange-50 text-bonfire-orange border border-orange-100">
                Featured
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Trending Experiences</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover the most popular events happening in your community.
              </p>
            </div>

            {/* Feature cards would go here */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div 
                  key={i} 
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="h-48 bg-gray-100 relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Logo size="sm" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-bonfire-orange transition-colors duration-300">
                      Event Title {i}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      A brief description of the event goes here. This is a placeholder.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">June 15, 2023</span>
                      <button className="text-sm text-bonfire-orange hover:underline">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-50 border-t border-gray-100 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <Logo size="sm" />
          </div>
          <div className="text-sm text-gray-500">
            © 2023 Bonfiire.io. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
