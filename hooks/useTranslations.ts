import { translations, getDynamicText } from '../translations';
import { Language, GenerationType, Genre } from '../types';

// Fix: Exclude `number` from the translation key type. `keyof` on a type with a
// string index signature (from `TranslationStore`) returns `string | number`.
// Since translation keys are always strings, this correctly types `key` as `string`
// and resolves the type error in the `t` function's return statement.
type TranslationKeys = Exclude<keyof typeof translations, number>;

export const useTranslations = (language: Language) => {
  const t = (key: TranslationKeys): string => {
    return translations[key]?.[language] || translations[key]?.['en'] || key;
  };

  const tEnum = (item: GenerationType | Genre): string => {
    return getDynamicText(item, language);
  };

  return { t, tEnum };
};
