import styled from "styled-components";

const MovieTileImg = styled.img`
  width: 292px;
  margin: 0;
  margin-bottom: 16px;
`;
const MovieInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const MovieTileHeader = styled.h2`
  margin: 0;
  font-family: Poppins;
  font-weight: 500;
  margin-bottom: 8px;
  font-size: 22px;
  line-height: 130%;
`;
const MovieTileYear = styled.p`
  margin: 0;
  font-family: Poppins;
  margin-bottom: 8px;
  font-size: 16px;
  line-height: 150%;
  color: #7e839a;
`;
const MovieTileTags = styled.ul`
  margin: 0;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin-left: -8px;
  margin-bottom: 39px;
`;
const MovieTileTag = styled.li`
  background-color: grey;
  font-family: Poppins;
  font-size: 14px;
  line-height: 140%;
  border-radius: 5px;
  margin-left: 8px;
  padding: 8px 16px;
`;
const MovieAdditionalInfo = styled.div`
  margin: 0;
  display: flex;
  align-items: center;
`;
const MovieRatingImg = styled.img`
  width: 24px;
`;
const MovieRatingText = styled.p`
  margin-right: 12px;
  font-family: Poppins;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  margin: 0 12px;
`;
const MovieRatingVotes = styled.p`
  margin: 0;
  font-family: Poppins;
  font-size: 16px;
  line-height: 150%;
  color: #7e839a;
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
