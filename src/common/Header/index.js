import styled from "styled-components";

export default styled.h1`
  margin: 56px 0 24px 0;
  font-weight: 600;
  font-size: 36px;
  line-height: 1.2;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}) {
    margin: 24px 0 12px 0;
    font-size: 18px;
  } ;
`;
