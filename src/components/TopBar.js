import React from "react";

const TopBar = ({searchResults}) => {
    return( 
    <div>
        <h1>TopBar</h1>
        <h2>{searchResults}</h2>
    </div>
    )
}

export default TopBar;