import React, { useState } from "react";
import Search from "../../features/search";
import camera from "../../images/camera.svg";
import {
  Container,
  NavigationStyle,
  NavigationItem,
  Title,
  Icon,
  StyledLink,
  Logo,
  ToggleButton,
  SunIcon,
  MoonIcon,
  BurgerItem,
  DesktopNavigationList,
  Desktop,
  MobileNavigationList,
} from "./styled";
import { toMovies, toPeople } from "../../routes";
import Wrapper from "../Wrapper";
import LanguageSelect from "./LanguageSelect";
import { useDispatch, useSelector } from "react-redux";
import { selectLanguage } from "./LanguageSelect/languageSlice";
import { moviesNavigation, peopleNavigation } from "../../common/languages";
import { selectIsDark, toggleTheme } from "../../themeSlice";
import sun from "../../images/sun.svg";
import moon from "../../images/moon.svg";
import Burger from "./Burger";

const Navigation = () => {
  const [open, setOpen] = useState(false);
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
            <SunIcon isDark={isDark} src={sun} />
            <MoonIcon isDark={isDark} src={moon} />
          </ToggleButton>
          <DesktopNavigationList>
            <NavigationItem>
              <StyledLink onClick={() => setOpen(false)} to={toMovies()}>
                {moviesNavigation[language]}
              </StyledLink>
            </NavigationItem>
            <NavigationItem>
              <StyledLink onClick={() => setOpen(false)} to={toPeople()}>
                {peopleNavigation[language]}
              </StyledLink>
            </NavigationItem>
          </DesktopNavigationList>
          <Desktop>
            <Search />
          </Desktop>
          <Desktop>
            <LanguageSelect handleClose={() => setOpen(false)} />
          </Desktop>
          <BurgerItem>
            <Burger
              open={open}
              handleClose={() => setOpen(false)}
              handleOpen={() => setOpen(true)}
            />
          </BurgerItem>
          {open &&
            <>
              <MobileNavigationList>
                <NavigationItem>
                  <StyledLink onClick={() => setOpen(false)} to={toMovies()}>
                    {moviesNavigation[language]}
                  </StyledLink>
                </NavigationItem>

                <NavigationItem>
                  <StyledLink onClick={() => setOpen(false)} to={toPeople()}>
                    {peopleNavigation[language]}
                  </StyledLink>
                </NavigationItem>
              </MobileNavigationList>
              <Search mobile />
              <LanguageSelect mobile handleClose={() => setOpen(false)} />
            </>
          }
        </NavigationStyle>
      </Wrapper>
    </Container >
  );
};

export default Navigation;
