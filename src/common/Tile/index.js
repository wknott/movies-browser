import styled from "styled-components";

export default styled.div`
  padding: 16px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  border-radius: 5px;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto 1fr;
  background-color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.color.woodsmoke};
  
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    grid-template-columns: auto 1fr;
    grid-template-rows: auto;
  };
`;
