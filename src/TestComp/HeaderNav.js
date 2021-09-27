import React from 'react'
import styled from "styled-components"
import {Link} from "react-router-dom"
import img from "../Components/GitHub/GitHubImage/logonice.png"
import {AiOutlineHome, AiOutlineFlag, AiOutlineContacts} from "react-icons/ai"
import {FiSettings} from "react-icons/fi"



const HeaderNav = () => {
    return (
        <Container>
            <Wrapper>
                <Logo src={img} />
                <Navlink>
                    <MyLink to="/"clr><AiOutlineHome/></MyLink>
                    <MyLink to="/Newproject"><AiOutlineContacts/></MyLink>
                    <MyLink to="/GitHubApp"clr><AiOutlineContacts/></MyLink>
                    <MyLink to="/About"><AiOutlineFlag/></MyLink>
                    <MyLink to="/Settings" clr><FiSettings/></MyLink>
                  
                   
                </Navlink>
            </Wrapper>
        </Container>
    )
}

export default HeaderNav

const Container = styled.div`
width: 100%;
height: 90px;
background-color: green;
`;
const Wrapper = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`;
const Logo = styled.img`
width: 300px;
height: 50px;

object-fit: contain;
`;
const Navlink = styled.div`
display:flex;
`;

                    
const MyLink = styled(Link)`
margin:0 10px;
color: ${({clr}) => (clr ? "yellow": "purple" )};
text-decoration: none;
width:80px;
height:40px;
display:flex;
border-radius:5px;
justify-content:center;
align-items:center;
transition: all 1000ms;
transform: scale;

:hover{
    background-color: red;
}
`;