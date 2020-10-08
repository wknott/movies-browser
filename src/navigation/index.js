import React from "react";
import Search from "../features/search";
import camera from "../images/camera.svg";

const Navigation = () => {
    return (
<div>
    <div>
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
    </div>
</div>
    );
};