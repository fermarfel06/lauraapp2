import React from 'react';
import { ProgressEntry } from '../types';

interface ProgressCardProps {
  entry: ProgressEntry;
}

const ProgressCard: React.FC<ProgressCardProps> = ({ entry }) => {
  return (
    <div className="bg-[#FFFFFF] rounded-lg shadow-xl overflow-hidden group transition-all duration-300 ease-in-out hover:shadow-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative">
          <img 
            src={entry.beforeImage} 
            alt={`${entry.clientName || 'Client'} Before`} 
            className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-2 left-2 bg-[#E8B040] text-[#0E0E0E] px-3 py-1 text-sm font-semibold rounded">BEFORE</div>
        </div>
        <div className="relative">
          <img 
            src={entry.afterImage} 
            alt={`${entry.clientName || 'Client'} After`} 
            className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
          />
           <div className="absolute top-2 left-2 bg-[#E8B040] text-[#0E0E0E] px-3 py-1 text-sm font-semibold rounded">AFTER</div>
        </div>
      </div>
      <div className="p-6">
        {entry.clientName && <h3 className="text-xl font-bold text-[#0E0E0E] mb-2">{entry.clientName}</h3>}
        <p className="text-[#434343] text-sm">{entry.summary}</p>
      </div>
    </div>
  );
};

export default ProgressCard;
