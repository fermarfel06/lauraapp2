import React, { useState, useEffect, useCallback } from 'react';
import { CarouselSlide } from '../types';
import Button from './Button';

interface CarouselProps {
  slides: CarouselSlide[];
  autoplayInterval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ slides, autoplayInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (slides.length === 0) return; // Don't start timer if no slides
    const timer = setTimeout(goToNext, autoplayInterval);
    return () => clearTimeout(timer);
  }, [currentIndex, autoplayInterval, goToNext, slides.length]); // Added slides.length

  if (!slides || slides.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src={slide.image} 
            alt={slide.headline} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-[#0E0E0E] bg-opacity-50 flex flex-col items-center justify-center text-center p-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fadeInUp">
              {slide.headline}
            </h1>
            <div className="animate-fadeInUp animation-delay-300">
              <Button to={slide.ctaLink} variant="primary" className="text-lg px-10 py-4">
                {slide.ctaText}
              </Button>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-[#E8B040]' : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;