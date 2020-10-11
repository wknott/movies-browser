import React from "react";
import searchIcon from "../../images/searchIcon.svg";
import { Label, Icon, Input} from "./styled";

const Search = () => {
    return (
<Label>
    <Icon src={searchIcon} />
    <Input placeholder="Search for movies" />
</Label>
    );
};

export default Search;