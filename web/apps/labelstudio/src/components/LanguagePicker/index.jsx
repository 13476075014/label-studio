import React, { useState } from 'react';
import { Block } from '../../utils/bem';
import { Button } from "@humansignal/ui";
import './index.scss';
import i18n from "i18next";

export const LanguagePicker = () => {

  const [language, setLanguage] = useState(i18n.language);
  const changeLanguage = (val) => {
    setLanguage(val);
    i18n.changeLanguage(val);
  };

  return (
    <Block tag="li" className="language-picker">
      <Button size="small" style={language === 'en' ? {"background":"rgb(247, 214, 242)", "color": "rgb(114, 62, 106)"} : {}} onClick={() => changeLanguage("en")}>
        English
      </Button>
      <Button size="small" style={language === 'zh' ? {"background":"rgb(247, 214, 242)", "color": "rgb(114, 62, 106)"} : {}} onClick={() => changeLanguage("zh")}>
        简体中文
      </Button>
    </Block>
  );
};
