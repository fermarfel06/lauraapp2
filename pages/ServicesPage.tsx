import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { SERVICES_DATA } from '../constants';
import Button from '../components/Button';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-[#F3ECFF] pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 lg:mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#0E0E0E] mb-4">
            Our Signature Programs
          </h1>
          <p className="text-lg text-[#434343] max-w-3xl mx-auto">
            Tailored fitness and nutrition solutions designed to help you achieve your specific goals. We focus on sustainable results and a holistic approach to well-being.
          </p>
        </header>

        <div className="space-y-16">
          {SERVICES_DATA.map((service, index) => (
            <section key={service.id} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 lg:gap-16 p-6 md:p-8 bg-white rounded-xl shadow-xl`}>
              <div className="md:w-1/2">
                <img 
                  src={service.image || `https://picsum.photos/seed/${service.id}/600/400`} 
                  alt={service.name} 
                  className="w-full h-auto max-h-[400px] object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-1/2 text-center md:text-left">
                <h2 className="text-3xl font-bold text-[#0E0E0E] mb-4">{service.name}</h2>
                <p className="text-[#434343] text-base mb-6 leading-relaxed">{service.description}</p>
                <ul className="text-left text-[#434343] space-y-2 mb-6 list-disc list-inside ml-4">
                    <li>Personalized approach for maximum effectiveness.</li>
                    <li>Focus on long-term sustainable habits.</li>
                    <li>Expert guidance and continuous support.</li>
                    <li>Suitable for all experience levels.</li>
                </ul>
                <Button to={service.ctaLink} variant="primary">{service.ctaText}</Button>
              </div>
            </section>
          ))}
        </div>
        
        <section className="mt-16 lg:mt-24 text-center bg-[#0E0E0E] p-10 md:p-16 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold text-[#E8B040] mb-6">Ready to Start Your Transformation?</h2>
            <p className="text-[#F3ECFF] text-lg mb-8 max-w-xl mx-auto">
                No matter your current fitness level or goals, we have a program that can be tailored for you. Let's discuss how we can help you achieve the results you desire.
            </p>
            <Button to="/contact" variant="primary" className="text-lg px-10 py-4">
                Get In Touch
            </Button>
        </section>

      </div>
    </div>
  );
};

export default ServicesPage;
