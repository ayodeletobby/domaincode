import React from 'react'
import styled from "styled-components";
import img from "./GitHubImage/icon.svg";

const TopHeader = () => {
    return (
        <Container>
            <Image src={img}/>
            <Wrapper> 
                <NavLink>Home</NavLink>
                <NavLink clr>Release Notes</NavLink>
                <NavLink clr>Help</NavLink>
                </Wrapper>

        </Container>
    )
};

export default TopHeader;

const Container = styled.div`
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
`;

const Image = styled.img`
width: 150px;
height: 150px;
border-radius: 50%;
object-fit: cover;
margin-bottom: 30px;
cursor: pointer;
`;

const Wrapper = styled.div`
display: flex;
width: 300px;
justify-content: space-around;
`;

const NavLink = styled.div`
font-weight: bold;
color: ${({ clr}) => (clr ? "purple" : "white")};

:hover {
    cursor: pointer;
    text-decoration: underline;
`;


