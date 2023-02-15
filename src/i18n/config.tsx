import i18next from "i18next";
import httpApi from 'i18next-http-backend';
// import languageDetector from 'i18next-browser-languagedetector';

const i18n = i18next.use(httpApi).init({
    lng:'en',
    fallbackLng: 'en',
    supportedLngs: ['en', 'fr'],
    preload: ['en', 'fr'],
    ns: 'translation',
    defaultNS: 'translation',
    fallbackNS: false,
    detection: {
        order: ['querystring', 'navigator', 'htmlTag'],
        lookupQuerystring: 'lang',
    },
    backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json'
    }
},
    (err, t) => {
        if (err) return console.error(err)
    }
);

export default i18n;