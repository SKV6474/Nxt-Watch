import React from "react";
import { useTranslation } from "react-i18next";

import { sendToLocalStorage } from "../../../../Nxtwatch/utils";
import {
  LanguageDiv,
  LanguageEn,
  LanguageHindi,
} from "../../../../Nxtwatch/styledComponent";

const LanguageChangeComponent = () => {
  const { i18n } = useTranslation();
  return (
    <LanguageDiv>
      <LanguageEn
        onClick={() => {
          i18n.changeLanguage("en");
          sendToLocalStorage("i18nextLng", "en");
        }}
      >
        English
      </LanguageEn>
      <LanguageHindi
        onClick={() => {
          i18n.changeLanguage("hindi");
          sendToLocalStorage("i18nextLng", "hindi");
        }}
      >
        हिंदी
      </LanguageHindi>
    </LanguageDiv>
  );
};

export default LanguageChangeComponent;
