import React from 'react';
import { Service } from '../types';
import Button from './Button';

interface ServiceCardProps {
  service: Service;
  detailed?: boolean; // For ServicesPage to show more details
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, detailed = false }) => {
  return (
    <div className="bg-[#FFFFFF] rounded-lg shadow-xl p-6 md:p-8 flex flex-col items-center text-center h-full transition-transform duration-300 hover:scale-105">
      {service.icon && !detailed && <div className="mb-4 p-3 rounded-full bg-[#F3ECFF]">{service.icon}</div>}
      {detailed && service.image && (
        <img src={service.image} alt={service.name} className="w-full h-48 object-cover rounded-md mb-6" />
      )}
      <h3 className="text-2xl font-bold text-[#0E0E0E] mb-3">{service.name}</h3>
      <p className={`text-[#434343] mb-6 ${detailed ? 'text-base' : 'text-sm'}`}>
        {detailed ? service.description : service.shortDescription}
      </p>
      <div className="mt-auto">
        <Button to={service.ctaLink} variant="secondary">
          {service.ctaText}
        </Button>
      </div>
    </div>
  );
};

export default ServiceCard;
