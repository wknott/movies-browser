const { default: styled } = require("styled-components");

export const MovieBackdrop = styled.div`
  background-color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.color.white};
  background-image: 
  linear-gradient(270deg, #000000 14.11%, rgba(0, 0, 0, 0.873268) 15.08%, rgba(0, 0, 0, 0.720529) 16.51%, rgba(0, 0, 0, 0.294577) 19.99%, rgba(0, 0, 0, 0.159921) 21.88%, rgba(0, 0, 0, 0) 25.68%), 
  linear-gradient(90deg, #000000 13.6%, rgba(0, 0, 0, 0.984059) 14.58%, rgba(0, 0, 0, 0.967732) 15.44%, rgba(0, 0, 0, 0.865569) 16.3%, rgba(0, 0, 0, 0.230315) 22.87%, rgba(0, 0, 0, 0) 26.64%), 
  linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0.689555) 4.66%, rgba(0, 0, 0, 0.439033) 9.34%, rgba(0, 0, 0, 0.20628) 15.16%, rgba(0, 0, 0, 0) 24.22%), 
  linear-gradient(189.44deg, rgba(0, 0, 0, 0) 58.48%, rgba(0, 0, 0, 0.106473) 63.17%, rgba(0, 0, 0, 0.235359) 68.85%, rgba(0, 0, 0, 0.492821) 78.08%, rgba(0, 0, 0, 0.740286) 85.86%, #000000 92.87%), 
  url(${({ src }) => src});
  background-size: 1920px 770px, 1920px 770px, 1920px 770px, 1920px 770px, 1368px 769px;
  background-repeat: no-repeat;
  background-position: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    background-size: 350px 148px, 350px 148px, 350px 148px, 350px 148px, 262px 148px;
  }
`;

export const MainInfo = styled.div`
  padding-bottom: 56px;
  margin: 0 auto;
  width: 1368px;
  height: 770px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 320px;
    height: 148px;
    padding: 8px 16px;
  }
`;

export const MovieLongTitle = styled.h1`
  font-weight: 600;
  font-size: 64px;
  margin: 0px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 24px;
  }
`;

export const MovieRating = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  flex-wrap: wrap;
`;

export const MovieRatingImg = styled.img`
  width: 40px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 16px;
  } ;
`;

export const MovieRatingNote = styled.p`
  font-weight: 500;
  font-size: 30px;
  line-height: 1.3;
  align-self: center;
  margin: 0px 8px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
    font-weight: 600;
  } ;
`;

export const MovieRatingText = styled.p`
  margin: 0px;
  font-size: 16px;
  line-height: 1.2;
  align-self: center;
  margin-top: 16px;
  color: ${({ theme }) => theme.color.white};
  flex-basis: 90%;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 10px;
    margin-top: 0px;
    margin-right: 8px;
    flex-basis: unset;
  } ;
`;