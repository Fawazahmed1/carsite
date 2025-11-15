
import React, { useState } from 'react';
import { getTripSuggestion } from '../services/geminiService';
import { Car } from '../types';
import { CarCard } from './CarCard';

interface TripSuggesterProps {
    cars: Car[];
    onBookNow: (car: Car) => void;
}

export const TripSuggester: React.FC<TripSuggesterProps> = ({ cars, onBookNow }) => {
    const [prompt, setPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [suggestion, setSuggestion] = useState<{
        recommendedCar: Car;
        reasoning: string;
        tripTitle: string;
        tripPlan: string;
    } | null>(null);

    const handleSuggestion = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!prompt.trim()) return;

        setIsLoading(true);
        setError(null);
        setSuggestion(null);

        try {
            const result = await getTripSuggestion(prompt, cars);
            const recommendedCar = cars.find(c => c.id === result.recommendedCarId);

            if (recommendedCar) {
                setSuggestion({
                    recommendedCar,
                    reasoning: result.reasoning,
                    tripTitle: result.tripTitle,
                    tripPlan: result.tripPlan,
                });
            } else {
                setError("Could not find the recommended car.");
            }
        } catch (err) {
            setError((err as Error).message || "An unknown error occurred.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="trip-suggester" className="py-20 bg-brand-gray/50">
            <div className="container mx-auto px-4">
                <div className="bg-brand-gray p-8 rounded-2xl shadow-2xl max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Need a Trip Idea?</h2>
                    <p className="text-center text-gray-400 mb-8">Describe your ideal getaway, and our AI will suggest the perfect car and plan for you!</p>
                    
                    <form onSubmit={handleSuggestion} className="flex flex-col sm:flex-row gap-4 mb-8">
                        <input
                            type="text"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="e.g., 'A romantic weekend in the mountains'"
                            className="flex-grow bg-brand-dark border border-brand-light-gray text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-brand-blue"
                            disabled={isLoading}
                        />
                        <button
                            type="submit"
                            className="bg-brand-blue text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-80 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Thinking...' : 'Get Suggestion'}
                        </button>
                    </form>

                    {error && <p className="text-center text-red-400">{error}</p>}
                    
                    {suggestion && (
                        <div className="mt-12 animate-fade-in">
                            <h3 className="text-2xl font-bold text-center mb-2 text-brand-blue">{suggestion.tripTitle}</h3>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                                <div className="lg:order-2">
                                    <h4 className="font-semibold text-lg mb-2">Your Recommended Ride:</h4>
                                    <CarCard car={suggestion.recommendedCar} onBookNow={onBookNow} />
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold text-lg mb-2">Why this car?</h4>
                                        <p className="text-gray-300 bg-brand-dark/50 p-4 rounded-lg">{suggestion.reasoning}</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-lg mb-2">Your Trip Plan:</h4>
                                        <p className="text-gray-300 bg-brand-dark/50 p-4 rounded-lg">{suggestion.tripPlan}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};
