import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar';
import { useState, useEffect } from 'react';
import WordSearch from './components/WordSearch';
import WordView from './components/WordView';

function App() {

  const [searchText, setSearchText] = useState(""); //Seems to prevent default error
  const [searchResults, setSearchResults] = useState([""])

  //console.log("current searchtext: ", searchText)

      useEffect(() => {
        if (searchText.length > 0) {
          try {
            fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchText}`)
            .then(response => response.json())
            .then(data => {   
            setSearchResults(data)
            console.log('Here are the results', searchResults)
            console.log('Length: ', searchResults.length)
            if (searchResults.length > 0) {
              console.log('This works!')
            }
            if (searchResults.length !== undefined) {
              console.log('This will appear if not undefined.')
            }
          })
          } catch (error) {
            console.log('Error: ', error.message)
          }
        } else {
          console.log('Invalid Search Entered')
        }
      }, [searchText])   

    
      return (
        <div>
    
            <TopBar/>
            
            <WordSearch searchText={searchText} setSearchText={setSearchText}/>
            
            <WordView searchText={searchText} searchResults={searchResults}/>
            
        </div>
      )
    
}

export default App;
