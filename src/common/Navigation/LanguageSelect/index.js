import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { languages } from "../../../languages";
import { selectLanguage, setLanguage } from "./languageSlice";
import { Select } from "./styled";

const LanguageSelect = () => {
  const dispatch = useDispatch();
  const language = useSelector(selectLanguage);

  return (
    <Select value={language} onChange={({ target }) => dispatch(setLanguage(target.value))}>
      {languages.map(language =>
        <option value={language.code} key={language.code}>
          {language.label}
        </option>
      )}
    </Select>
  );
}

export default LanguageSelect;