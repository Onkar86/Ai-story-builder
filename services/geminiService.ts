
import { GoogleGenAI } from "@google/genai";
import { GenerationType, Genre, Language, LANGUAGES } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

function constructPrompt(prompt: string, type: GenerationType, genre: Genre, language: Language): string {
  const languageName = LANGUAGES.find(l => l.code === language)?.name || 'English';
  const suffix = `\n\nPlease write the entire response in the ${languageName} language.`;

  switch (type) {
    case GenerationType.PlotIdea:
      return `Generate a compelling plot idea in the ${genre} genre, based on the following keywords/concept: "${prompt}". Make it intriguing and provide a clear beginning, middle, and potential conflict.${suffix}`;
    case GenerationType.CharacterDescription:
      return `Create a detailed character description for a ${genre} story. The character concept is: "${prompt}". Include physical appearance, personality traits, motivations, and a key flaw.${suffix}`;
    case GenerationType.Dialogue:
      return `Write a short piece of dialogue in the ${genre} genre between two characters based on this situation: "${prompt}". Focus on natural-sounding speech that reveals character and advances the plot.${suffix}`;
    case GenerationType.ExpandText:
      return `Expand the following piece of writing into a more descriptive and engaging paragraph for a ${genre} story: "${prompt}". Enhance the atmosphere, imagery, and emotional impact.${suffix}`;
    case GenerationType.WorldBuilding:
        return `Generate a snippet of world-building for a ${genre} setting based on this idea: "${prompt}". Describe a unique location, custom, piece of lore, or technology.${suffix}`;
    default:
      return prompt + suffix;
  }
}

export const generateCreativeWriting = async (
  prompt: string,
  type: GenerationType,
  genre: Genre,
  language: Language,
): Promise<string> => {
  try {
    const fullPrompt = constructPrompt(prompt, type, genre, language);

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: fullPrompt,
        config: {
            temperature: 0.8,
            topP: 0.9,
            topK: 40,
        }
    });

    return response.text;
  } catch (error) {
    console.error("Error generating content from Gemini API:", error);
    throw new Error("Failed to get a response from the AI. Please check your connection or API key.");
  }
};
