import React from "react";
import { languages } from "../../languages";

const LanguageSelect = () => {
  return (
    <select onChange={({ target }) => console.log(target.value)}>
      {languages.map(language =>
        <option value={language.code} key={language.code}>{language.label}</option>
      )}
    </select>
  );
};

export default LanguageSelect;