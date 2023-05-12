import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";

const resources = {
  en: { translation: en }
};

i18n.use(initReactI18next).init({
  resources,
  compatibilityJSON: "v3",
  lng: "en", // Set the default language
  fallbackLng: "en", // Set the fallback language
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
