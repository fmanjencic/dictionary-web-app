import React from "react";


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