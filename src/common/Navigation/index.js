import React from "react";
import Search from "../../features/search";
import camera from "../../images/camera.svg";
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
import { toMovies, toPeople } from "../../routes";
import Wrapper from "../Wrapper";
import LanguageSelect from "./LanguageSelect";
import { useSelector } from "react-redux";
import { selectLanguage } from "./LanguageSelect/languageSlice";
import { moviesNavigation, peopleNavigation } from "../../languages";

const Navigation = () => {
  const language = useSelector(selectLanguage);

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
              <StyledLink to={toMovies()}>{moviesNavigation[language]}</StyledLink>
            </NavigationItem>
            <NavigationItem>
              <StyledLink to={toPeople()}>{peopleNavigation[language]}</StyledLink>
            </NavigationItem>
          </NavigationList>
          <Search />
          <LanguageSelect />
        </NavigationStyle>
      </Wrapper>
    </Container>
  );
};

export default Navigation;
