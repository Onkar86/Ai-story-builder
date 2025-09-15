
import React from 'react';
import { GENERATION_TYPES, GENRES } from '../constants';
import { GenerationType, Genre, Language } from '../types';
import { SparklesIcon } from './icons/SparklesIcon';
import { useTranslations } from '../hooks/useTranslations';

interface PromptFormProps {
  prompt: string;
  setPrompt: (prompt: string) => void;
  generationType: GenerationType;
  setGenerationType: (type: GenerationType) => void;
  genre: Genre;
  setGenre: (genre: Genre) => void;
  isLoading: boolean;
  onSubmit: () => void;
  language: Language;
}

const PromptForm: React.FC<PromptFormProps> = ({
  prompt,
  setPrompt,
  generationType,
  setGenerationType,
  genre,
  setGenre,
  isLoading,
  onSubmit,
  language,
}) => {
  const { t, tEnum } = useTranslations(language);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      onSubmit();
    }
  };

  return (
    <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg border border-gray-700 backdrop-blur-sm h-full flex flex-col">
      <h2 className="text-2xl font-semibold mb-4 text-gray-200">{t('craftYourPrompt')}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="generationType" className="block text-sm font-medium text-gray-400 mb-1">{t('wantToGenerate')}</label>
          <select
            id="generationType"
            value={generationType}
            onChange={(e) => setGenerationType(e.target.value as GenerationType)}
            className="w-full bg-gray-700 border-gray-600 rounded-md py-2 px-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
            disabled={isLoading}
          >
            {GENERATION_TYPES.map((type) => (
              <option key={type} value={type}>{tEnum(type)}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="genre" className="block text-sm font-medium text-gray-400 mb-1">{t('inTheGenreOf')}</label>
          <select
            id="genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value as Genre)}
            className="w-full bg-gray-700 border-gray-600 rounded-md py-2 px-3 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
            disabled={isLoading}
          >
            {GENRES.map((g) => (
              <option key={g} value={g}>{tEnum(g)}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="flex-grow flex flex-col">
        <label htmlFor="prompt" className="block text-sm font-medium text-gray-400 mb-1">{t('yourIdea')}</label>
        <textarea
          id="prompt"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={t('promptPlaceholder')}
          className="w-full flex-grow bg-gray-700/80 border-gray-600 rounded-md p-3 text-gray-200 resize-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition placeholder-gray-500"
          rows={10}
          disabled={isLoading}
        />
        <p className="text-xs text-gray-500 mt-1 text-right">{t('proTip')}</p>
      </div>
      
      <button
        onClick={onSubmit}
        disabled={isLoading || !prompt}
        className="mt-6 w-full flex items-center justify-center gap-2 bg-purple-600 text-white font-bold py-3 px-4 rounded-md hover:bg-purple-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 disabled:scale-100"
      >
        {isLoading ? (
          <>
            <div className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></div>
            <span>{t('generatingButton')}</span>
          </>
        ) : (
          <>
            <SparklesIcon className="w-5 h-5" />
            <span>{t('generateButton')}</span>
          </>
        )}
      </button>
    </div>
  );
};

export default PromptForm;
