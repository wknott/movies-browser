import styled from "styled-components";

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ErrorImg = styled.img`
  margin-top: 80px;
  max-width: 120px;
`;

export const ErrorTitle = styled.h1`
  margin-top: 38px;
  margin-bottom: 0px;
  font-size: 36px;
  font-weight: 600;
  line-height: 120%;
  color: ${({ theme }) => theme.color.black};
`;

export const ErrorText = styled.p`
  margin-top: 24px;
  margin-bottom: 24px;
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
`;

export const ReturnButton = styled.button`
  border: none;
  border-radius: 5px;
  padding: 16px 24px;
  font-family: "Open Sans", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  background-color: ${({ theme }) => theme.color.blue};
  color: ${({ theme }) => theme.color.white};
  transition: 0.3s filter;
  text-decoration: none;

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(120%);
  }
`;
