
import React, { useState } from 'react';

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
}

const slides: Slide[] = [
  {
    id: 1,
    category: 'Finance & Strategy',
    title: 'Portfolio Management Challenge',
    description: 'Built data-driven investment dashboards and performed portfolio analysis in a competitive learning environment, focusing on risk mitigation and alpha generation.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 2,
    category: 'Engineering Impact',
    title: 'Live Frontend Project Delivery',
    description: 'Delivered production-ready UI modules for healthcare and analytics platforms using React JS, ensuring 99.9% uptime and high user accessibility.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop'
  },
  {
    id: 3,
    category: 'Artificial Intelligence',
    title: 'Microsoft AI Fluency',
    description: 'Gained hands-on understanding of AI concepts, prompt engineering, and real-world business applications of generative models.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 4,
    category: 'Regulatory Foundations',
    title: 'SEBI Financial Literacy',
    description: 'Strengthened foundations in financial markets, equity instruments, and regulatory frameworks through intensive SEBI-certified training.',
    image: 'https://images.unsplash.com/photo-1611974714851-eb605161882b?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 5,
    category: 'Data Science',
    title: 'Machine Learning Projects',
    description: 'Developed predictive models including dementia risk analysis and crop yield forecasting using Python and advanced data visualization techniques.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
  }
];

const AchievementsSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section id="achievements" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-accent font-black uppercase tracking-[0.2em] text-xs mb-6">Milestones</h2>
          <h3 className="text-4xl md:text-5xl font-black text-slate-900 leading-none tracking-tighter">
            Achievements & <span className="text-slate-400 italic">Strategic Highlights.</span>
          </h3>
        </div>

        <div className="relative group">
          {/* Main Slider Container */}
          <div className="relative min-h-[500px] md:min-h-[400px] bg-[#f8fafc] rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl">
            <div 
              className="absolute inset-0 transition-transform duration-700 ease-in-out flex"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="min-w-full h-full grid lg:grid-cols-2">
                  {/* Image Part */}
                  <div className="relative h-64 lg:h-full overflow-hidden">
                    <img 
                      src={slide.image} 
                      alt={slide.title}
                      className={`w-full h-full object-cover transition-transform duration-1000 ${current === slide.id - 1 ? 'scale-105' : 'scale-110'} grayscale hover:grayscale-0`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                  </div>

                  {/* Text Part */}
                  <div className="p-8 md:p-16 flex flex-col justify-center bg-white lg:bg-transparent">
                    <span className="text-[10px] font-black text-accent uppercase tracking-[0.3em] mb-4 inline-block">
                      {slide.category}
                    </span>
                    <h4 className={`text-3xl md:text-4xl font-black text-slate-900 mb-6 tracking-tighter transition-all duration-700 delay-100 ${current === slide.id - 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                      {slide.title}
                    </h4>
                    <p className={`text-lg text-slate-500 leading-relaxed font-medium transition-all duration-700 delay-200 ${current === slide.id - 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                      {slide.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Navigation Arrows */}
            <div className="hidden md:flex absolute bottom-8 right-8 space-x-4 z-30">
              <button 
                onClick={prevSlide}
                className="w-12 h-12 rounded-full border border-slate-200 bg-white/80 backdrop-blur flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all shadow-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button 
                onClick={nextSlide}
                className="w-12 h-12 rounded-full border border-slate-200 bg-white/80 backdrop-blur flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all shadow-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-10 space-x-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`transition-all duration-500 rounded-full h-2 ${current === idx ? 'w-12 bg-accent' : 'w-2 bg-slate-200 hover:bg-slate-300'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSlider;
