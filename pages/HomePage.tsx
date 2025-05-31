import React from 'react';
import Carousel from '../components/Carousel';
import Button from '../components/Button';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import { HOME_CAROUSEL_SLIDES, SERVICES_DATA, TESTIMONIALS_DATA, COACH_PLACEHOLDER_NAME } from '../constants';

const HomePage: React.FC = () => {
  return (
    <div className="bg-[#F3ECFF]">
      {/* Hero Section */}
      <Carousel slides={HOME_CAROUSEL_SLIDES} />

      {/* Meet Your Coach Section */}
      <section className="py-16 lg:py-24 bg-[#FFFFFF]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0E0E0E] mb-6">
                Your Partner in Peak Performance, <span className="text-[#E8B040]">{COACH_PLACEHOLDER_NAME}</span>.
              </h2>
              <p className="text-[#434343] text-lg mb-6 leading-relaxed">
                With years of experience and a passion for transformative results, I'm dedicated to providing personalized coaching that empowers you to exceed your fitness and wellness goals. My approach combines scientific principles with tailored strategies to ensure sustainable success and a healthier, stronger you.
              </p>
              <p className="text-[#434343] text-lg mb-8 leading-relaxed">
                Let's embark on this journey together.
              </p>
              <Button to="/about" variant="primary">Learn More About {COACH_PLACEHOLDER_NAME}</Button>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://picsum.photos/seed/coachhome/500/500" 
                alt={`Coach ${COACH_PLACEHOLDER_NAME}`} 
                className="rounded-lg shadow-2xl w-full max-w-md object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 lg:py-24 bg-[#F3ECFF]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0E0E0E] text-center mb-4">Unlock Your Best Self</h2>
          <p className="text-lg text-[#434343] text-center mb-12 max-w-2xl mx-auto">
            Discover our range of services designed to cater to your unique fitness and nutrition needs.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.slice(0, 3).map((service) => ( // Show first 3 services
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button to="/services" variant="outline">Explore All Programs</Button>
          </div>
        </div>
      </section>

      {/* Testimonial Snippets Section */}
      <section className="py-16 lg:py-24 bg-[#0E0E0E] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-[#E8B040]">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS_DATA.slice(0,3).map((testimonial) => (
               <div key={testimonial.id} className="bg-[#434343] p-6 rounded-lg shadow-lg h-full flex flex-col">
                <svg className="w-10 h-10 text-[#C6A664] mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.333 22.667C5.333 22.667 2 19.333 2 15.333S5.333 8 9.333 8c2.267 0 4.267.933 5.6 2.4L12.467 13C11.8 12.333 10.867 11.733 9.333 11.733c-2.067 0-3.733 1.667-3.733 3.733s1.533 3.6 3.733 3.6c2.4 0 4.267-1.867 4.267-5.067H14V8h-1.867C10.6 4.267 6.6 2 2.667 2S0 2.667 0 2.667v12.667C0 20.267 3.733 24 9.333 24s6.867-2.8 8.267-5.867L14.8 16.8C13.267 20.533 11.067 22.667 9.333 22.667zM25.333 22.667c-4 0-7.333-3.333-7.333-7.333S21.333 8 25.333 8c2.267 0 4.267.933 5.6 2.4L28.467 13c-.667-.667-1.6-1.267-3.133-1.267-2.067 0-3.733 1.667-3.733 3.733s1.533 3.6 3.733 3.6c2.4 0 4.267-1.867 4.267-5.067H30V8h-1.867C26.6 4.267 22.6 2 18.667 2S16 2.667 16 2.667v12.667c0 4.933 3.733 8.667 9.333 8.667s6.867-2.8 8.267-5.867L30.8 16.8C29.267 20.533 27.067 22.667 25.333 22.667z"></path>
                </svg>
                <p className="text-[#F3ECFF] italic mb-6 flex-grow">"{testimonial.quote}"</p>
                <div className="mt-auto">
                  <p className="font-bold text-white">{testimonial.name}</p>
                  {testimonial.role && <p className="text-sm text-[#C6A664]">{testimonial.role}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet/Minor CTA Section */}
      <section className="py-16 lg:py-24 bg-[#FFFFFF]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#0E0E0E] mb-6">Ready to Take the Next Step?</h2>
          <p className="text-[#434343] text-lg mb-8 max-w-xl mx-auto">
            Join our newsletter for exclusive fitness tips, nutrition advice, and special offers. Or, schedule your free consultation today!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-6 py-3 rounded-md border border-[#C6A664] focus:ring-[#E8B040] focus:border-[#E8B040] w-full sm:w-auto max-w-sm text-[#434343]"
            />
            <Button type="button" variant="secondary">Subscribe</Button>
          </div>
           <p className="text-[#434343] text-sm mt-8">Or</p>
           <Button to="/contact" variant="primary" className="mt-4">Book a Free Consultation</Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
