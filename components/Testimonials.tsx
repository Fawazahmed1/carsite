
import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Testimonial } from '../types';

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-brand-gray p-8 rounded-2xl shadow-lg h-full flex flex-col">
        <p className="text-gray-300 mb-6 flex-grow">"{testimonial.quote}"</p>
        <div className="flex items-center mt-auto">
            <img src={testimonial.avatarUrl} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4 border-2 border-brand-blue" />
            <div>
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.location}</p>
            </div>
        </div>
    </div>
);

export const Testimonials: React.FC = () => {
    return (
        <section id="testimonials" className="py-20 bg-brand-dark">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">What Our Renters Say</h2>
                <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
                    We pride ourselves on providing an exceptional service. Here's what our customers think about their experiences.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {TESTIMONIALS.map(testimonial => (
                        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
}
