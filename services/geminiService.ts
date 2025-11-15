
import { GoogleGenAI, Type } from "@google/genai";
import { Car } from '../types';

if (!process.env.API_KEY) {
  console.warn("API_KEY environment variable not set. Using a mock response.");
}

// Ensure API_KEY is defined, even if it's an empty string, to prevent crashes.
const apiKey = process.env.API_KEY || "";
const ai = new GoogleGenAI({ apiKey });

interface TripSuggestionResponse {
    recommendedCarId: number;
    reasoning: string;
    tripTitle: string;
    tripPlan: string;
}

export const getTripSuggestion = async (prompt: string, cars: Car[]): Promise<TripSuggestionResponse> => {
    if (!apiKey) {
      // Mock response for development when API key is not available
      return new Promise(resolve => setTimeout(() => resolve({
          recommendedCarId: cars[Math.floor(Math.random() * cars.length)].id,
          reasoning: "This car is recommended because it perfectly matches your trip's requirements for style and performance. (This is a mock response as no API key was provided).",
          tripTitle: "Mock Scenic Coastal Drive",
          tripPlan: "Start your journey in the morning and drive along the coast, stopping at scenic viewpoints. Enjoy a picnic lunch at a secluded beach and return by sunset."
      }), 1500));
    }

    const model = 'gemini-2.5-flash';

    const availableCars = cars.map(c => ({ id: c.id, name: c.name, type: c.type, seats: c.seats, fuel: c.fuel })).join(', ');
    const systemPrompt = `You are a helpful car rental assistant. Your goal is to recommend the best car for a user's trip and provide a brief, exciting trip plan.
    The available cars are: ${availableCars}.
    Analyze the user's request and choose the most suitable car from the list.
    Provide a concise reasoning for your choice.
    Create a catchy title for the trip.
    Outline a simple, one-paragraph trip plan.
    You MUST respond in the JSON format defined by the response schema.`;

    try {
        const response = await ai.models.generateContent({
            model: model,
            contents: `User request: "${prompt}"`,
            config: {
                systemInstruction: systemPrompt,
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        recommendedCarId: {
                            type: Type.NUMBER,
                            description: "The ID of the recommended car from the provided list.",
                        },
                        reasoning: {
                            type: Type.STRING,
                            description: "A brief explanation for why this car was chosen.",
                        },
                        tripTitle: {
                            type: Type.STRING,
                            description: "A catchy title for the suggested trip.",
                        },
                        tripPlan: {
                            type: Type.STRING,
                            description: "A short paragraph outlining the suggested trip plan.",
                        },
                    },
                    required: ["recommendedCarId", "reasoning", "tripTitle", "tripPlan"],
                }
            }
        });

        const jsonText = response.text.trim();
        const parsedResponse: TripSuggestionResponse = JSON.parse(jsonText);
        
        // Validate that the recommended car exists
        const carExists = cars.some(car => car.id === parsedResponse.recommendedCarId);
        if(!carExists) {
            // Fallback if the model hallucinates an ID
            console.warn("Gemini recommended a car ID that does not exist. Falling back to a random car.");
            return {
                ...parsedResponse,
                recommendedCarId: cars[0].id,
                reasoning: `The AI suggested a great trip, but recommended a car not in our fleet. We've substituted the ${cars[0].name}, which is also an excellent choice. Original reasoning: ${parsedResponse.reasoning}`
            }
        }
        
        return parsedResponse;
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        throw new Error("Failed to get trip suggestion. Please try again.");
    }
};
