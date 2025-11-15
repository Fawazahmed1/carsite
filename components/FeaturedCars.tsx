
import React from 'react';
import { Car } from '../types';
import { CarCard } from './CarCard';

interface FeaturedCarsProps {
  cars: Car[];
  onBookNow: (car: Car) => void;
}

export const FeaturedCars: React.FC<FeaturedCarsProps> = ({ cars, onBookNow }) => {
  return (
    <section id="featured-cars" className="py-20 bg-brand-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Featured Fleet</h2>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
          Discover a range of cars tailored to your needs. From luxury sedans for business trips to rugged SUVs for adventure.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map(car => (
            <CarCard key={car.id} car={car} onBookNow={onBookNow} />
          ))}
        </div>
      </div>
    </section>
  );
};
