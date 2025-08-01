import i18next from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector, { DetectorOptions } from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

const detectionOptions: DetectorOptions = {
  order: ['localStorage', 'cookie', 'queryString', 'navigator'],
  caches: ['localStorage', 'cookie'],
};

const options = {
  supportedLngs: [
    'ru',
    'uk',
    'en',
    'bg',
    'da',
    'el',
    'fi',
    'fr',
    'it',
    'nb',
    'pt-BR',
    'sl',
    'tr',
    'bs',
    'hr',
    'lt',
    'pt-PT',
    'sq',
    'ca',
    'hu',
    'lv',
    'nl',
    'ro',
    'sr',
    'zh',
    'cs',
    'de',
    'es',
    'et',
    'mk',
    'pl',
    'sk',
    'sv',
  ],
  fallbackLng: 'en',
  debug: process.env.NODE_ENV === 'development',
  detection: detectionOptions,
  interpolation: {
    escapeValue: false,
  },
  backend: {
    loadPath: `/locales/{{lng}}/translation.json?v=1.1.1`,
  },
};

(i18next as any)
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(options)
  .catch(({ err }: any) => console.error('Ошибка инициализации i18next:', err));

export default i18next;
