import styled from "styled-components";

export const Select = styled.select`
  height: 50px;
  width: 100%;
  padding: 16px 24px;
  background-color: none;
  border: none;
  outline: none;
  font-size: 16px;
  line-height: 150%;
`;

export const SelectContainer = styled.div`
  height: 50px;
  padding: 0 24px;
  background-color: ${({ theme }) => theme.color.white};
  align-items: center;
  border-radius: 33px;
  align-self: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.ipad}px) {
    margin-left: 0;
    margin-top: 10px;
    width: 100%;
    min-width: 200px;
  };
`;