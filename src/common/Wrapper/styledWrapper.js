import styled from "styled-components";
import { theme } from "../../theme";

const StyledWrapper = styled.div`
  max-width: 1368px;
  margin: 0 auto;
  @media (max-width: ${theme.breakpoint.mobileMax}px) {
    width: calc(100vw - 32px);
    margin: 0 auto;
  } ;
`;

export default StyledWrapper;
