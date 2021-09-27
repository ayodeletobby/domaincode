import React from 'react';
import styled from "styled-components";

const HeaderTop = () => {
    return (
        <Container>
            <Title> GitHub Desktop </Title>
            <Wrapper> Focus on what matters instead of fighting with Git. Whether you're new to Git or a seasoned user, GitHub Desktop simplifies your development workflow.</Wrapper>
            <MyButton> Download Button</MyButton>
        </Container>
    )
}

export default HeaderTop

const Container = styled.div`
padding-top:50px;
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
`;
const Wrapper = styled.div`
font-size: 20px;
width: 800px;
text-align: center;
margin: 0;
margin-top: 15px;
margin-bottom: 55px;
color: lightgray;
`;
const Title = styled.div`
font-size: 50px;
margin-top: 30px;
`;
const MyButton = styled.button`
padding: 20px;
background-color: rgb(143, 85 ,179);
color: white;
outline: none;
border: 0;
font-size: 30px;
border-radius: 5px;
font-family: Poppins;
`;
