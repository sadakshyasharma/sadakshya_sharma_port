
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div className="order-2 lg:order-1">
            <h2 className="text-accent font-black uppercase tracking-[0.2em] text-xs mb-6">Strategic Profile</h2>
            <h3 className="text-5xl font-black text-slate-900 mb-10 leading-none tracking-tighter">
              Engineering <span className="text-slate-400">Complexity</span> into <br />Business <span className="italic">Clarity.</span>
            </h3>
            
            <div className="space-y-8">
              <p className="text-xl text-slate-600 leading-relaxed font-medium">
                I am <span className="text-slate-900 font-bold underline decoration-accent/30 underline-offset-4">Sadakshya Sharma</span>. My career has been defined by a deep curiosity for how digital products drive economic value.
              </p>
              
              <div className="grid gap-8">
                <div className="flex group">
                  <div className="mr-6 flex-shrink-0 w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                    <span className="font-black">01</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Technical Foundations</h4>
                    <p className="text-slate-500">2.5+ years building scalable React systems at Avisoft, specializing in high-performance dashboards and data-intensive applications.</p>
                  </div>
                </div>
                
                <div className="flex group">
                  <div className="mr-6 flex-shrink-0 w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                    <span className="font-black">02</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Business Evolution</h4>
                    <p className="text-slate-500">Currently pursuing an MBA in Finance to master the unit economics and market strategies that underpin successful FinTech ecosystems.</p>
                  </div>
                </div>
              </div>

              <div className="pt-8 flex items-center space-x-12">
                <div>
                  <p className="text-4xl font-black text-slate-900">2.5+</p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Exp Years</p>
                </div>
                <div className="w-px h-12 bg-slate-100"></div>
                <div>
                  <p className="text-4xl font-black text-slate-900">12+</p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Major Projects</p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
             <div className="absolute -top-10 -right-10 text-slate-50 font-black text-[12rem] select-none leading-none z-0">S</div>
             <div className="relative z-10 browser-frame bg-slate-100 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                  alt="Business Analytics UI" 
                  className="w-full grayscale brightness-90 hover:grayscale-0 transition-all duration-1000"
                />
             </div>
             <div className="absolute -bottom-8 -right-8 p-6 bg-slate-900 rounded-3xl text-white shadow-2xl z-20 max-w-[200px]">
                <p className="text-xs font-bold text-accent uppercase mb-2">Mindset</p>
                <p className="text-sm font-medium italic">"Designing for the balance sheet as much as the end user."</p>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
