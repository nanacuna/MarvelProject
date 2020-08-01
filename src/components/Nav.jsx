import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav ( { loadCharacter } ){
    // Estado del input
    const [characterInput, setCharacterInput] = useState('');

    // Ejecuta la función que se encarga de llamar a la API cuando
    // Se presiona la tecla ENTER
    function enterEvent(event){
        if(event.keyCode === 13){
          loadCharacter(characterInput, setearEstado);
        }
    }

    // Pasamos esta función como parámetro para vaciar el input 
    function setearEstado (){
        setCharacterInput('');
    }
    // Renderiza el NAV
    return(
        <nav>
            <h1>Marvel App</h1>
            <NavLink to='/'>
                <input
                    onKeyDown={enterEvent}
                    value={characterInput}
                    onChange={(e) => setCharacterInput(e.target.value)}
                    placeholder='Marvel Hero...'>
                </input>
                <button onClick={() => loadCharacter(characterInput, setearEstado)}>Search</button>
            </NavLink>
        </nav>
    );
}