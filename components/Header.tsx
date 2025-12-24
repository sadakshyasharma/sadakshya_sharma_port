
import React from 'react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const navItems = [
    { label: 'Work', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'About', id: 'about' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass h-24 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <a href="#home" className="text-lg font-black tracking-tighter text-slate-900 flex items-center group">
              <span className="bg-slate-900 text-white w-8 h-8 flex items-center justify-center rounded-lg mr-2 group-hover:bg-accent transition-colors">S</span>
              SADAKSHYA<span className="text-accent ml-1">SHARMA</span>
            </a>
          </div>
          
          <nav className="hidden md:flex space-x-12">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:text-accent ${
                  activeSection === item.id ? 'text-accent' : 'text-slate-400'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <a
              href="#contact"
              className="px-6 py-3 bg-slate-900 text-white text-[11px] font-black uppercase tracking-widest rounded-xl hover:bg-accent transition-all active:scale-95 shadow-lg"
            >
              Collaborate
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
