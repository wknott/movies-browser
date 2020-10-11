import styled from "styled-components";
import Tile from "../../../common/Tile";

export const StyledPersonTile = styled(Tile)`
  grid-gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 8px;
    grid-template-columns: auto;
    grid-gap: 8px;
  };
`;

export const PersonImage = styled.img`
  margin: 0 auto;
  width: 176px;
  border-radius: 5px;
  background: ${({ theme }) => theme.color.silver};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 120px;
  };
`;

export const PersonName = styled.h2`
  font-weight: 500;
  font-size: 22px;
  line-height: 1.3;
  text-align: center;
  margin: 0 0 8px 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
    margin-bottom: 7px;
  };
`;