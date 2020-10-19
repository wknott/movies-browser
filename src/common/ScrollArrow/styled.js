import { FaArrowCircleUp } from "react-icons/fa";
import styled, { css } from "styled-components";

export const Arrow = styled(FaArrowCircleUp)`
  position: fixed; 
  bottom: 20px;
  right: 20px;
  align-items: center;
  width: 50px;
  height: 50px;
  justify-content: flex-end;
  z-index: 1000;
  cursor: pointer;
  animation: fadeIn 0.3s;
  transition: opacity 0.4s;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.5;
    }
  }
`;

export const Container = styled.div`
  ${({ hide }) => hide && css`
    display: none;
  `}
`;