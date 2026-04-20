import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './Locales/en.json';
import translationPT from './Locales/pt.json';

import { currentSite } from './config/siteConfig';

const resources = {
  en: { translation: translationEN },
  pt: { translation: translationPT },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: currentSite.id === 'dental-tourism' ? 'en' : 'pt',
    interpolation: { escapeValue: false },
  });

export default i18n;
