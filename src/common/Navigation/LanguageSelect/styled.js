import styled, { css } from "styled-components";

export const Select = styled.select`
  height: 50px;
  width: 100%;
  padding: 16px 24px 16px 8px;
  background-color: ${({ theme }) => theme.basicColor.white};
  border: none;
  outline: none;
  font-size: 16px;
  line-height: 150%;
`;

export const SelectContainer = styled.div`
  height: 50px;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.basicColor.white};
  align-items: center;
  border-radius: 33px;
  align-self: center;

  ${({ mobile }) =>
    mobile &&
    css`
      @media (min-width: ${({ theme }) => theme.breakpoint.ipad}px) {
        display: none;
      } ;
    `}

  @media (max-width: ${({ theme }) => theme.breakpoint.ipad}px) {
    margin-left: 0;
    margin-top: 10px;
    width: 100%;
    min-width: 200px;
  } ;
`;
