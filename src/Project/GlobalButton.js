import React from 'react'
import styled from "styled-components"

const GlobalButton  = ({name, bg, cl}) => {
    return (
        <Container bg={bg}>
            <Wrapper cl={cl}> {name}</Wrapper>
        </Container>
    )
}

export default GlobalButton


const Container = styled.div`
width:150px;
height: 55px;
background-color:${({bg})=>(bg ? "yellow" :"blue")};
margin:10px;
border-radius: 5px;
font-size: 15px;
transform: scale(1);
transition: all 350ms;

:hover{
    background-color:${({bg})=>(bg ? "blue" :"red")};
    cursor: pointer;
    transform: scale (0.5)
}
`;

const Wrapper = styled.div`
width:150px;
height: 50px;
display: flex;
align-items: center;
justify-content: center;
color: ${({cl})=> cl? "white": "black"};
`;
