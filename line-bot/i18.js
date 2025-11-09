import i18next from 'i18next';
import Backend from 'i18next-fs-backend';
import path from 'path';

i18next.use(Backend).init({
  lng: 'zh', // default language: Chinese
  fallbackLng: 'zh',
  backend: {
    loadPath: path.join(process.cwd(), '/locales/{{lng}}.json'), // <-- make sure your en.json / zh.json are in ./locales/
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
