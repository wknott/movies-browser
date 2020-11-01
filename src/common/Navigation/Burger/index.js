import React from "react";
import { StyledBurger } from "./styled";

const Burger = ({ open, handleClose, handleOpen }) => (
  <StyledBurger open={open} onClick={() => open ? handleClose() : handleOpen()}>
    <div />
    <div />
    <div />
  </StyledBurger >
);

export default Burger;
