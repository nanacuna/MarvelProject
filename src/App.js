import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CharacterCard from './CharacterCard.jsx';
import { getHero } from './actions/index';
import { connect } from 'react-redux';

function App() {
  // const [character, setCharacter] = useState({});
  const [characterInput, setCharacterInput] = useState('');

  function probandoTecla(event){
    if(event.keyCode === 13){
      getHero(characterInput);
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
        onClick={() => getHero(characterInput)}>Search</button>
      <CharacterCard 
        name={characters.name} 
        description={characters.description}
        thumbnail={characters.thumbnail}
      />
    </div>
  );
}

function mapStateToProps(state){
  if(state){
    return{
      characters: state.characterLoaded
    }
  }
}

function mapDispatchToProps(dispatch){
  return{
    getHero: character => dispatch(getHero(character))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default App;
