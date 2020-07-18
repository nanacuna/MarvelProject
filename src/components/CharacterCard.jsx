import React from 'react';

const thumbnailStyle = {
    margin: '50px', 
    border: '5px solid #DA4F43', 
    borderRadius: '10px',
    boxShadow: '10px 10px 10px rgba(0, 0, 0, .4)'
};

export default function CharacterCard({name, description, thumbnail}){
    console.log('Name: ', name);
    if(name){
        // let image = `${thumbnail.path}portrait_uncanny.${thumbnail.extension}`;
    
        console.log(thumbnailStyle);
        return(
            <div>
                <img style={thumbnailStyle} src={`${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`} alt=""/>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        );
    }
    else{
        return(
            <p>Todavía no se cargo la URL</p>
        )
    }
}