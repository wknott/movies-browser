import React from "react";
import Search from "../features/search";
import camera from "../images/camera.svg";
import {
  Container,
  NavigationStyle,
  NavigationItem,
  NavigationList,
  Title,
  Icon,
  StyledLink,
  Logo,
} from "./styled";
import { toMovies, toPeople } from "../routes";
import Wrapper from "../common/Wrapper";

const Navigation = () => {
  return (
    <Container>
      <Wrapper>
        <NavigationStyle>
          <Logo>
            <Icon src={camera} />
            <Title>Movies Browser</Title>
          </Logo>
          <NavigationList>
            <NavigationItem>
              <StyledLink to={toMovies()}>Movies</StyledLink>
            </NavigationItem>
            <NavigationItem>
              <StyledLink to={toPeople()}>People</StyledLink>
            </NavigationItem>
          </NavigationList>
          <Search />
        </NavigationStyle>
      </Wrapper>
    </Container>
  );
};

export default Navigation;
