import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CharactersCards from './components/CharactersCards.jsx';
import Nav from './components/Nav';
import CharacterCard from './components/CharacterCard';
import { Route } from 'react-router-dom';

function App() {
  const [characters, setCharacters] = useState([]);

  function loadCharacter (characName, setearEstado){
    const urlMarvel = `https://gateway.marvel.com:443/v1/public/characters?ts=1&name=${characName}&apikey=991962cadd87c122479853678485c080&hash=b614aeb1a676b9c3eeed3f2b1a593f62`

    fetch(urlMarvel)
    .then (data => data.json())
    .then (data => {
      if (data.data){
        const character = {
          id: data.data.results[0].id,
          name: data.data.results[0].name,
          description: data.data.results[0].description,
          thumbnail: data.data.results[0].thumbnail,
          // comics: []
        }
        // Mapeo sobre el array de characters para que me devuelva un array de id's 
        // y si este nuevo array, no incluye el id del nuevo character se lo agrego 
        if (!characters.map(element => element.id).includes(character.id)){
          setCharacters([...characters, character]);
          setearEstado();
        }
      }
    })
    .catch((error) => console.log(error));
  }

  function loadComics (character){
    if (!character.comics){
      fetch(`https://gateway.marvel.com:443/v1/public/characters/${character.id}/comics?orderBy=-issueNumber&limit=20&ts=1&apikey=991962cadd87c122479853678485c080&hash=b614aeb1a676b9c3eeed3f2b1a593f62`)
      .then(response => response.json())
      .then(data => {
        let comicArray = [];

        for (const dataComic of data.data.results)
          comicArray.push({
            id: dataComic.id,
            title: dataComic.title,
            descrption: dataComic.description,
            thumbnail: dataComic.thumbnail,
            price: dataComic.price
          });

        character.comics = comicArray;

        setCharacters(characters.map( charac => charac.id !== character.id ? charac : character ));
      })
    }
    return;
}

  function onClose (id){
    setCharacters(characters.filter(character => character.id !== id));
  }

  function filterCharacter(id){
    const characterDetails = characters.filter(character => character.id  === parseInt(id))

    if(characterDetails)
      return characterDetails[0];
    else
      return null;
  }

  return (
    <div className="App">
      <Route
        exact path = '/'
        render={ () => <Nav loadCharacter={loadCharacter} /> }
      />
      <Route
        exact path = '/'
        render={() => <CharactersCards characters={characters} onClose={onClose}/>}
      />
      <Route 
        exact path = '/character/:id'
        render={ ({match}) => <CharacterCard character={filterCharacter(match.params.id)} loadComics={loadComics} /> }
      />
    </div>
  );
}

export default App;
