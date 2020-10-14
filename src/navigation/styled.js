import styled from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "link-active";

export const Container = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.woodsmoke};
`;

export const NavigationStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Icon = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 12px;
`;

export const Title = styled.h1`
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

export const StyledLink = styled(NavLink).attrs(() => ({ activeClassName }))`
  &.${activeClassName} {
    border: 1px solid white;
    border-radius: 24px;
  }
  
  padding: 13.5px 24px;
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  text-transform: uppercase;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;