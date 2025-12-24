
import React from 'react';

const Hero: React.FC = () => {
  const techStack = ['React JS', 'TypeScript', 'Redux Toolkit', 'FinTech Analytics', 'MBA Finance', 'Product Thinking', 'UI Architecture', 'Next.js', 'Tailwind CSS'];

  return (
    <section id="home" className="relative pt-32 pb-24 md:pt-48 md:pb-32 hero-pattern overflow-hidden">
      {/* Abstract Background Accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] -mr-48 -mt-48 z-0"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 reveal-up">
            <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-white border border-slate-100 shadow-sm text-accent text-[11px] font-extrabold uppercase tracking-[0.2em] mb-10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span>Senior Frontend Developer • MBA Finance</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.85] mb-8">
              Frontend <span className="text-slate-300">meets</span> <br />
              <span className="text-accent italic">FinTech Logic.</span>
            </h1>
            
            <p className="text-xl text-slate-500 leading-relaxed mb-12 max-w-xl font-medium">
              I'm <span className="text-slate-900">Sadakshya Sharma</span>. I bridge the gap between high-performance React engineering and strategic financial intelligence. 2.5+ years of craft, now evolving through an MBA.
            </p>
            
            <div className="flex flex-wrap gap-6">
              <a
                href="#projects"
                className="inline-flex justify-center items-center px-10 py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-accent hover:-translate-y-1 transition-all duration-300 shadow-2xl shadow-slate-900/20 group"
              >
                Explore Work
                <svg className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <a
                href="#contact"
                className="inline-flex justify-center items-center px-10 py-5 bg-white text-slate-900 border border-slate-200 font-bold rounded-2xl hover:border-accent hover:text-accent transition-all active:scale-95"
              >
                Let's Talk
              </a>
            </div>
          </div>

          {/* Right Column: Animated Image Column & UI Widgets */}
          <div className="lg:col-span-5 relative mt-16 lg:mt-0">
            <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
              
              {/* Main Image Frame with Mask Reveal */}
              <div className="browser-frame w-full h-full mask-reveal stagger-2 shadow-2xl border-white border-[12px] relative z-10">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop" 
                  alt="Sadakshya Sharma" 
                  className="w-full h-full object-cover grayscale brightness-110 hover:grayscale-0 transition-all duration-1000"
                />
              </div>

              {/* Floating FinTech Analytics Widget */}
              <div className="absolute -top-10 -right-8 w-48 bg-white/90 backdrop-blur-xl p-5 rounded-3xl shadow-2xl border border-white/50 animate-float z-20 hidden md:block">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-blue-50 rounded-xl">
                    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-black text-green-500">+12.4%</span>
                </div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Portfolio Alpha</p>
                <div className="h-12 flex items-end space-x-1">
                  <div className="flex-1 bg-slate-100 h-1/2 rounded-t-sm"></div>
                  <div className="flex-1 bg-accent h-3/4 rounded-t-sm"></div>
                  <div className="flex-1 bg-slate-100 h-2/3 rounded-t-sm"></div>
                  <div className="flex-1 bg-accent h-full rounded-t-sm"></div>
                </div>
              </div>

              {/* Floating Code/Logic Widget */}
              <div className="absolute -bottom-8 -left-12 w-56 bg-slate-900 p-6 rounded-3xl shadow-2xl animate-float-delayed z-20 hidden md:block">
                <div className="flex space-x-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-red-400"></div>
                  <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-1.5 w-full bg-white/10 rounded"></div>
                  <div className="h-1.5 w-3/4 bg-accent/40 rounded"></div>
                  <div className="h-1.5 w-1/2 bg-white/5 rounded"></div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center">
                  <span className="text-[9px] font-mono text-slate-500">component.tsx</span>
                  <span className="text-[9px] font-mono text-accent">Active</span>
                </div>
              </div>

              {/* Professional Tag */}
              <div className="absolute top-1/2 -left-20 -translate-y-1/2 -rotate-90 origin-center hidden xl:block">
                <p className="text-[11px] font-black text-slate-300 uppercase tracking-[0.5em] whitespace-nowrap">
                  DESIGNING FOR SCALE • STRATEGIZING FOR GROWTH
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack Horizontal Scroll Marquee */}
      <div className="mt-32 border-y border-slate-100 bg-white/40 backdrop-blur-sm py-10 overflow-hidden select-none relative z-20">
        <div className="animate-marquee whitespace-nowrap flex space-x-20 items-center">
          {[...techStack, ...techStack].map((tech, i) => (
            <div key={i} className="flex items-center space-x-6">
              <span className="text-slate-900 font-black text-xs uppercase tracking-[0.5em]">
                {tech}
              </span>
              <div className="w-2 h-2 bg-accent/20 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
