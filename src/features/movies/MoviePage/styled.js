const { default: styled } = require("styled-components");

export const MoviePageTop = styled.div`
  width: 100%;
  height: 770px;
  background-image: 
  linear-gradient(270deg, #000000 14.11%, 
  rgba(0, 0, 0, 0.873268) 15.08%, rgba(0, 0, 0, 0.720529) 16.51%, 
  rgba(0, 0, 0, 0.294577) 19.99%, rgba(0, 0, 0, 0.159921) 21.88%, 
  rgba(0, 0, 0, 0) 25.68%), linear-gradient(90deg, #000000 13.6%, 
  rgba(0, 0, 0, 0.984059) 14.58%, rgba(0, 0, 0, 0.967732) 15.44%, 
  rgba(0, 0, 0, 0.865569) 16.3%, rgba(0, 0, 0, 0.230315) 22.87%, 
  rgba(0, 0, 0, 0) 26.64%), linear-gradient(180deg, #000000 0%, 
  rgba(0, 0, 0, 0.689555) 4.66%, rgba(0, 0, 0, 0.439033) 9.34%, 
  rgba(0, 0, 0, 0.20628) 15.16%, rgba(0, 0, 0, 0) 24.22%), 
  linear-gradient(189.44deg, 
  rgba(0, 0, 0, 0) 58.48%, rgba(0, 0, 0, 0.106473) 63.17%, 
  rgba(0, 0, 0, 0.235359) 68.85%, rgba(0, 0, 0, 0.492821) 78.08%, 
  rgba(0, 0, 0, 0.740286) 85.86%, #000000 92.87%);
  background-color: ${({ theme }) => theme.color.black};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: ${({ theme }) => theme.color.white};
`;

export const MainInfo = styled.div`
  height: 770px;
  padding: 0 276px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const MovieLongTitle = styled.h1`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 64px;
  margin: 25px 0px;
  display: flex;
  align-items: center;
`;

export const MovieRating = styled.div`
  margin-bottom: 56px;
  display: flex;
`;

export const MovieAdditionalInfo = styled.div`
  margin: 0;
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    position: relative;
  } ;
`;

export const MovieRatingImg = styled.img`
  width: 40px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 16px;
  } ;
`;

export const MovieRatingNote = styled.p`
  margin-right: 12px;
  font-weight: 500;
  font-size: 30px;
  line-height: 1.3;
  margin: 0 12px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
    line-height: 130%;
  } ;
`;

export const MovieRatingText = styled.p`
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