import React from 'react';
import styled from 'styled-components'

const cardStyle = {
    width: '20px',
    height: '20px',
    backgroundColor: '#F2C4C0',
    position: 'relative',
    top: '25px',
    cursor: 'pointer',
    left: '85px',
    borderRadius: '5px',
    zIndex: '1'
};

const Thumbnail = styled.img`
    border: 5px solid #DA5044;
    border-radius: 10px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, .4);
    cursor: pointer;
    :hover{
        opacity: 0.7;
    };
    ${'' /* z-index: 0; */}
`

export default function CharacterCardPreview({name, thumbnail, onClose}){
    if(name){
        let image = `${thumbnail.path}/portrait_medium.${thumbnail.extension}`;
    
        return(
            <div>
                <div style={{backgroundColor:'blue'}} >
                    <h3 style={{marginBottom:'0px'}}>{name.replace(' ', '\u00a0')}</h3>
                    <div style={cardStyle} onClick={onClose}>X</div>
                    <Thumbnail /* onClick={onClose} */ src={image} alt=""/>
                </div>
            </div>
        );
    }
}