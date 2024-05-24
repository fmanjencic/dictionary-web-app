import logo from './logo.svg';
import './App.css';
import TopBar from './components/TopBar';
import { useState, useEffect } from 'react';
import WordSearch from './components/WordSearch';
import WordView from './components/WordView';

function App() {

  const [searchText, setSearchText] = useState([""]);

  return (
    <div>

        <TopBar/>
        
        <WordSearch searchText={searchText} setSearchText={setSearchText}/>
        
        <WordView searchText={searchText}/>

    </div>
  );
}

export default App;
