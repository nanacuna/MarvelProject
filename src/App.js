import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterCard from './components/CharacterCard.jsx';
import CharacterCardPreview from './components/CharacterCardPreview.jsx';

function App() {
  const [characters, setCharacters] = useState([]);
  const [characterInput, setCharacterInput] = useState('');

  function loadCharacter (charac){
    const urlMarvel = `https://gateway.marvel.com:443/v1/public/characters?ts=1&name=${charac}&apikey=991962cadd87c122479853678485c080&hash=b614aeb1a676b9c3eeed3f2b1a593f62`

    fetch(urlMarvel)
    .then (data => data.json())
    .then (data => {
      if (data.data){
        const character = {
          name: data.data.results[0].name,
          description: data.data.results[0].description,
          thumbnail: data.data.results[0].thumbnail
        }
        setCharacters([...characters, <CharacterCardPreview 
          name={character.name}
          thumbnail={character.thumbnail}
        />]);
      }
    })
    .catch((error) => console.log(error));
  }

  function probandoTecla(event){
    if(event.keyCode === 13){
      loadCharacter(characterInput);
    }
  }

  return (
    <div className="App">
      <h1>Marvel App</h1>
      <input 
        onKeyDown={probandoTecla}
        value={characterInput}
        onChange={(e) => setCharacterInput(e.target.value)}
        placeholder='marvel hero'>
      </input>
      <button
        onClick={() => loadCharacter(characterInput)}>Search</button>
      <div style={{display:'flex'}}>{characters}</div>
    </div>
  );
}

export default App;
