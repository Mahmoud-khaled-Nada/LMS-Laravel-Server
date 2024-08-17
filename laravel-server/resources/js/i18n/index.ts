import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import TranslationEnglishLang from '../../../lang/en/lang.json';
import TranslationArabicLang from '../../../lang/ar/lang.json';

const resources = {
  en: {
    translation: TranslationEnglishLang,
  },
  ar: {
    translation: TranslationArabicLang,
  },
};

// Use the locale passed from Laravel
const locale = window.Laravel.locale || 'en';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: locale,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
