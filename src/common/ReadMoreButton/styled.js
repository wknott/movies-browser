import styled from "styled-components";

export const Button = styled.button`
  display: block;
  border: none;
  border-radius: 5px;
  padding: 16px 24px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  background-color: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.white};
  transition: 0.3s filter;

  &:hover {
    filter: brightness(110%);
  }
  &:active {
    filter: brightness(120%);
  }
`;