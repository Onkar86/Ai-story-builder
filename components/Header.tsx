
import React from 'react';
import { SparklesIcon } from './icons/SparklesIcon';
import LanguageSwitcher from './LanguageSwitcher';
import { Language } from '../types';
import { useTranslations } from '../hooks/useTranslations';

interface HeaderProps {
  language: Language;
  setLanguage: (language: Language) => void;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage }) => {
  const { t } = useTranslations(language);

  return (
    <header className="relative text-center">
       <div className="absolute top-0 right-0">
        <LanguageSwitcher language={language} setLanguage={setLanguage} />
      </div>
      <div className="flex items-center justify-center gap-4">
        <SparklesIcon className="w-10 h-10 text-purple-400" />
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-indigo-500 text-transparent bg-clip-text">
          {t('appTitle')}
        </h1>
      </div>
      <p className="mt-4 text-lg text-gray-400">
        {t('appSubtitle')}
      </p>
    </header>
  );
};

export default Header;
