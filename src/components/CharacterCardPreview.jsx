import React from 'react';

const cardStyle = {
    margin: '5px', 
    width: '150px'
};

const thumbnailStyle = {
    border: '5px solid #DA4F43', 
    borderRadius: '10px',
    boxShadow: '10px 10px 10px rgba(0, 0, 0, .4)'
}

export default function CharacterCard({name, thumbnail}){
    console.log('Name: ', name);
    if(name){
        let image = `${thumbnail.path}/portrait_medium.${thumbnail.extension}`;
    
        console.log(thumbnailStyle);
        return(
            <div style={cardStyle}>
                <h3>{name}</h3>
                <img style={thumbnailStyle} src={image} alt=""/>
            </div>
        );
    }
    else{
        return(
            <p>Todavía no se cargo la URL</p>
        )
    }
}