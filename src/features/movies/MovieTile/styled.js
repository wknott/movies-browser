import styled from "styled-components";

const MovieTileImg = styled.img`
  width: 292px;
  height: 438px;
  object-fit: cover;
  margin: 0;
  margin-bottom: 16px;
  border-radius: 5px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 34vw;
    height: auto;
    min-width: 114px;
    margin: 0;
    margin-right: 16px;
  } ;
`;
const MovieInfoWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
`;
const MovieTileHeader = styled.h2`
  margin: 0;
  font-family: Poppins;
  font-weight: 500;
  margin-bottom: 8px;
  font-size: 22px;
  line-height: 130%;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
    margin-bottom: 4px;
  } ;
`;
const MovieTileYear = styled.p`
  margin: 0;
  font-family: Poppins;
  margin-bottom: 8px;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.color.darkerGrey};
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 16px;
  } ;
`;
const MovieTileTags = styled.ul`
  margin: 0;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin-left: -8px;
  margin-bottom: 45px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-bottom: 16px;
  } ;
`;
const MovieTileTag = styled.li`
  background-color: ${({ theme }) => theme.color.grey};
  font-family: Poppins;
  font-size: 14px;
  line-height: 140%;
  border-radius: 5px;
  margin-left: 8px;
  margin-bottom: 8px;
  padding: 8px 16px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 4px 8px;
    font-size: 10px;
    margin-bottom: 8px;
  } ;
`;
const MovieAdditionalInfo = styled.div`
  margin: 0;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    position: relative;
  } ;
`;
const MovieRatingImg = styled.img`
  width: 24px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 16px;
  } ;
`;
const MovieRatingText = styled.p`
  margin-right: 12px;
  font-family: Poppins;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  margin: 0 12px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
    line-height: 130%;
  } ;
`;
const MovieRatingVotes = styled.p`
  margin: 0;
  font-family: Poppins;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.color.darkerGrey};
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
    line-height: 130%;
  } ;
`;

export {
  MovieTileImg,
  MovieTileHeader,
  MovieTileYear,
  MovieTileTags,
  MovieTileTag,
  MovieAdditionalInfo,
  MovieRatingImg,
  MovieRatingText,
  MovieRatingVotes,
  MovieInfoWrapper,
};
