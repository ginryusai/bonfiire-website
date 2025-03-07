
import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Logo from '@/components/Logo';
import { Users, Calendar, MapPin, Bell } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-gray-50 relative overflow-hidden">
      {/* Decorative abstract shapes */}
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Orange circle */}
        <div className="absolute top-[10%] right-[5%] w-64 h-64 rounded-full bg-orange-100/30 blur-3xl"></div>
        
        {/* Yellow blob */}
        <div className="absolute top-[60%] left-[10%] w-80 h-80 rounded-[40%_60%_70%_30%/40%_50%_60%_50%] bg-yellow-100/40 blur-2xl"></div>
        
        {/* Small orange accent */}
        <div className="absolute top-[30%] left-[20%] w-20 h-20 rounded-full bg-bonfire-orange/10 blur-xl"></div>
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-transparent to-transparent"></div>
      </div>
      
      <Navbar />
      
      <main className="pt-24 relative z-10">
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

        {/* Features section */}
        <section className="py-24 px-6 bg-white relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-orange-50 text-bonfire-orange border border-orange-100">
                Core Features
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Connect</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our platform makes it easy to discover, join, and create meaningful social experiences with people who share your interests.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Feature 1 */}
              <div className="bg-orange-50/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-md relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100/30 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl group-hover:scale-110 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                    <Users className="w-6 h-6 text-bonfire-orange" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Connect with Your Community</h3>
                  <p className="text-gray-600 mb-4">
                    Find people who share your interests and passions. Build meaningful connections that last beyond the screen.
                  </p>
                  <a href="#" className="text-bonfire-orange font-medium inline-flex items-center hover:underline">
                    Learn more
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.5 12.5L11 8L6.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-yellow-50/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-md relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-100/30 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl group-hover:scale-110 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                    <Calendar className="w-6 h-6 text-bonfire-yellow" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Discover Local Events</h3>
                  <p className="text-gray-600 mb-4">
                    Browse through a curated list of events happening near you. From casual meetups to organized activities.
                  </p>
                  <a href="#" className="text-bonfire-orange font-medium inline-flex items-center hover:underline">
                    Learn more
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.5 12.5L11 8L6.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-red-50/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-md relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-100/30 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl group-hover:scale-110 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                    <MapPin className="w-6 h-6 text-bonfire-red" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Location-Based Matching</h3>
                  <p className="text-gray-600 mb-4">
                    Find people and events in your area. Our smart location technology helps you connect with your local community.
                  </p>
                  <a href="#" className="text-bonfire-orange font-medium inline-flex items-center hover:underline">
                    Learn more
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.5 12.5L11 8L6.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="bg-blue-50/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-md relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/30 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl group-hover:scale-110 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-sm">
                    <Bell className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Real-time Notifications</h3>
                  <p className="text-gray-600 mb-4">
                    Never miss an opportunity to connect. Get notified about new events, messages, and connection requests.
                  </p>
                  <a href="#" className="text-bonfire-orange font-medium inline-flex items-center hover:underline">
                    Learn more
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.5 12.5L11 8L6.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* App showcase section */}
        <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center">
              {/* Phone mockup */}
              <div className="lg:w-1/2 mb-12 lg:mb-0 relative">
                <div className="relative z-10 mx-auto lg:mx-0 max-w-sm">
                  <div className="bg-black rounded-[3rem] p-4 shadow-xl">
                    <div className="bg-gray-900 rounded-[2.5rem] overflow-hidden border-[8px] border-black relative">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-lg z-10"></div>
                      <img 
                        src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                        alt="Bonfiire App Screenshot" 
                        className="w-full aspect-[9/19.5] object-cover"
                      />
                    </div>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-1/4 -left-16 w-48 h-48 bg-orange-100/50 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-yellow-100/50 rounded-full blur-3xl"></div>
              </div>

              {/* Content */}
              <div className="lg:w-1/2 lg:pl-16">
                <div className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-orange-50 text-bonfire-orange border border-orange-100">
                  Mobile Experience
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Take Bonfiire With You Everywhere</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Our mobile app puts the power of connection in your pocket. Discover events, message friends, and get notifications in real-time, wherever you are.
                </p>

                <div className="space-y-4">
                  {/* Feature item 1 */}
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mr-4">
                      <span className="text-bonfire-orange font-semibold">1</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Smart Discovery</h3>
                      <p className="text-gray-600">Find events and people that match your interests and location preferences.</p>
                    </div>
                  </div>

                  {/* Feature item 2 */}
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mr-4">
                      <span className="text-bonfire-orange font-semibold">2</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Real-time Messaging</h3>
                      <p className="text-gray-600">Chat with individuals or groups to coordinate meetups and share experiences.</p>
                    </div>
                  </div>

                  {/* Feature item 3 */}
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mr-4">
                      <span className="text-bonfire-orange font-semibold">3</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Event Calendar</h3>
                      <p className="text-gray-600">Keep track of all your upcoming events and get reminders so you never miss out.</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
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
            </div>
          </div>
        </section>

        {/* Testimonials section */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-3 py-1 mb-4 text-xs font-medium rounded-full bg-orange-50 text-bonfire-orange border border-orange-100">
                User Stories
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Community Says</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Hear from people who have found connections, friendships, and experiences through Bonfiire.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="bg-gray-50 rounded-2xl p-8 relative">
                <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/2">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=128" 
                      alt="User" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-600 mb-4">
                  "I've met some of my closest friends through Bonfiire. The local events feature helped me find people with similar interests right in my neighborhood."
                </blockquote>
                <footer>
                  <h4 className="font-semibold">Sarah T.</h4>
                  <p className="text-sm text-gray-500">Member since 2022</p>
                </footer>
              </div>

              {/* Testimonial 2 */}
              <div className="bg-gray-50 rounded-2xl p-8 relative">
                <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/2">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=128" 
                      alt="User" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-600 mb-4">
                  "The app is incredibly intuitive. I've organized several hiking meetups and met amazing people who share my passion for outdoor adventures."
                </blockquote>
                <footer>
                  <h4 className="font-semibold">Marcus J.</h4>
                  <p className="text-sm text-gray-500">Member since 2021</p>
                </footer>
              </div>

              {/* Testimonial 3 */}
              <div className="bg-gray-50 rounded-2xl p-8 relative">
                <div className="absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/2">
                  <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-white">
                    <img 
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=128" 
                      alt="User" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <blockquote className="text-gray-600 mb-4">
                  "As someone new to the city, Bonfiire helped me build a social circle from scratch. The events are well-organized and the people are genuinely friendly."
                </blockquote>
                <footer>
                  <h4 className="font-semibold">Elena K.</h4>
                  <p className="text-sm text-gray-500">Member since 2023</p>
                </footer>
              </div>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="py-24 px-6 bg-gradient-to-br from-orange-50 to-yellow-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full pointer-events-none overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-[30%] right-[20%] w-64 h-64 rounded-full bg-orange-100/30 blur-3xl"></div>
            <div className="absolute bottom-[20%] left-[10%] w-80 h-80 rounded-full bg-yellow-100/40 blur-3xl"></div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Spark Real Connections?</h2>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Download the Bonfiire app now and start discovering events and people in your area. Your next great connection is just a tap away.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
              <a href="#" className="flex items-center justify-center px-8 py-4 rounded-md bg-black text-white hover:bg-gray-800 transition-all duration-300">
                <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.5385 12.3223C17.5168 9.51428 19.9259 8.27763 20.021 8.22253C18.7142 6.27296 16.7031 6.00599 16.0339 5.99072C14.3298 5.81766 12.6807 6.97234 11.8181 6.97234C10.9388 6.97234 9.61854 6.00599 8.18673 6.0365C6.36203 6.06702 4.66299 7.0941 3.74251 8.75242C1.8466 12.1324 3.2784 17.1369 5.09801 19.8911C6.00323 21.2348 7.05943 22.7406 8.45642 22.685C9.81856 22.6294 10.3507 21.812 11.9852 21.812C13.603 21.812 14.1004 22.685 15.5235 22.6516C16.9857 22.6294 17.8909 21.2958 18.7614 19.9408C19.8177 18.3893 20.2459 16.8683 20.2676 16.8073C20.2242 16.7924 17.5603 15.7029 17.5385 12.3223Z"/>
                  <path d="M15.0962 4.0769C15.8324 3.17686 16.3124 1.93507 16.1738 0.671387C15.1089 0.716027 13.7929 1.38972 13.0263 2.26762C12.3467 3.04503 11.7623 4.33041 11.9222 5.54988C13.1242 5.6355 14.3384 4.9692 15.0962 4.0769Z"/>
                </svg>
                App Store
              </a>
              <a href="#" className="flex items-center justify-center px-8 py-4 rounded-md bg-black text-white hover:bg-gray-800 transition-all duration-300">
                <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.60951 20.7173C3.39637 20.5042 3.27798 20.2098 3.27832 19.9027V4.09449C3.27815 3.78743 3.39654 3.49303 3.60951 3.27997L3.69595 3.19369L13.3402 12.8379V12.9244L3.69612 22.5686L3.60951 20.7173Z"/>
                  <path d="M17.6068 8.7861L13.3402 13.0527V12.9244L17.6068 8.65781L17.693 8.60066C18.5372 9.09809 18.5372 9.94292 17.693 10.4403L17.6068 8.7861Z"/>
                  <path d="M13.3402 12.8379L3.69595 3.19369L3.78263 3.10724C4.30949 2.78583 4.96709 2.83249 5.44296 3.21874L17.6068 10.3556L13.3402 12.8379Z"/>
                  <path d="M13.3402 13.0527L17.6068 8.7861L17.6068 10.4404C17.6068 10.4404 17.6066 10.4402 17.6068 10.4404L5.44296 17.5773C4.96709 17.9636 4.30949 18.0102 3.78263 17.6887L3.69595 17.6023L13.3402 13.0527Z"/>
                </svg>
                Google Play
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-50 border-t border-gray-100 py-12 px-6 relative z-10">
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
