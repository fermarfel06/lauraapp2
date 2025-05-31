import React from 'react';
import ProgressCard from '../components/ProgressCard';
import Button from '../components/Button';
import { PROGRESS_ENTRIES_DATA } from '../constants';

const ProgressPage: React.FC = () => {
  return (
    <div className="bg-[#F3ECFF] pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 lg:mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#0E0E0E] mb-4">
            Real Results: Client Transformations
          </h1>
          <p className="text-lg text-[#434343] max-w-3xl mx-auto">
            Witness the dedication, hard work, and incredible progress of our clients. These transformations are a testament to what's possible with personalized coaching and commitment.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {PROGRESS_ENTRIES_DATA.map((entry) => (
            <ProgressCard key={entry.id} entry={entry} />
          ))}
        </div>

        {PROGRESS_ENTRIES_DATA.length === 0 && (
          <p className="text-center text-[#434343] text-xl mt-12">
            More success stories coming soon! Be the first to feature here.
          </p>
        )}

        <section className="mt-16 lg:mt-24 text-center bg-[#FFFFFF] p-10 md:p-16 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold text-[#0E0E0E] mb-6">Ready for Your Own Transformation?</h2>
            <p className="text-[#434343] text-lg mb-8 max-w-xl mx-auto">
                Inspired by these results? Your success story could be next. Take the first step towards a healthier, stronger you.
            </p>
            <Button to="/contact" variant="primary" className="text-lg px-10 py-4">
                Start Your Success Story
            </Button>
        </section>
      </div>
    </div>
  );
};

export default ProgressPage;
