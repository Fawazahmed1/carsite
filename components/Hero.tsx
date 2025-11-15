
import React from 'react';
import { CalendarIcon, LocationIcon, CarIcon } from './IconComponents';

export const Hero: React.FC = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-white bg-black">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(https://picsum.photos/seed/hero-car/1920/1080)` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent"></div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 tracking-tighter">
          Your Drive, <span className="text-brand-blue">Your Freedom</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-300 mb-8">
          Rent premium self-drive cars with a seamless booking experience. Unleash your journey.
        </p>
        
        <div className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-2xl max-w-4xl mx-auto">
          <form className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="text-left">
              <label className="flex items-center text-sm font-semibold mb-2 text-gray-300">
                <LocationIcon className="w-5 h-5 mr-2 text-brand-blue"/>
                Location
              </label>
              <input type="text" placeholder="City, Airport, or Address" className="w-full bg-brand-gray border border-brand-light-gray text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-brand-blue" />
            </div>
            <div className="text-left">
              <label className="flex items-center text-sm font-semibold mb-2 text-gray-300">
                <CarIcon className="w-5 h-5 mr-2 text-brand-blue"/>
                Car Type
              </label>
              <select className="w-full bg-brand-gray border border-brand-light-gray text-white rounded-lg p-3 appearance-none focus:outline-none focus:ring-2 focus:ring-brand-blue">
                <option>Any Type</option>
                <option>SUV</option>
                <option>Sedan</option>
                <option>Sports</option>
                <option>Luxury</option>
              </select>
            </div>
            <div className="text-left">
              <label className="flex items-center text-sm font-semibold mb-2 text-gray-300">
                <CalendarIcon className="w-5 h-5 mr-2 text-brand-blue"/>
                Dates
              </label>
              <input type="date" className="w-full bg-brand-gray border border-brand-light-gray text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-brand-blue" />
            </div>
            <button type="submit" className="w-full bg-brand-blue text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105">
              Search Cars
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
