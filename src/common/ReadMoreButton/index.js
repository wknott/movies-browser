import React, { useState } from "react";
import { Button } from "./styled";

export default ({ content }) => {
  const [show, setShow] = useState(false);

  return (
    content.length > 400 ?
      <>
        {show ? content : `${content.slice(0, 400)}...`}
        <Button onClick={() => setShow(show => !show)}>
          Read {show ? "less" : "more"}
        </Button>
      </>
      :
      <>
        {content}
      </>
  )
};