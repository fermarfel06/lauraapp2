import React from 'react';
import Button from '../components/Button';
import { COACH_PLACEHOLDER_NAME } from '../constants';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-[#FFFFFF] pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 lg:mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#0E0E0E] mb-4">
            About <span className="text-[#E8B040]">{COACH_PLACEHOLDER_NAME}</span>
          </h1>
          <p className="text-lg text-[#434343] max-w-3xl mx-auto">
            The philosophy behind your success: dedication, expertise, and a personalized approach to every client.
          </p>
        </header>

        <div className="grid md:grid-cols-5 gap-10 lg:gap-16 items-start">
          <div className="md:col-span-2">
            <img 
              src="https://picsum.photos/seed/coachabout1/600/750" 
              alt={`Coach ${COACH_PLACEHOLDER_NAME}`} 
              className="rounded-lg shadow-2xl w-full object-cover aspect-[4/5]"
            />
          </div>

          <div className="md:col-span-3">
            <h2 className="text-3xl font-semibold text-[#0E0E0E] mb-6">My Journey & Philosophy</h2>
            <p className="text-[#434343] text-base mb-4 leading-relaxed">
              Hello! I'm {COACH_PLACEHOLDER_NAME}, and my passion is helping individuals like you unlock their full potential through fitness and nutrition. My journey into this field began with a personal transformation that taught me the power of consistent effort, smart training, and nourishing the body correctly. This firsthand experience ignited a desire to share this knowledge and empower others.
            </p>
            <p className="text-[#434343] text-base mb-4 leading-relaxed">
              My coaching philosophy is built on a foundation of science, personalization, and unwavering support. I believe there's no one-size-fits-all solution. That's why I take the time to understand your unique goals, lifestyle, and challenges to create a truly bespoke plan. Whether you're aiming for weight loss, muscle gain, improved athletic performance, or simply a healthier life, I'm here to guide you every step of the way.
            </p>
            <p className="text-[#434343] text-base mb-6 leading-relaxed">
              I am committed to continuous learning and staying updated with the latest research in exercise science and nutrition to provide you with the most effective strategies. Your success is my success, and I'm excited to be a part of your transformative journey.
            </p>

            <h3 className="text-2xl font-semibold text-[#0E0E0E] mb-4 mt-8">Qualifications & Expertise</h3>
            <ul className="list-disc list-inside text-[#434343] space-y-2 mb-6 pl-4">
              <li>Certified Personal Trainer (CPT) - [Placeholder Awarding Body, e.g., NASM]</li>
              <li>Certified Nutrition Coach (CNC) - [Placeholder Awarding Body, e.g., Precision Nutrition]</li>
              <li>Specialization in Strength and Conditioning - [Placeholder]</li>
              <li>Years of Experience: 10+ (Placeholder)</li>
              <li>Ongoing Professional Development in [Placeholder Area 1, Area 2]</li>
            </ul>
            
            <div className="flex flex-wrap gap-4 mt-8">
               <img src="https://picsum.photos/seed/coachabout2/300/200" alt="Coach demonstrating exercise" className="rounded-md shadow-lg w-full sm:w-1/2 lg:w-[calc(50%-0.5rem)] object-cover"/>
               <img src="https://picsum.photos/seed/coachabout3/300/200" alt="Coach with client" className="rounded-md shadow-lg w-full sm:w-1/2 lg:w-[calc(50%-0.5rem)] object-cover"/>
            </div>
          </div>
        </div>

        <section className="mt-16 lg:mt-24 bg-[#F3ECFF] p-10 md:p-16 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold text-[#0E0E0E] text-center mb-6">My Mission & Values</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="text-xl font-semibold text-[#E8B040] mb-2">Empowerment</h4>
              <p className="text-[#434343] text-sm">To provide you with the knowledge and tools to take control of your health and fitness journey for life.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-[#E8B040] mb-2">Personalization</h4>
              <p className="text-[#434343] text-sm">To create tailored programs that respect your individuality and maximize your potential for success.</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-[#E8B040] mb-2">Integrity</h4>
              <p className="text-[#434343] text-sm">To offer honest, evidence-based guidance and unwavering support with complete transparency.</p>
            </div>
          </div>
          <div className="text-center mt-10">
            <Button to="/contact" variant="primary" className="text-lg">
              Ready to Discuss Your Goals?
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
