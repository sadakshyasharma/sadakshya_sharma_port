
import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'WealthViz Analytics',
      category: 'FinTech Solution',
      description: 'A data-heavy wealth management tool for tracking portfolio performance across multi-currency assets.',
      problem: 'Complex financial data was being presented in stagnant, difficult-to-parse tables.',
      solution: 'Developed a dynamic React dashboard using Recharts and React-Query for real-time visualization.',
      outcome: 'Reduced user task completion time by 35% and improved data readability scores.',
      image: 'https://images.unsplash.com/photo-1611974714851-eb605161882b?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Avisoft Enterprise ERP',
      category: 'Core Engineering',
      description: 'Modernizing internal logistics for a large-scale enterprise using a modular React architecture.',
      problem: 'Legacy system maintenance was consuming 40% of the dev team\'s weekly sprint capacity.',
      solution: 'Rebuilt the UI with a custom Material UI theme and reusable component library.',
      outcome: 'Maintenance overhead dropped by 60%, and feature deployment speed increased by 2x.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
    }
  ];

  return (
    <section id="projects" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div className="max-w-2xl">
            <h2 className="text-accent font-black uppercase tracking-[0.2em] text-xs mb-6">Selected Works</h2>
            <h3 className="text-5xl font-black text-slate-900 leading-none tracking-tighter">
              Architecture that <br />
              <span className="text-slate-400 italic">scales with business.</span>
            </h3>
          </div>
          <div className="mt-8 md:mt-0">
             <a href="#" className="text-sm font-black text-slate-900 border-b-2 border-accent pb-1 hover:text-accent transition-colors">
               VIEW ARCHIVE
             </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {projects.map((project, idx) => (
            <div key={idx} className="group">
              <div className="browser-frame bg-white shadow-lg group-hover:shadow-2xl transition-all duration-500 overflow-hidden mb-10">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-[300px] object-cover group-hover:scale-105 transition-transform duration-700 brightness-95"
                />
              </div>

              <div className="flex items-center space-x-3 mb-4">
                <span className="px-3 py-1 bg-slate-200 text-slate-600 rounded-md text-[10px] font-bold uppercase tracking-widest">
                  {project.category}
                </span>
              </div>

              <h4 className="text-3xl font-black text-slate-900 mb-6 group-hover:text-accent transition-colors">
                {project.title}
              </h4>
              
              <p className="text-slate-500 mb-8 leading-relaxed font-medium">
                {project.description}
              </p>

              <div className="grid gap-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                 <div className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <p className="text-sm text-slate-600"><span className="font-bold text-slate-900">Outcome:</span> {project.outcome}</p>
                 </div>
                 <div className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <p className="text-sm text-slate-600"><span className="font-bold text-slate-900">Tech:</span> React, TypeScript, Redux</p>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
