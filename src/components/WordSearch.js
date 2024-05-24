import React from "react";
import WordView from "./WordView";


const WordSearch = ({searchText, setSearchText}) => {

    const updateSearchResults = (e) => {
        setSearchText(e.target.value)
    }

    return(
        <div>
            <input onChange={updateSearchResults}></input>
        </div>
    )
}

export default WordSearch;