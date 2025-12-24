
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[3rem] p-8 md:p-16 lg:p-24 overflow-hidden relative shadow-3xl">
          {/* Decorative Gradients */}
          <div className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 bg-accent/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-accent font-black uppercase tracking-[0.3em] text-xs mb-8">Strategic Partnerships</h2>
              <h3 className="text-4xl md:text-6xl font-black text-white mb-10 leading-[1.1] tracking-tighter">
                Let's engineer your <br />
                <span className="text-accent italic">next big impact.</span>
              </h3>
              <p className="text-slate-400 text-lg mb-12 max-w-md leading-relaxed">
                Whether you're looking for a high-performance frontend lead or a business-minded tech strategist, let's connect.
              </p>
              
              <div className="space-y-8">
                <a href="mailto:sadakshya.27s@gmail.com" className="flex items-center group">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-accent transition-all duration-300 group-hover:-translate-y-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Email Me</p>
                    <span className="text-white text-lg font-bold">sadakshya.27s@gmail.com</span>
                  </div>
                </a>

                <a href="tel:+917889602925" className="flex items-center group">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-accent transition-all duration-300 group-hover:-translate-y-1">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Call Me</p>
                    <span className="text-white text-lg font-bold">+91-7889602925</span>
                  </div>
                </a>
                
                <a href="https://www.linkedin.com/in/sadakshya-sharma-9b7989199" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                  <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mr-6 group-hover:bg-accent transition-all duration-300 group-hover:-translate-y-1">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">LinkedIn</p>
                    <span className="text-white text-lg font-bold">sadakshya-sharma</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl relative overflow-hidden">
              <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-black text-slate-400 mb-3 uppercase tracking-widest">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-accent focus:bg-white outline-none transition-all font-medium text-slate-900"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-400 mb-3 uppercase tracking-widest">Business Email</label>
                  <input 
                    type="email" 
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-accent focus:bg-white outline-none transition-all font-medium text-slate-900"
                    placeholder="name@company.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-black text-slate-400 mb-3 uppercase tracking-widest">Strategic Brief</label>
                  <textarea 
                    rows={4}
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:ring-2 focus:ring-accent focus:bg-white outline-none transition-all font-medium text-slate-900"
                    placeholder="How can we collaborate?"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full py-5 bg-slate-900 text-white font-black uppercase tracking-[0.2em] text-xs rounded-2xl hover:bg-accent transition-all active:scale-95 shadow-xl shadow-slate-900/10"
                >
                  Initiate Discussion
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
