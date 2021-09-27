import React from 'react';
import styled from "styled-components";

const Middle = () => {
    return (
        <Container>
        <Photo></Photo>

        </Container>
            
    
    )
}

export default Middle


const Container = styled.div`
width: 80%;
height: 70%;
background-color: blue;
display: flex;
flex-direction: column;
`;

const Photo =styled.img`
width: 150px;
height: 150px;
border-radius: 50%;
object-fit: cover;
margin-bottom: 30px;
cursor: pointer;
`;