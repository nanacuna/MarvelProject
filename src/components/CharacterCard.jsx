import React from 'react';
import { NavLink } from 'react-router-dom';
import ComicCardPreview from './ComicCardPreview';

const thumbnailStyle = {
    marginBottom: '50px', 
    border: '5px solid #DA4F43', 
    borderRadius: '10px',
    boxShadow: '10px 10px 10px rgba(0, 0, 0, .4)'
};

export default function CharacterCard({ character, loadComics, onCloseComic }){
    if (character){
        console.log(loadComics(character));

        let image = `${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`;
        return(
            <div>
                <h1 style={{fontSize:'5rem', margin: '1rem 0 0 0'}}>{character.name}</h1>
                <img style={thumbnailStyle} src={image} alt=""/>
                <p style={{margin:'0 20%', fontSize:'1.5rem', fontWeight:'700'}}>{
                    character.description ? character.description : 'Without description...'
                    }
                </p>
                <h2 style={{fontSize:'3rem', margin: '1rem 0 0 0'}}>Comics</h2>
                <div style={{display:'flex',  justifyContent:'center', flexWrap:'wrap'}}>
                {character.comics && character.comics.map(comic =>
                    <ComicCardPreview 
                        name={comic.title}
                        thumbnail={comic.thumbnail}
                        onClose={() => onCloseComic(character.id, comic.id)}
                        id={comic.id}
                    />
                )}
        </div>
                <NavLink to='/'>
                    <h4>Back to Home</h4>
                </NavLink>
            </div>
        );
    }
    else
        return(<h1>Character not found!</h1>)
}