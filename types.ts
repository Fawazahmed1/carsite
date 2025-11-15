
export interface Car {
  id: number;
  name: string;
  type: 'SUV' | 'Sedan' | 'Hatchback' | 'Luxury' | 'Sports';
  pricePerDay: number;
  seats: number;
  transmission: 'Automatic' | 'Manual';
  fuel: 'Gasoline' | 'Electric' | 'Hybrid';
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  quote: string;
  avatarUrl: string;
}
