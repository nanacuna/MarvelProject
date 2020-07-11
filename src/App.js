import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterCard from './CharacterCard.jsx';

function App() {
  const [character, setCharacter] = useState({});
  const [characterInput, setCharacterInput] = useState('');

  function miFunc (charac){
    // const charac = 'hulk';
    const urlMarvel = `https://gateway.marvel.com:443/v1/public/characters?ts=1&name=${charac}&apikey=991962cadd87c122479853678485c080&hash=b614aeb1a676b9c3eeed3f2b1a593f62`

    fetch(urlMarvel)
    .then (data => data.json())
    .then (data => {
      console.log(data.data)
      if (data.data){
        console.log(data);
        const obj = {
          name: data.data.results[0].name,
          description: data.data.results[0].description,
          thumbnail: data.data.results[0].thumbnail
        }
        setCharacter(obj);
      }
    })
    .catch((error) => console.log(error));
  }

  function probandoTecla(event){
    if(event.keyCode === 13){
      miFunc(characterInput);
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
        onClick={() => miFunc(characterInput)}>Search</button>
      <CharacterCard 
        name={character.name} 
        description={character.description}
        thumbnail={character.thumbnail}
      />
    </div>
  );
}

export default App;
