
import React from 'react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: 'Avisoft',
      role: 'Software Developer (React JS)',
      period: 'Dec 2022 – Mar 2025',
      achievements: [
        'Architected high-performance React applications, reducing initial load times by 30% through code-splitting and optimization.',
        'Developed complex data visualization dashboards for enterprise clients, enhancing decision-making capabilities by 25%.',
        'Collaborated with cross-functional teams to integrate RESTful APIs and state management (Redux/React Query) for seamless user experiences.',
        'Mentored junior developers on frontend best practices and maintained high code quality through rigorous peer reviews.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-base font-bold text-accent uppercase tracking-widest mb-4">Professional Track</h2>
          <h3 className="text-4xl font-bold text-slate-900">Experience that drives impact.</h3>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12 border-l-2 border-slate-100 pb-8 last:pb-0">
              <div className="absolute left-[-11px] top-0 w-5 h-5 bg-white border-2 border-accent rounded-full"></div>
              
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h4 className="text-2xl font-bold text-slate-900">{exp.role}</h4>
                  <p className="text-accent font-semibold">{exp.company}</p>
                </div>
                <div className="mt-2 md:mt-0 px-4 py-1.5 bg-slate-100 rounded-full text-sm font-medium text-slate-600">
                  {exp.period}
                </div>
              </div>

              <div className="grid md:grid-cols-1 gap-4">
                {exp.achievements.map((item, iIdx) => (
                  <div key={iIdx} className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-slate-600 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
