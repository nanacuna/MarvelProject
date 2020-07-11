import React from 'react';

export default function CharacterCard({name, description, thumbnail}){
    console.log('Name: ', name);
    if(name){
        let image = `${thumbnail.path}portrait_uncanny.${thumbnail.extension}`;
    
        console.log(image);
        return(
            <div>
                <img src={`${thumbnail.path}/portrait_uncanny.${thumbnail.extension}`} alt=""/>
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