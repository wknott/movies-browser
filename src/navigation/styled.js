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
  flex-wrap: wrap;
  padding: 10px;
`;

export const Icon = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 17px;
    height: 17px;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.white};
  font-weight: 500;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: -1.5px;
  display: flex;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 13px;
    line-height: 130%;
    letter-spacing: -0.5px;
    margin: 0px;
  }
`;

export const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 0;
  }
`;

export const NavigationItem = styled.li`
  border: 1px solid transparent;
  flex-grow: 0;
`;

export const StyledLink = styled(NavLink).attrs(() => ({ activeClassName }))`
  &.${activeClassName} {
    border: 1px solid ${({ theme }) => theme.color.white};
    border-radius: 24px;
  }
  
  padding: 13.5px 24px;
  color: ${({ theme }) => theme.color.white};
  text-decoration: none;
  text-transform: uppercase;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 12px;
    line-height: 18px;
    padding: 8px 12px;

    &.${activeClassName} {
      border-radius: 29px;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;