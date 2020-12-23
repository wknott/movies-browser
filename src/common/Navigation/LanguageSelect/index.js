import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { languages } from "../../../languages";
import { selectLanguage, setLanguage } from "./languageSlice";
import { Select, SelectContainer } from "./styled";

const LanguageSelect = ({ handleClose, mobile }) => {
  const dispatch = useDispatch();
  const language = useSelector(selectLanguage);
  const handleChange = ({ target }) => {
    handleClose();
    dispatch(setLanguage(target.value))
  };

  return (
    <SelectContainer mobile={mobile}>
      <Select value={language} onChange={handleChange}>
        {languages.map(language =>
          <option value={language.code} key={language.code}>
            {language.label}
          </option>
        )}
      </Select>
    </SelectContainer>
  );
}

export default LanguageSelect;