
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedCars } from './components/FeaturedCars';
import { HowItWorks } from './components/HowItWorks';
import { Testimonials } from './components/Testimonials';
import { TripSuggester } from './components/TripSuggester';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { Car } from './types';
import { CARS } from './constants';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const handleBookNow = (car: Car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCar(null);
  };

  return (
    <div className="min-h-screen bg-brand-dark overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <FeaturedCars cars={CARS} onBookNow={handleBookNow} />
        <HowItWorks />
        <TripSuggester cars={CARS} onBookNow={handleBookNow} />
        <Testimonials />
      </main>
      <Footer />
      {isModalOpen && selectedCar && (
        <BookingModal car={selectedCar} onClose={closeModal} />
      )}
    </div>
  );
}

export default App;
