
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
              <a href="#" className="flex items-center justify-center px-6 py-3 rounded-md bg-black text-white hover:bg-gray-800 transition-all duration-300">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.5385 12.3223C17.5168 9.51428 19.9259 8.27763 20.021 8.22253C18.7142 6.27296 16.7031 6.00599 16.0339 5.99072C14.3298 5.81766 12.6807 6.97234 11.8181 6.97234C10.9388 6.97234 9.61854 6.00599 8.18673 6.0365C6.36203 6.06702 4.66299 7.0941 3.74251 8.75242C1.8466 12.1324 3.2784 17.1369 5.09801 19.8911C6.00323 21.2348 7.05943 22.7406 8.45642 22.685C9.81856 22.6294 10.3507 21.812 11.9852 21.812C13.603 21.812 14.1004 22.685 15.5235 22.6516C16.9857 22.6294 17.8909 21.2958 18.7614 19.9408C19.8177 18.3893 20.2459 16.8683 20.2676 16.8073C20.2242 16.7924 17.5603 15.7029 17.5385 12.3223Z"/>
                  <path d="M15.0962 4.0769C15.8324 3.17686 16.3124 1.93507 16.1738 0.671387C15.1089 0.716027 13.7929 1.38972 13.0263 2.26762C12.3467 3.04503 11.7623 4.33041 11.9222 5.54988C13.1242 5.6355 14.3384 4.9692 15.0962 4.0769Z"/>
                </svg>
                App Store
              </a>
              <a href="#" className="flex items-center justify-center px-6 py-3 rounded-md bg-black text-white hover:bg-gray-800 transition-all duration-300">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.60951 20.7173C3.39637 20.5042 3.27798 20.2098 3.27832 19.9027V4.09449C3.27815 3.78743 3.39654 3.49303 3.60951 3.27997L3.69595 3.19369L13.3402 12.8379V12.9244L3.69612 22.5686L3.60951 20.7173Z"/>
                  <path d="M17.6068 8.7861L13.3402 13.0527V12.9244L17.6068 8.65781L17.693 8.60066C18.5372 9.09809 18.5372 9.94292 17.693 10.4403L17.6068 8.7861Z"/>
                  <path d="M13.3402 12.8379L3.69595 3.19369L3.78263 3.10724C4.30949 2.78583 4.96709 2.83249 5.44296 3.21874L17.6068 10.3556L13.3402 12.8379Z"/>
                  <path d="M13.3402 13.0527L17.6068 8.7861L17.6068 10.4404C17.6068 10.4404 17.6066 10.4402 17.6068 10.4404L5.44296 17.5773C4.96709 17.9636 4.30949 18.0102 3.78263 17.6887L3.69595 17.6023L13.3402 13.0527Z"/>
                </svg>
                Google Play
              </a>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-4 inset-x-0 h-24 bg-gradient-to-t from-gray-50 to-transparent"></div>
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
