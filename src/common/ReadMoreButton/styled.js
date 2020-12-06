import styled from "styled-components";

export const Button = styled.button`
  display: inline;
  border: none;
  border-radius: 5px;
  padding: 8px 20px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  margin-left: 12px;
  font-size: 14px;
  line-height: 19px;
  background-color: ${({ theme }) => theme.color.grey};
  color: ${({ theme }) => theme.color.black};
  transition: 0.3s filter;
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 12px;
    padding: 4px 12px;
    margin-left: 8px;
  }
  &:hover {
    filter: brightness(103%);
  }
  &:active {
    filter: brightness(110%);
  }
`;
