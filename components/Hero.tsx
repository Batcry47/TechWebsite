import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, PenTool, Battery, Smartphone } from 'lucide-react';
import { Product } from '../types';

interface HeroProps {
  deals: Product[];
  onProductClick: (product: Product) => void;
  onScrollTo: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ deals, onProductClick, onScrollTo }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Combine a service slide + deal slides
  const slides = [
    { type: 'service' },
    ...deals.map(d => ({ type: 'deal', data: d }))
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="hero" className="relative h-[600px] md:h-[700px] bg-slate-50 overflow-hidden pt-20">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 w-2/3 h-full bg-tech-50 skew-x-12 translate-x-32 z-0" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-tech-100 rounded-full blur-3xl opacity-50 z-0" />

      <div className="container mx-auto px-4 h-full relative z-10 flex items-center">
        
        {/* Render Active Slide */}
        <div className="w-full h-full flex items-center transition-all duration-500 ease-out">
          {slides.map((slide, index) => (
            <div 
              key={index}
              className={`absolute inset-0 w-full h-full flex items-center justify-center transition-opacity duration-700 ${
                index === currentSlide ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              }`}
            >
              <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
                
                {/* Content Side */}
                <div className="text-left space-y-6 pt-16 md:pt-0">
                  {slide.type === 'service' ? (
                    <>
                      <div className="inline-block px-4 py-1 bg-tech-100 text-tech-600 rounded-full text-sm font-semibold mb-2">
                        Expert Repairs
                      </div>
                      <h2 className="text-4xl md:text-6xl font-bold text-dark-900 leading-tight">
                        We Bring Your <br/><span className="text-tech-600">Tech Back to Life</span>
                      </h2>
                      <p className="text-lg text-gray-600 max-w-lg">
                        From cracked screens to battery issues, our certified technicians use premium parts to fix your device fast.
                      </p>
                      <div className="flex gap-4 pt-4">
                        <button 
                          onClick={() => onScrollTo('services')}
                          className="px-8 py-3 bg-tech-600 text-white rounded-lg font-semibold hover:bg-tech-500 transition shadow-lg hover:shadow-tech-500/30 flex items-center gap-2"
                        >
                          Our Services <ArrowRight size={18} />
                        </button>
                      </div>
                      <div className="flex gap-8 pt-8 text-gray-500">
                        <div className="flex items-center gap-2"><Smartphone size={20} /><span>Screen</span></div>
                        <div className="flex items-center gap-2"><Battery size={20} /><span>Battery</span></div>
                        <div className="flex items-center gap-2"><PenTool size={20} /><span>Micro-solder</span></div>
                      </div>
                    </>
                  ) : (
                    // Deal Slide
                    <>
                      <div className="inline-block px-4 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold mb-2 animate-pulse">
                        Deal of the Week
                      </div>
                      <h2 className="text-4xl md:text-6xl font-bold text-dark-900 leading-tight">
                        {(slide as any).data.name}
                      </h2>
                      <p className="text-lg text-gray-600 max-w-lg line-clamp-3">
                        {(slide as any).data.description}
                      </p>
                      <div className="text-3xl font-bold text-tech-600">
                        ${(slide as any).data.price}
                      </div>
                      <div className="flex gap-4 pt-4">
                        <button 
                           onClick={() => onProductClick((slide as any).data)}
                           className="px-8 py-3 bg-dark-900 text-white rounded-lg font-semibold hover:bg-dark-800 transition shadow-lg flex items-center gap-2"
                        >
                          View Details <ArrowRight size={18} />
                        </button>
                      </div>
                    </>
                  )}
                </div>

                {/* Image Side */}
                <div className="flex justify-center md:justify-end relative">
                   {slide.type === 'service' ? (
                     <div className="relative">
                       <div className="absolute inset-0 bg-gradient-to-tr from-tech-500 to-purple-500 rounded-2xl rotate-6 opacity-20 blur-lg"></div>
                       <img 
                          src="https://picsum.photos/id/4/800/800" 
                          alt="Repair Service" 
                          className="relative rounded-2xl shadow-2xl w-[300px] h-[300px] md:w-[450px] md:h-[450px] object-cover"
                        />
                     </div>
                   ) : (
                    <div className="relative group cursor-pointer" onClick={() => onProductClick((slide as any).data)}>
                       <div className="absolute inset-0 bg-dark-900 rounded-2xl -rotate-3 opacity-10 blur-xl group-hover:opacity-20 transition-opacity"></div>
                       <img 
                          src={(slide as any).data.images[0]} 
                          alt={(slide as any).data.name} 
                          className="relative rounded-2xl shadow-2xl w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                     </div>
                   )}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'bg-tech-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
        
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 rounded-full shadow-lg hover:bg-white transition hidden md:block">
           <ChevronLeft size={24} />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/80 rounded-full shadow-lg hover:bg-white transition hidden md:block">
           <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;