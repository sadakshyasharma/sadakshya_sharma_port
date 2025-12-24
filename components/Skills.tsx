
import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend Mastery',
      skills: ['React JS', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3/Tailwind'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: 'Tools & Ecosystem',
      skills: ['Redux Toolkit', 'React Query', 'Material UI', 'Git/GitHub', 'Agile/Jira'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      )
    },
    {
      title: 'Business & Finance',
      skills: ['Financial Literacy', 'Data Analytics', 'Strategic Management', 'FinTech Trends', 'MBA Foundations'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  return (
    <section id="skills" className="py-24 bg-[#fcfcfc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-base font-bold text-accent uppercase tracking-widest mb-4">Core Competencies</h2>
          <h3 className="text-4xl font-bold text-slate-900">A hybrid skill-set for a <br />modern digital economy.</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 text-accent rounded-xl flex items-center justify-center mb-6">
                {category.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-6">{category.title}</h4>
              <ul className="space-y-4">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center text-slate-600">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
