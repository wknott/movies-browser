import styled from "styled-components";

export const Label = styled.label`
  width: 432px;
  height: 48px;
  border-radius: 33px;
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.grey};
  display: flex;
  align-items: center;
  margin: 23px 200px;
`;

export const Icon = styled.img`
  margin: 0 15px;
  width: 20px;
  height: 20px;
  border: 1px solid ${({ theme }) => theme.color.darkerGrey};
`;

export const Input = styled.input`
  background-color: none;
  border: none;
  font-size: 16px;
  flex-grow: 0.8;
`;
