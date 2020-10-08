import styled from "styled-components";
import { theme } from "../../../theme";

export const StyledMoviesContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(4, auto);
  @media (max-width: ${theme.breakpoint.mobileMax}px) {
    grid-template-columns: 1fr;
  } ;
`;
