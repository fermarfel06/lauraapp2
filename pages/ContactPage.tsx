import React, { useState } from 'react';
import Button from '../components/Button';
import { SOCIAL_MEDIA_LINKS, COACH_PLACEHOLDER_NAME } from '../constants';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Placeholder for form submission logic
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); 
    // Could add a timer to reset isSubmitted
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="bg-[#FFFFFF] pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 lg:mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#0E0E0E] mb-4">
            Let's Start Your Journey
          </h1>
          <p className="text-lg text-[#434343] max-w-3xl mx-auto">
            Have questions or ready to begin your transformation? Reach out to {COACH_PLACEHOLDER_NAME}. I'm here to help you achieve your fitness and wellness goals.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact Form */}
          <div className="bg-[#F3ECFF] p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold text-[#0E0E0E] mb-6">Send a Message</h2>
            {isSubmitted && (
              <div className="mb-4 p-4 bg-green-100 text-green-700 border border-green-300 rounded-md">
                Thank you for your message! We'll be in touch soon.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#434343]">Full Name</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-4 py-2 border border-[#C6A664] rounded-md shadow-sm focus:ring-[#E8B040] focus:border-[#E8B040] text-[#434343]" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#434343]">Email Address</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-4 py-2 border border-[#C6A664] rounded-md shadow-sm focus:ring-[#E8B040] focus:border-[#E8B040] text-[#434343]" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#434343]">Phone (Optional)</label>
                <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="mt-1 block w-full px-4 py-2 border border-[#C6A664] rounded-md shadow-sm focus:ring-[#E8B040] focus:border-[#E8B040] text-[#434343]" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#434343]">Subject</label>
                <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} required className="mt-1 block w-full px-4 py-2 border border-[#C6A664] rounded-md shadow-sm focus:ring-[#E8B040] focus:border-[#E8B040] text-[#434343]" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#434343]">Message</label>
                <textarea name="message" id="message" rows={4} value={formData.message} onChange={handleChange} required className="mt-1 block w-full px-4 py-2 border border-[#C6A664] rounded-md shadow-sm focus:ring-[#E8B040] focus:border-[#E8B040] text-[#434343]"></textarea>
              </div>
              <div>
                <Button type="submit" variant="primary" className="w-full">Send Message</Button>
              </div>
            </form>
          </div>

          {/* Direct Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-[#0E0E0E] mb-3">Direct Contact</h3>
              <p className="text-[#434343] text-base mb-1">
                <strong className="text-[#C6A664]">Email:</strong> info@coachfitness.pro (Placeholder)
              </p>
              <p className="text-[#434343] text-base">
                <strong className="text-[#C6A664]">Phone:</strong> (123) 456-7890 (Placeholder)
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[#0E0E0E] mb-3">Office Hours (Placeholder)</h3>
              <p className="text-[#434343] text-base mb-1">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-[#434343] text-base">Saturday: 10:00 AM - 2:00 PM</p>
              <p className="text-[#434343] text-base">Sunday: Closed</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[#0E0E0E] mb-4">Connect on Social Media</h3>
              <div className="flex space-x-5">
                {SOCIAL_MEDIA_LINKS.map((social) => (
                  <a 
                    key={social.name} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="text-[#434343] hover:text-[#E8B040] transition-colors duration-300"
                  >
                    {React.cloneElement(social.icon, { className: "w-8 h-8" })}
                  </a>
                ))}
              </div>
            </div>
             {/* Optional Map Placeholder */}
            <div>
                <h3 className="text-2xl font-semibold text-[#0E0E0E] mb-3">Location (If Applicable)</h3>
                <p className="text-[#434343] text-base mb-2">123 Fitness Ave, Wellness City, ST 98765</p>
                <div className="aspect-w-16 aspect-h-9 bg-gray-300 rounded-md shadow-md flex items-center justify-center text-[#434343]">
                    Map Placeholder (e.g., embedded Google Map)
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
