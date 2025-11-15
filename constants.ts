
import { Car, Testimonial } from './types';

export const CARS: Car[] = [
  {
    id: 1,
    name: 'Tesla Model Y',
    type: 'SUV',
    pricePerDay: 150,
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Electric',
    imageUrl: 'https://picsum.photos/seed/tesla/800/600',
  },
  {
    id: 2,
    name: 'BMW 3 Series',
    type: 'Sedan',
    pricePerDay: 120,
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Gasoline',
    imageUrl: 'https://picsum.photos/seed/bmw/800/600',
  },
  {
    id: 3,
    name: 'Porsche 911',
    type: 'Sports',
    pricePerDay: 350,
    seats: 2,
    transmission: 'Automatic',
    fuel: 'Gasoline',
    imageUrl: 'https://picsum.photos/seed/porsche/800/600',
  },
  {
    id: 4,
    name: 'Audi Q5',
    type: 'SUV',
    pricePerDay: 130,
    seats: 5,
    transmission: 'Automatic',
    fuel: 'Hybrid',
    imageUrl: 'https://picsum.photos/seed/audi/800/600',
  },
    {
    id: 5,
    name: 'VW Golf GTI',
    type: 'Hatchback',
    pricePerDay: 90,
    seats: 5,
    transmission: 'Manual',
    fuel: 'Gasoline',
    imageUrl: 'https://picsum.photos/seed/vw/800/600',
  },
  {
    id: 6,
    name: 'Rolls-Royce Ghost',
    type: 'Luxury',
    pricePerDay: 800,
    seats: 4,
    transmission: 'Automatic',
    fuel: 'Gasoline',
    imageUrl: 'https://picsum.photos/seed/rollsroyce/800/600',
  }
];

export const TESTIMONIALS: Testimonial[] = [
    {
        id: 1,
        name: 'Sarah J.',
        location: 'New York, USA',
        quote: 'The booking process was incredibly smooth and the car was in pristine condition. LuxeDrive made our weekend getaway unforgettable!',
        avatarUrl: 'https://picsum.photos/seed/avatar1/100/100',
    },
    {
        id: 2,
        name: 'David L.',
        location: 'London, UK',
        quote: 'I rented a sports car for a special occasion and it exceeded all my expectations. The team was professional and helpful. Highly recommended.',
        avatarUrl: 'https://picsum.photos/seed/avatar2/100/100',
    },
    {
        id: 3,
        name: 'Emily C.',
        location: 'Sydney, Australia',
        quote: "Absolutely loved the AI trip suggestion feature! It recommended the perfect car and a scenic route we wouldn't have found otherwise. 10/10!",
        avatarUrl: 'https://picsum.photos/seed/avatar3/100/100',
    }
]
