import React from "react";
import Search from "../features/search";
import camera from "../images/camera.svg";
import { Wrapper } from "./styled";

const Navigation = () => {
    return (
<Container>
    <Wrapper>
        <NavigationStyle>
<Icon src={camera} />
<Title>
    Movies Browser
</Title>
<NavigationList>
    <NavigationItem>
        <Link >Movies</Link>
    </NavigationItem>
    <NavigationItem>
        <Link >People</Link>
    </NavigationItem>
   
</NavigationList>
        </NavigationStyle>
        <Search/>
    </Wrapper>
</Container>
    );
};

export default Navigation;