
export enum GenerationType {
  PlotIdea = 'Plot Idea',
  CharacterDescription = 'Character Description',
  Dialogue = 'Dialogue',
  ExpandText = 'Expand on This',
  WorldBuilding = 'World Building Snippet',
}

export enum Genre {
  Fantasy = 'Fantasy',
  SciFi = 'Science Fiction',
  Mystery = 'Mystery',
  Romance = 'Romance',
  Horror = 'Horror',
  Thriller = 'Thriller',
  Comedy = 'Comedy',
  Historical = 'Historical Fiction',
}

export type Language = 'en' | 'mr' | 'hi';

export const LANGUAGES: { code: Language; name: string; displayName: string }[] = [
  { code: 'en', name: 'English', displayName: 'English' },
  { code: 'mr', name: 'Marathi', displayName: 'मराठी' },
  { code: 'hi', name: 'Hindi', displayName: 'हिन्दी' },
];
