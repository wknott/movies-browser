import styled from "styled-components";

export const PagerWrapper = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  margin: 0 auto;
  margin-top: 40px;
  margin-bottom: 100px;
`;

export const PagerButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.color.lightBlue};
  padding: 8px 16px;
  margin: 0 6px;
  outline: none;
  border: 0;
  border-radius: 5px;
  color: ${({ theme }) => theme.color.black};
  transition: 0.3s filter;

  &:hover {
    filter: brightness(103%);
    cursor: pointer;
  }

  &:disabled {
    background-color: ${({ theme }) => theme.color.grey};
    color: ${({ theme }) => theme.color.black};
    cursor: not-allowed;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 0 4px;
    padding: 8px 12px;
  }
`;

export const PagerPrev = styled.img`
  width: 7px;
  margin-right: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 0 4px;
    width: 5px;
  }
`;

export const MobilePagerPrev = styled(PagerPrev)`
  @media (min-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;

export const PagerNext = styled.img`
  width: 7px;
  margin-left: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 0 4px;
    width: 5px;
  }
`;

export const MobilePagerNext = styled(PagerNext)`
  @media (min-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;

export const PagerText = styled.p`
  margin: 0;
  font-family: Poppins;
  font-size: 14px;
  line-height: 140%;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: none;
  }
`;

export const PagerInfo = styled.p`
  margin: 0 24px;
  font-family: Poppins;
  color: ${({ theme }) => theme.color.darkerGrey};
  font-size: 16px;
  line-height: 150%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin: 0 4px;
    font-size: 10px;
  }
`;

export const Bold = styled.b`
  color: ${({ theme }) => theme.color.black};
`;
