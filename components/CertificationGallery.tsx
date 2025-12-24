
import React, { useState } from 'react';

interface GalleryItem {
  id: number;
  title: string;
  subtitle: string;
  images: string[];
}

const galleryData: GalleryItem[] = [
  {
    id: 1,
    title: "Engineering Excellence",
    subtitle: "React Advanced Patterns & B.Tech Foundations",
    images: [
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: 2,
    title: "Strategic AI & ML",
    subtitle: "Microsoft AI Fluency & Predictive Modeling",
    images: [
      "https://images.unsplash.com/photo-1620712943543-bcc4628c9757?q=80&w=1964&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: 3,
    title: "Finance & FinTech Core",
    subtitle: "SEBI Certification & MBA Financial Strategy",
    images: [
      "https://images.unsplash.com/photo-1611974714851-eb605161882b?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1454165833767-027ffea10c4a?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop"
    ]
  }
];

const CertificationGallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % galleryData.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + galleryData.length) % galleryData.length);

  return (
    <section id="cert-gallery" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 top-0 w-full h-full opacity-[0.03] pointer-events-none select-none font-black text-[20vw] leading-none text-slate-900 -translate-x-1/4 -translate-y-1/4">
        CREDENTIALS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="reveal-up">
            <h2 className="text-accent font-black uppercase tracking-[0.3em] text-xs mb-6">Validation</h2>
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 leading-[0.9] tracking-tighter">
              Professional <br />
              <span className="text-slate-400 italic">Ecosystems.</span>
            </h3>
          </div>
          
          <div className="flex space-x-4 mt-8 md:mt-0">
            <button onClick={prev} className="w-14 h-14 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all shadow-sm active:scale-95">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={next} className="w-14 h-14 rounded-full border border-slate-200 bg-white flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all shadow-sm active:scale-95">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>

        <div className="relative overflow-hidden min-h-[600px] rounded-[3rem]">
          <div 
            className="flex transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {galleryData.map((item, idx) => (
              <div key={item.id} className="min-w-full px-2">
                <div className="grid grid-cols-12 grid-rows-6 gap-4 h-[600px]">
                  {/* Image 1: Large Feature */}
                  <div className="col-span-12 md:col-span-7 row-span-4 md:row-span-6 relative group overflow-hidden rounded-[2.5rem] shadow-2xl">
                    <img 
                      src={item.images[0]} 
                      alt={item.title} 
                      className={`w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ${activeIndex === idx ? 'scale-100' : 'scale-110'}`}
                    />
                    <div className="absolute bottom-0 left-0 p-10 bg-gradient-to-t from-black/80 to-transparent w-full">
                       <h4 className="text-3xl font-black text-white tracking-tighter mb-2">{item.title}</h4>
                       <p className="text-white/70 font-medium text-sm tracking-wide">{item.subtitle}</p>
                    </div>
                  </div>

                  {/* Image 2: Top Right */}
                  <div className="col-span-6 md:col-span-5 row-span-2 md:row-span-3 relative group overflow-hidden rounded-[2.5rem] shadow-xl">
                    <img 
                      src={item.images[1]} 
                      alt="Detail 1" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-colors"></div>
                  </div>

                  {/* Image 3: Bottom Right */}
                  <div className="col-span-6 md:col-span-5 row-span-2 md:row-span-3 relative group overflow-hidden rounded-[2.5rem] shadow-xl">
                    <img 
                      src={item.images[2]} 
                      alt="Detail 2" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-12 w-full h-1 bg-slate-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-accent transition-all duration-700 ease-out"
            style={{ width: `${((activeIndex + 1) / galleryData.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default CertificationGallery;
