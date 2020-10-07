import styled from "styled-components";

const StyledTile = styled.div`
  padding: 16px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  border-radius: 5px;
  width: fit-content;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto 1fr;
  @media (max-width: 767px) {
  } ;
`;

export { StyledTile };
