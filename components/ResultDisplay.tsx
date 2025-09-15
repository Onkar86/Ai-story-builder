
import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';
import { ClipboardIcon } from './icons/ClipboardIcon';
import { Language } from '../types';
import { useTranslations } from '../hooks/useTranslations';

interface ResultDisplayProps {
  isLoading: boolean;
  error: string | null;
  result: string;
  language: Language;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ isLoading, error, result, language }) => {
  const { t } = useTranslations(language);
  const [copyText, setCopyText] = useState(t('copyButton'));

  useEffect(() => {
    setCopyText(t('copyButton'));
  }, [language, t]);

  useEffect(() => {
    if (copyText === t('copiedButton')) {
      const timer = setTimeout(() => setCopyText(t('copyButton')), 2000);
      return () => clearTimeout(timer);
    }
  }, [copyText, t]);

  const handleCopy = () => {
    if (result) {
      navigator.clipboard.writeText(result);
      setCopyText(t('copiedButton'));
    }
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="flex flex-col items-center justify-center h-full text-gray-400">
          <Spinner />
          <p className="mt-4 text-lg">{t('loadingMessage')}</p>
        </div>
      );
    }
    if (error) {
      return <div className="text-red-400 bg-red-900/50 p-4 rounded-md">{error}</div>;
    }
    if (result) {
      return (
        <div className="relative">
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 bg-gray-700 hover:bg-gray-600 text-gray-300 text-sm py-1 px-3 rounded-md transition flex items-center gap-1.5"
            aria-label={t('copyButton')}
          >
            <ClipboardIcon className="w-4 h-4" />
            {copyText}
          </button>
          <div className="text-gray-300 whitespace-pre-wrap leading-relaxed">
            {result}
          </div>
        </div>
      );
    }
    return (
        <div className="flex flex-col items-center justify-center h-full text-gray-500 text-center">
            <div className="w-16 h-16 mb-4 border-2 border-dashed border-gray-600 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M12 21v-1" />
                </svg>
            </div>
            <h3 className="text-xl font-semibold">{t('masterpieceAwaits')}</h3>
            <p className="mt-1">{t('generatedTextHere')}</p>
        </div>
    );
  };

  return (
    <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg border border-gray-700 backdrop-blur-sm h-full min-h-[400px] lg:min-h-0 flex flex-col">
       <h2 className="text-2xl font-semibold mb-4 text-gray-200">{t('generatedTextTitle')}</h2>
       <div className="flex-grow bg-gray-900/50 rounded-md p-4 overflow-y-auto">
        {renderContent()}
       </div>
    </div>
  );
};

export default ResultDisplay;
