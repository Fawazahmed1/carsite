
import React from 'react';
import { Car } from '../types';
import { SeatIcon, TransmissionIcon, FuelIcon } from './IconComponents';

interface CarCardProps {
  car: Car;
  onBookNow: (car: Car) => void;
}

const CarSpec: React.FC<{ icon: React.ReactNode; label: string }> = ({ icon, label }) => (
    <div className="flex items-center space-x-2 text-gray-300">
        {icon}
        <span className="text-sm">{label}</span>
    </div>
);

export const CarCard: React.FC<CarCardProps> = ({ car, onBookNow }) => {
  return (
    <div className="bg-brand-gray rounded-2xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
      <div className="relative">
        <img src={car.imageUrl} alt={car.name} className="w-full h-56 object-cover" />
        <div className="absolute top-4 left-4 bg-brand-blue/80 text-white text-xs font-bold px-3 py-1 rounded-full">{car.type}</div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex-grow">
            <h3 className="text-2xl font-bold text-white mb-2">{car.name}</h3>
            <div className="flex justify-between items-center mb-4 text-gray-400">
                <CarSpec icon={<SeatIcon className="w-5 h-5 text-brand-blue" />} label={`${car.seats} Seats`} />
                <CarSpec icon={<TransmissionIcon className="w-5 h-5 text-brand-blue" />} label={car.transmission} />
                <CarSpec icon={<FuelIcon className="w-5 h-5 text-brand-blue" />} label={car.fuel} />
            </div>
        </div>
        <div className="border-t border-brand-light-gray my-4"></div>
        <div className="flex justify-between items-center mt-auto">
          <p className="text-xl font-extrabold text-white">
            ${car.pricePerDay}<span className="text-sm font-normal text-gray-400">/day</span>
          </p>
          <button 
            onClick={() => onBookNow(car)}
            className="bg-brand-blue text-white font-semibold py-2 px-5 rounded-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};
