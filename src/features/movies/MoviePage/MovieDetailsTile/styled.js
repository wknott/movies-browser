import styled, { css } from "styled-components";

export const DetailsTile = styled.div`
  padding: 40px;
  background-color: ${({ theme }) => theme.movieBanner.color.white};
  color: ${({ theme }) => theme.movieBanner.color.black};
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 40px;
  margin: 64px auto;
  ${({ theme }) => theme.color.white === "#FFFFFF" ?
    css`box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);` :
    css`box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.1);`}

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 16px;
    grid-gap: 16px;
    grid-template-areas:
      "image info"
      "description description"
    ;
  }
`;

export const Image = styled.img`
  width: 312px;
  height: 464px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 114px;
    height: 169px;
  }
`;

export const Name = styled.h1`
  font-weight: 600;
  font-size: 36px;
  margin: 8px 0px 24px 0px;
  
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 130%;
    margin: 0px 0px 4px 0px;
  }
`;

export const Frame = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 18px;
  line-height: 120%;
  margin-right: 10px;
  color: ${({ theme }) => theme.movieBanner.color.black};
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 12px;
    margin-right: 4px;
  }
`;
export const GrayText = styled(Text)`
  color: ${({ theme }) => theme.movieBanner.color.stormGray};
`;

export const DesktopGrayText = styled(GrayText)`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;

export const MobileGrayText = styled(GrayText)`
  @media (min-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;

export const Birth = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8px;
  margin: 0px 0px 24px 0px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-bottom: 8px;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  line-height: 1.6;
  margin: 0px;
  
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
    grid-area: description;
  }
`;

export const MobileDescription = styled(Description)`
  @media (min-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;

export const DesktopDescription = styled(Description)`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;

export const ProductionYear = styled.p`
  margin: 0px 0px 24px 0px;
  font-size: 22px;
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-weight: normal;
    font-size: 13px;
    line-height: 130%;
    margin-bottom: 8px;
  }
`;

export const Tags = styled.ul`
  margin: 0;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin-left: -16px;
  margin-bottom: 8px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-bottom: 4px;
    margin-left: -8px;
  } ;
`;

export const Tag = styled.li`
  background-color: ${({ theme }) => theme.movieBanner.color.grey};
  font-size: 14px;
  line-height: 1;
  font-weight: normal;
  border-radius: 5px;
  margin: 0px 0px 16px 16px;
  padding: 8px 16px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 4px 8px;
    font-style: normal;
    font-size: 10px;
    line-height: 110%;
    margin: 0px 0px 8px 8px;
  };
`;

export const MovieRatingImg = styled.img`
  width: 24px;
  
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 16px;
  };
`;

export const MovieRatingText = styled.p`
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  margin: 0 8px;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
    line-height: 130%;
    font-weight: 600;
  } ;
`;

export const MovieRatingVotes = styled.p`
  margin: 0;
  font-size: 14px;
  line-height: 120%;
  align-self: flex-end;
  color: ${({ theme }) => theme.movieBanner.color.darkerGrey};
  margin-right: 12px;
  margin-bottom: 3px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 130%;
    margin: 0;
  };
`;

export const DesktopMovieRatingVotes = styled(MovieRatingVotes)`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-bottom: 0;
  }
`;