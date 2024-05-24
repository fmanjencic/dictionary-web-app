import React from "react";
import { useState, useEffect } from 'react';

const WordView = ({searchText}) => {

    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchText}`)
          .then(response => response.json())
          .then(data => {
            console.log('This is the data: ',data);
            setSearchResults(data)
          })
      }, [searchText])


    return(
        <div>
            <h1>You searched for....{searchText}</h1>
        </div>
    )
}

export default WordView;