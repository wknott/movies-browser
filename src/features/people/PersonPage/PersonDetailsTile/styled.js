import styled from "styled-components";

export const DetailsTile = styled.div`
  padding: 40px;
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.black};
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 40px;
  margin: 64px auto;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 16px;
    grid-gap: 16px;
    margin: 16px auto;
    grid-template-areas:
      "image info"
      "description description"
    ;
  }
`;

export const Image = styled.img`
  width: 399px;
  height: 564px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.ipad}px) {
    width: 232px;
    height: 326px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 116px;
    height: 163px;
  
  }
`;

export const Name = styled.h1`
  font-weight: 600;
  font-size: 36px;
  margin: 8px 0px 24px 0px;
  
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.3;
    margin: 4px 0px 16px 0px;
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
  color: ${({ theme }) => theme.color.black};

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 12px;
    margin-right: 4px;
  }
`;
export const GrayText = styled(Text)`
  color: ${({ theme }) => theme.color.stormGray};
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
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-bottom: 0;
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

export const DefaultImageContainer = styled.div`
  width: 399px;
  height: 564px;
  border-radius: 5px;
  background: ${({ theme }) => theme.color.silver};
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.ipad}px) {
    width: 232px;
    height: 326px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 116px;
    height: 163px;
  }
`;

export const DefaultImage = styled.img`
  width: 216px;
  height: 216px;
  
  @media (max-width: ${({ theme }) => theme.breakpoint.ipad}px) {
    width: 144px;
    height: 144px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 72px;
    height: 72px;
  }
`;