import React from 'react';
import { NavLink } from 'react-router-dom';

const thumbnailStyle = {
    margin: '50px', 
    border: '5px solid #DA4F43', 
    borderRadius: '10px',
    boxShadow: '10px 10px 10px rgba(0, 0, 0, .4)'
};

export default function CharacterCard({ character }){
    if (character){
        let image = `${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`;
        console.log(image);
        return(
            <div>
                <h3>{character.name}</h3>
                <img style={thumbnailStyle} src={image} alt=""/>
                <p style={{margin:'0 20%'}}>{character.description}</p>
                <NavLink to='/'>
                    <h4>Back to Home</h4>
                </NavLink>
            </div>
        );
    }
    else
        return(<h1>Character not found!</h1>)
}