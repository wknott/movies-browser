import styled, { css } from "styled-components";

export const Label = styled.label`
  min-width: 200px;
  border-radius: 33px;
  background-color: ${({ theme }) => theme.basicColor.white};
  border: 1px solid ${({ theme }) => theme.basicColor.grey};
  display: flex;
  align-items: center;

  ${({ mobile }) => mobile && css`
    @media (min-width: ${({ theme }) => theme.breakpoint.ipad}px) {
      display: none;
    };
  `}
  
  @media (max-width: ${({ theme }) => theme.breakpoint.ipad}px) {
    margin: 12px 0px 0px;
    width: 100%;
    min-width: 200px;
  }
`;

export const Icon = styled.img`
  margin: 0 15px;
  width: 20px;
  height: 20px;
`;

export const Input = styled.input`
  background-color:inherit;
  color: ${({ theme }) => theme.basicColor.black};
  border: none;
  font-size: 16px;
  line-height: 150%;
  align-items: center;
  flex-grow: 0.8;
  outline: none;
  padding: 12px 0px;
  border-radius: 33px;
`;
