
import React from 'react';

interface StepProps {
    number: string;
    title: string;
    description: string;
}

const StepCard: React.FC<StepProps> = ({ number, title, description }) => (
    <div className="text-center p-6 bg-brand-gray rounded-2xl transform hover:scale-105 transition-transform duration-300">
        <div className="mx-auto mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-brand-blue text-brand-dark font-extrabold text-2xl">
            {number}
        </div>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-brand-dark/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Get On The Road in 3 Easy Steps</h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
          Renting a car has never been this simple. Follow our straightforward process and start your adventure.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StepCard
            number="01"
            title="Choose Your Car"
            description="Browse our diverse fleet and select the perfect vehicle that fits your style and needs for the journey ahead."
          />
          <StepCard
            number="02"
            title="Book & Confirm"
            description="Select your dates, add any extras, and confirm your booking instantly with our secure online payment system."
          />
          <StepCard
            number="03"
            title="Pick Up & Drive"
            description="Head to your selected location, pick up the keys, and enjoy the freedom of the open road. It's that easy!"
          />
        </div>
      </div>
    </section>
  );
};
