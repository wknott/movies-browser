import React from "react";
import searchIcon from "../../images/searchIcon.svg";

const Search = () => {
    return (
<Label>
    <img src={searchIcon} />
    <Input placeholder="Search for movies" />
</Label>
    );
};

export default Search;