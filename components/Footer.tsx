
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
          <div className="flex-shrink-0">
            <a href="#home" className="text-xl font-black tracking-tighter text-slate-900 flex items-center">
              <span className="bg-slate-900 text-white w-9 h-9 flex items-center justify-center rounded-xl mr-3">S</span>
              SADAKSHYA<span className="text-accent ml-1">SHARMA</span>
            </a>
          </div>

          <nav className="flex space-x-10">
            <a href="https://www.linkedin.com/in/sadakshya-sharma-9b7989199" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-accent font-bold text-xs uppercase tracking-widest transition-colors">LinkedIn</a>
            <a href="mailto:sadakshya.27s@gmail.com" className="text-slate-400 hover:text-accent font-bold text-xs uppercase tracking-widest transition-colors">Email</a>
            <a href="#projects" className="text-slate-400 hover:text-accent font-bold text-xs uppercase tracking-widest transition-colors">Archive</a>
          </nav>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">
          <p>&copy; {new Date().getFullYear()} Sadakshya Sharma • Built for Performance.</p>
          <div className="mt-4 md:mt-0 flex items-center space-x-3">
             <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
             <span>Available for Strategic Partnerships</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
