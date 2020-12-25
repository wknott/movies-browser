import styled from "styled-components";

export default styled.div`
  width: 1368px;
  max-width: calc(100% - 2 * 12px);
  margin: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: calc(100vw - 32px);
  };
`;