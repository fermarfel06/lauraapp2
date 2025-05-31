import React from 'react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-[#FFFFFF] p-6 rounded-lg shadow-lg h-full flex flex-col">
      <svg className="w-10 h-10 text-[#C6A664] mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
        <path d="M9.333 22.667C5.333 22.667 2 19.333 2 15.333S5.333 8 9.333 8c2.267 0 4.267.933 5.6 2.4L12.467 13C11.8 12.333 10.867 11.733 9.333 11.733c-2.067 0-3.733 1.667-3.733 3.733s1.533 3.6 3.733 3.6c2.4 0 4.267-1.867 4.267-5.067H14V8h-1.867C10.6 4.267 6.6 2 2.667 2S0 2.667 0 2.667v12.667C0 20.267 3.733 24 9.333 24s6.867-2.8 8.267-5.867L14.8 16.8C13.267 20.533 11.067 22.667 9.333 22.667zM25.333 22.667c-4 0-7.333-3.333-7.333-7.333S21.333 8 25.333 8c2.267 0 4.267.933 5.6 2.4L28.467 13c-.667-.667-1.6-1.267-3.133-1.267-2.067 0-3.733 1.667-3.733 3.733s1.533 3.6 3.733 3.6c2.4 0 4.267-1.867 4.267-5.067H30V8h-1.867C26.6 4.267 22.6 2 18.667 2S16 2.667 16 2.667v12.667c0 4.933 3.733 8.667 9.333 8.667s6.867-2.8 8.267-5.867L30.8 16.8C29.267 20.533 27.067 22.667 25.333 22.667z"></path>
      </svg>
      <p className="text-[#434343] italic mb-6 flex-grow">"{testimonial.quote}"</p>
      <div className="mt-auto">
        <p className="font-bold text-[#0E0E0E]">{testimonial.name}</p>
        {testimonial.role && <p className="text-sm text-[#C6A664]">{testimonial.role}</p>}
      </div>
    </div>
  );
};

export default TestimonialCard;
