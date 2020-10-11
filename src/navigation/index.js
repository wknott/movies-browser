import React from "react";
import Search from "../features/search";
import camera from "../images/camera.svg";
import { Wrapper } from "./styled";

const Navigation = () => {
    return (
<div>
    <Wrapper>
        <nav>
<img src={camera} />
<h1>
    Movie Browser
</h1>
<ul>
    <li>
        <a href>Movies</a>
    </li>
    <li>
        <a href>Movies</a>
    </li>
</ul>
        </nav>
        <Search/>
    </Wrapper>
</div>
    );
};

export default Navigation;