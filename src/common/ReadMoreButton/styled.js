import styled from "styled-components";

export const Button = styled.button`
  display: block;
  border: none;
  border-radius: 5px;
  padding: 16px 24px;
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  background-color: ${({ theme }) => theme.color.grey};
  color: ${({ theme }) => theme.color.black};
  transition: 0.3s filter;
  cursor: pointer;
  
  &:hover {
    filter: brightness(105%);
  }
  &:active {
    filter: brightness(110%);
  }
`;