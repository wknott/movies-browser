import React from "react";
import { useParams } from "react-router-dom";

export default () => {
  const { id } = useParams();

  return (
    <h1>Strona filmu o id: {id}</h1>
  )
};