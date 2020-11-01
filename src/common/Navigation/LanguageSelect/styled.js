import styled from "styled-components";

export const Select = styled.select`
  padding: 15px;
  background-color: none;
  border: none;
  font-size: 16px;
  line-height: 150%;
  align-items: center;
  outline: none;
  border-radius: 33px;
  margin-left: auto;
  align-self: center;

  @media (max-width: ${({ theme }) => theme.breakpoint.ipad}px) {
    margin-left: 0;
    margin-top: 10px;
    width: 100%;
    min-width: 200px;
  }
`;