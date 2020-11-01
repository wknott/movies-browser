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
  ToggleButton,
  SunImage,
  MoonImage,
} from "./styled";
import { toMovies, toPeople } from "../../routes";
import Wrapper from "../Wrapper";
import LanguageSelect from "./LanguageSelect";
import { useDispatch, useSelector } from "react-redux";
import { selectLanguage } from "./LanguageSelect/languageSlice";
import { moviesNavigation, peopleNavigation } from "../../languages";
import { selectIsDark, toggleTheme } from "../../themeSlice";
import sun from "../../images/sun.svg";
import moon from "../../images/moon.svg";

const Navigation = () => {
  const language = useSelector(selectLanguage);
  const dispatch = useDispatch();
  const isDark = useSelector(selectIsDark);

  return (
    <Container>
      <Wrapper>
        <NavigationStyle>
          <Logo>
            <Icon src={camera} />
            <Title>Movies Browser</Title>
          </Logo>
          <ToggleButton onClick={() => dispatch(toggleTheme())}>
            <SunImage isDark={isDark} src={sun} />
            <MoonImage isDark={isDark} src={moon} />
          </ToggleButton>
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
