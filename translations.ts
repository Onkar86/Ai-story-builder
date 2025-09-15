
import { Language, GenerationType, Genre } from './types';

type TranslationStore = {
  [key: string]: { [lang in Language]: string };
};

export const translations: TranslationStore = {
  appTitle: {
    en: 'AI Story Assistant',
    mr: 'एआय कथा सहाय्यक',
    hi: 'एआई कहानी सहायक',
  },
  appSubtitle: {
    en: 'Unleash your creativity and conquer writer\'s block.',
    mr: 'तुमची सर्जनशीलता मुक्त करा आणि लेखकाच्या अडथळ्यावर विजय मिळवा.',
    hi: 'अपनी रचनात्मकता को उजागर करें और लेखक की रुकावट पर विजय प्राप्त करें।',
  },
  craftYourPrompt: {
    en: 'Craft Your Prompt',
    mr: 'तुमचा प्रॉम्प्ट तयार करा',
    hi: 'अपना प्रॉम्प्ट तैयार करें',
  },
  wantToGenerate: {
    en: 'I want to generate a...',
    mr: 'मला तयार करायचे आहे...',
    hi: 'मैं उत्पन्न करना चाहता हूं...',
  },
  inTheGenreOf: {
    en: 'In the genre of...',
    mr: 'या प्रकारात...',
    hi: 'इस शैली में...',
  },
  yourIdea: {
    en: 'Your idea, keywords, or text...',
    mr: 'तुमची कल्पना, कीवर्ड किंवा मजकूर...',
    hi: 'आपका विचार, कीवर्ड, या टेक्स्ट...',
  },
  promptPlaceholder: {
    en: 'e.g., a haunted spaceship, a detective who talks to ghosts, or a line of dialogue like \'The stars are lying to us.\'',
    mr: 'उदा., एक झपाटलेले अंतराळयान, भुतांशी बोलणारा गुप्तहेर, किंवा \'तारे आमच्याशी खोटे बोलत आहेत.\' सारखा संवाद.',
    hi: 'उदा., एक प्रेतवाधित अंतरिक्ष यान, भूतों से बात करने वाला जासूस, या \'सितारे हमसे झूठ बोल रहे हैं।\' जैसी संवाद की पंक्ति।',
  },
  proTip: {
    en: 'Pro-tip: Use Ctrl+Enter to submit.',
    mr: 'प्रो-टिप: सबमिट करण्यासाठी Ctrl+Enter वापरा.',
    hi: 'प्रो-टिप: सबमिट करने के लिए Ctrl+Enter का उपयोग करें।',
  },
  generateButton: {
    en: 'Generate',
    mr: 'तयार करा',
    hi: 'उत्पन्न करें',
  },
  generatingButton: {
    en: 'Generating...',
    mr: 'तयार होत आहे...',
    hi: 'उत्पन्न हो रहा है...',
  },
  generatedTextTitle: {
    en: 'Generated Text',
    mr: 'तयार केलेला मजकूर',
    hi: 'उत्पन्न टेक्स्ट',
  },
  loadingMessage: {
    en: 'The AI is pondering your request...',
    mr: 'एआय तुमच्या विनंतीवर विचार करत आहे...',
    hi: 'एआई आपके अनुरोध पर विचार कर रहा है...',
  },
  masterpieceAwaits: {
    en: 'Your masterpiece awaits',
    mr: 'तुमची उत्कृष्ट कृती वाट पाहत आहे',
    hi: 'आपकी उत्कृष्ट कृति का इंतजार है',
  },
  generatedTextHere: {
    en: 'The generated text will appear here.',
    mr: 'तयार केलेला मजकूर येथे दिसेल.',
    hi: 'उत्पन्न टेक्स्ट यहां दिखाई देगा।',
  },
  copyButton: {
    en: 'Copy',
    mr: 'कॉपी',
    hi: 'कॉपी',
  },
  copiedButton: {
    en: 'Copied!',
    mr: 'कॉपी केले!',
    hi: 'कॉपी किया गया!',
  },
  errorEnterPrompt: {
    en: 'Please enter a prompt.',
    mr: 'कृपया एक प्रॉम्प्ट प्रविष्ट करा.',
    hi: 'कृपया एक प्रॉम्प्ट दर्ज करें।',
  },
  errorUnexpected: {
    en: 'An unexpected error occurred. Please try again.',
    mr: 'एक अनपेक्षित त्रुटी आली. कृपया पुन्हा प्रयत्न करा.',
    hi: 'एक अप्रत्याशित त्रुटि हुई। कृपया पुन: प्रयास करें।',
  },
};

const dynamicEnumTexts: { [key in GenerationType | Genre]: { [lang in Language]: string } } = {
  [GenerationType.PlotIdea]: { en: 'Plot Idea', mr: 'कथानक कल्पना', hi: 'कथानक विचार' },
  [GenerationType.CharacterDescription]: { en: 'Character Description', mr: 'पात्र वर्णन', hi: 'चरित्र विवरण' },
  [GenerationType.Dialogue]: { en: 'Dialogue', mr: 'संवाद', hi: 'संवाद' },
  [GenerationType.ExpandText]: { en: 'Expand on This', mr: 'याचा विस्तार करा', hi: 'इसका विस्तार करें' },
  [GenerationType.WorldBuilding]: { en: 'World Building Snippet', mr: 'जगनिर्मितीचा नमुना', hi: 'विश्व निर्माण स्निपेट' },
  [Genre.Fantasy]: { en: 'Fantasy', mr: 'कल्पनारम्य', hi: 'काल्पनिक' },
  [Genre.SciFi]: { en: 'Science Fiction', mr: 'विज्ञान कथा', hi: 'विज्ञान कथा' },
  [Genre.Mystery]: { en: 'Mystery', mr: 'गूढकथा', hi: 'रहस्य' },
  [Genre.Romance]: { en: 'Romance', mr: 'प्रेम कथा', hi: 'रोमांस' },
  [Genre.Horror]: { en: 'Horror', mr: 'भयपट', hi: 'डरावनी' },
  [Genre.Thriller]: { en: 'Thriller', mr: 'थरारक', hi: 'थ्रिलर' },
  [Genre.Comedy]: { en: 'Comedy', mr: 'विनोदी', hi: 'कॉमेडी' },
  [Genre.Historical]: { en: 'Historical Fiction', mr: 'ऐतिहासिक कथा', hi: 'ऐतिहासिक उपन्यास' },
};

export const getDynamicText = (item: GenerationType | Genre, lang: Language): string => {
  return dynamicEnumTexts[item]?.[lang] || dynamicEnumTexts[item]?.['en'] || String(item);
};
