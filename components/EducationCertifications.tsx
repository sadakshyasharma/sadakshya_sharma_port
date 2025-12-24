
import React from 'react';

const EducationCertifications: React.FC = () => {
  const education = [
    {
      degree: 'MBA (Finance & FinTech)',
      institution: 'Ongoing Pursuance',
      period: 'Expected 2027',
      focus: 'Focus on Global Markets, FinTech Ecosystems, and Strategic Management.'
    },
    {
      degree: 'B.Tech in Computer Science',
      institution: 'University of Engineering',
      period: '2018 - 2022',
      focus: 'Strong foundations in Data Structures, Algorithms, and Software Engineering.'
    }
  ];

  const certs = [
    { name: 'AI Fluency', provider: 'Microsoft', year: '2024' },
    { name: 'Financial Literacy', provider: 'SEBI (Certified)', year: '2023' },
    { name: 'React Advanced Patterns', provider: 'Meta/Coursera', year: '2022' }
  ];

  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-base font-bold text-accent uppercase tracking-widest mb-4">Foundation</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-12">Academic Excellence.</h3>
            
            <div className="space-y-8">
              {education.map((edu, idx) => (
                <div key={idx} className="p-8 border border-slate-100 rounded-3xl hover:bg-slate-50 transition-colors">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-slate-900">{edu.degree}</h4>
                      <p className="text-slate-500 font-medium">{edu.institution}</p>
                    </div>
                    <span className="text-sm font-bold text-accent">{edu.period}</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{edu.focus}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-base font-bold text-accent uppercase tracking-widest mb-4">Endorsements</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-12">Certifications.</h3>
            
            <div className="space-y-4">
              {certs.map((cert, idx) => (
                <div key={idx} className="flex items-center justify-between p-5 bg-[#fcfcfc] border border-slate-100 rounded-2xl">
                  <div>
                    <p className="font-bold text-slate-900">{cert.name}</p>
                    <p className="text-sm text-slate-500">{cert.provider}</p>
                  </div>
                  <span className="text-xs font-bold text-slate-400">{cert.year}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-accent rounded-3xl text-white">
              <h5 className="font-bold mb-2">Growth Mindset</h5>
              <p className="text-sm opacity-90">Constantly upskilling to stay ahead in the rapidly evolving landscape of FinTech and AI.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationCertifications;
