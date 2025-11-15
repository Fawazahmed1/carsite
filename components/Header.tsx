
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-10 p-4 sm:p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-wider">
          <span className="text-brand-blue">Luxe</span>Drive
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Home</a>
          <a href="#featured-cars" className="text-gray-300 hover:text-white transition-colors duration-300">Cars</a>
          <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors duration-300">How It Works</a>
          <a href="#testimonials" className="text-gray-300 hover:text-white transition-colors duration-300">Testimonials</a>
        </nav>
        <button className="hidden sm:block bg-brand-blue text-white font-semibold py-2 px-6 rounded-lg hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105">
          Sign In
        </button>
      </div>
    </header>
  );
};
