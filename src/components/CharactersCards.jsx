import React from 'react';
import CharacterCardPreview from './CharacterCardPreview';

export default function CharactersCards({characters, onClose}){
    return(
        <div style={{display:'flex',  justifyContent:'center'}}>
            {characters && characters.map(character =>
                <CharacterCardPreview 
                    name={character.name}
                    thumbnail={character.thumbnail}
                    onClose={() => onClose(character.id)}
                    id={character.id}
                />
            )}
        </div>
    )
}