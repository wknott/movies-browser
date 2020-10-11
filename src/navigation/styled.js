import styled from "styled-components";

export const Container = styled.div `
width: 100%;
background-color: ${({ theme }) => theme.color.black};
display: flex;
justify-content: center;
padding: 10px;

`;

export const Wrapper = styled.div `
width: 100%;
max-width: 1320px;
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: wrap;

`;

export const NavigationStyle = styled.div `
  display: flex;
  align-items: center;
`;
export const Icon = styled.img `
  height: 23px;
  width: 30px;
  margin: 0 10px;
`;

export const Title = styled.h1 `
color: ${({ theme }) => theme.color.white};
font-weight: 500;
font-size: 24px;
line-height: 40px;
letter-spacing: -1.5px;
display: flex;

`;
export const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  

`;
export const NavigationItem = styled.li`
border: 1px solid transparent;
flex-grow: 0;
margin: 10px;
padding: 10px;
`;
export const Link = styled.a`
color: white;
font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
`;


