
import React from 'react';
import { Car } from '../types';

interface BookingModalProps {
  car: Car;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ car, onClose }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 px-4"
      onClick={onClose}
    >
      <div 
        className="bg-brand-gray rounded-2xl shadow-xl w-full max-w-lg p-8 relative transform transition-all animate-fade-in-up"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-3xl font-bold text-white mb-4">Confirm Your Booking</h2>
        <p className="text-gray-400 mb-6">You've chosen the <span className="font-semibold text-brand-blue">{car.name}</span>. Please review the details below.</p>

        <div className="space-y-4 mb-8">
            <div className="flex justify-between items-center bg-brand-dark p-4 rounded-lg">
                <span className="font-semibold text-gray-300">Vehicle</span>
                <span className="text-white font-bold">{car.name} ({car.type})</span>
            </div>
            <div className="flex justify-between items-center bg-brand-dark p-4 rounded-lg">
                <span className="font-semibold text-gray-300">Price per day</span>
                <span className="text-white font-bold">${car.pricePerDay}</span>
            </div>
            <div className="flex justify-between items-center bg-brand-dark p-4 rounded-lg">
                <span className="font-semibold text-gray-300">Rental Period (Example)</span>
                <span className="text-white font-bold">3 Days</span>
            </div>
            <div className="border-t border-brand-light-gray my-4"></div>
            <div className="flex justify-between items-center p-4 rounded-lg">
                <span className="font-semibold text-lg text-white">Estimated Total</span>
                <span className="text-brand-blue font-extrabold text-2xl">${car.pricePerDay * 3}</span>
            </div>
        </div>
        
        <button className="w-full bg-brand-blue text-white font-bold py-4 px-6 rounded-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105">
          Complete Booking
        </button>
      </div>
    </div>
  );
};
