import React from 'react';
import styled from 'styled-components'

const cardStyle = {
    margin: '5px', 
    width: '150px',
    ':hover':{
        opacity: '.1'
    }
};

// const Button = styled.a`
//   /* This renders the buttons above... Edit me! */
//   display: inline-block;
//   border-radius: 3px;
//   padding: 0.5rem 0;
//   margin: 0.5rem 1rem;
//   width: 11rem;
//   background: transparent;
//   color: white;
//   border: 2px solid white;

//   /* The GitHub button is a primary button
//    * edit this to target it specifically! */
//   ${props => props.primary && css`
//     background: white;
//     color: black;
//   `}
// `

const Img = styled.img`
    border: 5px solid #DA4F4;
    border-radius: 10px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, .4);
    cursor: pointer;
    :hover{
        opacity: 0.1;
    };
`

export default function CharacterCardPreview({name, thumbnail, onClose}){
    if(name){
        let image = `${thumbnail.path}/portrait_medium.${thumbnail.extension}`;
    
        return(
            <div style={cardStyle}>
                <h3>{name}</h3>
                <img onClick={onClose} src={image} alt=""/>
            </div>
        );
    }
}