import React from 'react';
import { Calendar, MessageCircle, Activity, ChevronRight, User } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Main Text Content */}
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl lg:text-8xl text-dark mb-6 tracking-tight leading-[1.1]">
            Support, hope, <br className="hidden md:block" /> and strength.
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-10 leading-relaxed font-light">
            Navigate your journey with a community that cares. Access resources,
            track your health, and find a hand to hold when you need it most.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <button className="w-full sm:w-auto bg-dark text-white px-8 py-4 rounded-md text-lg font-medium hover:bg-gray-800 transition-all hover:scale-105 duration-200 shadow-xl shadow-gray-200/50">
              Find Support Now
            </button>
            <a
              href="#contact"
              className="w-full sm:w-auto text-dark px-8 py-4 rounded-md text-lg font-medium hover:underline decoration-1 underline-offset-4 flex items-center justify-center gap-1 group"
            >
              Contact Us{" "}
              <ChevronRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
          </div>
        </div>

        {/* Visual Composition */}
        <div className="relative max-w-5xl mx-auto h-[400px] md:h-[600px] mt-12 hidden md:block select-none pointer-events-none">
          {/* Central Image / Dashboard Representation */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-3xl bg-white rounded-xl shadow-2xl shadow-purple-100/50 border border-gray-100 overflow-hidden z-10 animate-fade-in-up delay-200">
            <div className="bg-white border-b border-gray-100 p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="text-xs font-medium text-gray-400">
                Community Dashboard
              </div>
            </div>

            {/* 
            New Image Choice: 
            A clean, high-key photography style image showing connection and support.
            Bright, airy, and optimistic. 
          */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=2000"
                alt="Friends supporting each other"
                className="w-full h-auto object-cover"
              />
              {/* Refined gradient overlay - lighter and smoother */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-8">
                <div className="text-white text-left">
                  <p className="font-serif text-3xl mb-1">Community Voices</p>
                  <p className="text-white/90 font-light text-sm md:text-base">
                    "Finding this group changed my life. I'm never alone."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Card 1: Reminder/Task */}
          <div className="absolute top-[-20px] left-0 lg:-left-12 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/50 w-64 z-20 animate-float">
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2">
                <div className="bg-purple-100 p-2 rounded-lg text-purple-600">
                  <Calendar size={18} />
                </div>
                <span className="font-semibold text-sm text-gray-700">
                  Next Visit
                </span>
              </div>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
            <p className="font-serif text-lg mb-1 text-dark">Dr. Richardson</p>
            <p className="text-xs text-gray-500">
              Nov 3, 2:00 PM • Oncology Dept
            </p>
          </div>

          {/* Floating Card 2: Health Status */}
          <div className="absolute bottom-20 -right-4 lg:-right-16 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/50 w-72 z-20 animate-float-delayed">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-100 p-2 rounded-full text-green-600">
                <Activity size={20} />
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm">
                  Daily Wellness
                </p>
                <p className="text-xs text-gray-500">Track your symptoms</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-gray-50 p-2 rounded-lg">
                <span className="text-sm text-gray-600">Energy Level</span>
                <span className="text-sm font-bold text-green-600">Good</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1.5">
                <div className="bg-green-500 h-1.5 rounded-full w-3/4"></div>
              </div>
            </div>
          </div>

          {/* Floating Card 3: Message */}
          <div className="absolute top-32 -right-8 lg:-right-24 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/50 w-60 z-10 animate-float-slow">
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 p-2 rounded-full text-blue-600 shrink-0">
                <MessageCircle size={16} />
              </div>
              <div>
                <p className="font-serif text-base text-dark mb-1">Sarah M.</p>
                <p className="text-xs text-gray-500 leading-tight">
                  "Just checking in on everyone today. Keep fighting! 💪"
                </p>
              </div>
            </div>
          </div>

          {/* Floating Card 4: Profile */}
          <div className="absolute top-48 -left-4 lg:-left-20 bg-white/95 backdrop-blur-sm p-3 pr-6 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/50 z-10 flex items-center gap-3 animate-float-delayed">
            <div className="bg-orange-100 p-2 rounded-full text-orange-600">
              <User size={16} />
            </div>
            <span className="text-sm font-medium text-gray-700">
              New member joined
            </span>
          </div>
        </div>
      </div>

      {/* Background Gradient Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl -z-10 mix-blend-multiply filter opacity-50 animate-float-slow"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-100/50 rounded-full blur-3xl -z-10 mix-blend-multiply filter opacity-50 animate-float"></div>
    </section>
  );
};

export default Hero;
