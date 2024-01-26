import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

export const languages = [
  {
    value: 'nl',
    label: 'Nederlands'
  },
  {
    value: 'en',
    label: 'English'
  }
];

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: languages[0].value,
    supportedLngs: languages.map((language) => language.value),
    interpolation: {
      escapeValue: false,
      formatSeparator: ',',
      format(value, format) {
        if (format === 'uppercase') return value.toUpperCase();
        return value;
      },
      defaultVariables: {
        defaultInsert: 'first',
        defaultUp: 'second',
      },
    },
    react: {
      defaultTransParent: 'div',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i'],
    },
  });


export default i18n;