
import React, { useState, useCallback } from 'react';
import { GenerationType, Genre, Language } from './types';
import { generateCreativeWriting } from './services/geminiService';
import Header from './components/Header';
import PromptForm from './components/PromptForm';
import ResultDisplay from './components/ResultDisplay';
import { useTranslations } from './hooks/useTranslations';

const App: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [generationType, setGenerationType] = useState<GenerationType>(GenerationType.PlotIdea);
  const [genre, setGenre] = useState<Genre>(Genre.Fantasy);
  const [result, setResult] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [language, setLanguage] = useState<Language>('en');

  const { t } = useTranslations(language);

  const handleGenerate = useCallback(async () => {
    if (!prompt.trim()) {
      setError(t('errorEnterPrompt'));
      return;
    }

    setIsLoading(true);
    setResult('');
    setError(null);

    try {
      const generatedText = await generateCreativeWriting(prompt, generationType, genre, language);
      setResult(generatedText);
    } catch (err) {
      setError(err instanceof Error ? err.message : t('errorUnexpected'));
    } finally {
      setIsLoading(false);
    }
  }, [prompt, generationType, genre, language, t]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/40 to-gray-900 font-sans">
      <div className="container mx-auto px-4 py-8">
        <Header language={language} setLanguage={setLanguage} />
        <main className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="flex flex-col">
            <PromptForm
              prompt={prompt}
              setPrompt={setPrompt}
              generationType={generationType}
              setGenerationType={setGenerationType}
              genre={genre}
              setGenre={setGenre}
              isLoading={isLoading}
              onSubmit={handleGenerate}
              language={language}
            />
          </div>
          <div className="flex flex-col">
             <ResultDisplay isLoading={isLoading} error={error} result={result} language={language} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
