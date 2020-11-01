import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "./styled";
import { selectLanguage } from "../../common/Navigation/LanguageSelect/languageSlice";
import { readLess, readMore } from "../../languages";

export default ({ content }) => {
  const [show, setShow] = useState(false);
  const language = useSelector(selectLanguage);

  return (
    content.length > 400 ?
      <>
        {show ? content : `${content.slice(0, 400)}...`}
        <Button onClick={() => setShow(show => !show)}>
          {show ? readLess[language] : readMore[language]}
        </Button>
      </>
      :
      <>
        {content}
      </>
  )
};