import styled from "styled-components";

export default styled.div`
  max-width: 1368px;
  margin: 0 auto;
  
  @media(max-width: ${({ theme }) => theme.breakpoint.hdDesktop}px){
    max-width: 1024px;
  };

  @media(max-width: ${({ theme }) => theme.breakpoint.ipad}px){
    max-width: 688px;
  };

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: calc(100vw - 32px);
  };
`;