
import React from 'react';
import { Language, LANGUAGES } from '../types';

interface LanguageSwitcherProps {
  language: Language;
  setLanguage: (language: Language) => void;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ language, setLanguage }) => {
  return (
    <div className="relative">
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value as Language)}
        className="w-full bg-gray-700 border-gray-600 rounded-md py-2 pl-3 pr-8 text-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition appearance-none"
        aria-label="Select language"
      >
        {LANGUAGES.map(({ code, displayName }) => (
          <option key={code} value={code}>
            {displayName}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-400">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
