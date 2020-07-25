import React from 'react';
import styled from 'styled-components'

const cardStyle = {
    margin: '5px', 
    width: '150px',
    ':hover':{
        opacity: '.1'
    }
};

const Thumbnail = styled.img`
    border: 5px solid #DA5044;
    border-radius: 10px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, .4);
    cursor: pointer;
    :hover{
        opacity: 0.7;
    };
`

export default function CharacterCardPreview({name, thumbnail, onClose}){
    if(name){
        let image = `${thumbnail.path}/portrait_medium.${thumbnail.extension}`;
    
        return(
            <div style={cardStyle}>
                <h3>{name}</h3>
                <Thumbnail onClick={onClose} src={image} alt=""/>
            </div>
        );
    }
}