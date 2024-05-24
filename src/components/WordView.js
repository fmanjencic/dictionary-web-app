import React from "react";

const WordView = ({searchText, searchResults}) => {


    // if (searchResults[0].word) {
    //   console.log(searchResults[0].word)
    //   return(
    //     <div>
    //         <h1>You searched for....{searchText}</h1>
    //         <p>{searchResults[0].word}</p>
    //     </div>
    // )
    // }
    // else {
    //   return <h1>Results not found.</h1>
    // }

    if (searchResults.length !== undefined) {
      return (
        <div>
          <h1>You searched for....{searchText}</h1>
          <p>{searchResults[0].word}</p>
          <p>{searchResults[0].phonetic}</p>
          <p>{searchResults[0].meanings[0].partOfSpeech}</p>
          <p>Meaning:</p>
          {/* TO-DO: Figure out looping for results */}
          <p>Source Url: {searchResults[0].sourceUrls[0]}</p>
        </div>
      )
    } else {
      return <p>No Results Found.</p>
    }
    
}

export default WordView;