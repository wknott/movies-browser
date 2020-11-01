import styled from "styled-components";
import { NavLink } from "react-router-dom";
const activeClassName = "link-active";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.basicColor.woodsmoke};
`;

export const NavigationStyle = styled.div`
  padding: 22px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  
  @media (max-width: ${({ theme }) => theme.breakpoint.ipad}px) {
    padding: 16px 0px;
  }
`;

export const Logo = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
`;

export const Icon = styled.img`
  height: 40px;
  width: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 18px;
    height: 18px;
  }
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.navBar.color.white};
  font-weight: 500;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: -1.5px;
  display: flex;
  margin: 0px 0px 0px 12px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 15px;
    line-height: 130%;
    letter-spacing: -0.5px;
    margin-left: 8px;
  }
`;

export const ToggleButton = styled.button`
  height: 50px;
  background-color: transparent;
  color: ${({ theme }) => theme.navBar.color.white};
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.navBar.color.white};
  border-radius: 24px;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    height: 35px;
  }
`;

export const SunIcon = styled(Icon)`
  transition: all 0.3s linear;

  transform: ${({ isDark }) => isDark ? 'translateX(-100px)' : 'translateX(0)'};
`;

export const MoonIcon = styled(Icon)`
  transition: all 0.3s linear;

  transform: ${({ isDark }) => isDark ? 'translateX(0px)' : 'translateX(100px)'};
`;

export const BurgerItem = styled.div`
  align-self: center;
  
  @media (min-width: ${({ theme }) => theme.breakpoint.ipad}px) {
    display: none;
  }
`;

export const NavigationList = styled.ul`
  height: 50px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px;
  padding: 0px;

  @media (max-width: ${({ theme }) => theme.breakpoint.ipad}px) {
    margin-top:12px;
    width: 100%;
    justify-content: space-evenly;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 0px;
  }
`;

export const NavigationItem = styled.li`
  flex-grow: 0;
`;

export const StyledLink = styled(NavLink).attrs(() => ({ activeClassName }))`
  &.${activeClassName} {
    border: 1px solid ${({ theme }) => theme.navBar.color.white};
    border-radius: 24px;
  }
  
  padding: 12.5px 24px;
  color: ${({ theme }) => theme.navBar.color.white};
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

export const Desktop = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoint.ipad}px) {
    display: none;
  }
`;

export const DesktopNavigationList = styled(NavigationList)`
 @media (max-width: ${({ theme }) => theme.breakpoint.ipad}px) {
    display: none;
  }
`;