import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { languages } from "../../../languages";
import { selectLanguage, setLanguage } from "./languageSlice";
import { Select } from "./styled";

const LanguageSelect = ({ handleClose }) => {
  const dispatch = useDispatch();
  const language = useSelector(selectLanguage);
  const handleChange = ({ target }) => {
    handleClose();
    dispatch(setLanguage(target.value))
  };

  return (
    <Select value={language} onChange={handleChange}>
      {languages.map(language =>
        <option value={language.code} key={language.code}>
          {language.label}
        </option>
      )}
    </Select>
  );
}

export default LanguageSelect;