import React from 'react';
import { Link } from 'react-router-dom';
import { FOOTER_LINKS, SOCIAL_MEDIA_LINKS, APP_NAME } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0E0E0E] text-[#F3ECFF] py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-[#E8B040] mb-4">{APP_NAME}</h3>
            <p className="text-sm text-[#F3ECFF]/80">
              Your partner in achieving peak fitness and optimal health. Personalized plans for lasting results.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-[#C6A664] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm hover:text-[#E8B040] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-[#C6A664] mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              {SOCIAL_MEDIA_LINKS.map((social) => (
                <a 
                  key={social.name} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-[#F3ECFF] hover:text-[#E8B040] transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-sm text-[#F3ECFF]/80">Email: info@coachfitness.pro</p>
            <p className="text-sm text-[#F3ECFF]/80">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-[#434343]">
          <p className="text-center text-sm text-[#F3ECFF]/70">
            &copy; {new Date().getFullYear()} {APP_NAME}. All Rights Reserved. Placeholder.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
