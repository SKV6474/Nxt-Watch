import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import i18nextHttpBackend from "i18next-http-backend";

i18next
  .use(i18nextHttpBackend)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    fallbackLng: "en",
    lng: "en",
    ns: ["translation"],
    defaultNS: "translation",
  });

export default i18next;
