import React from 'react'
import styled from "styled-components"
import img from "../img/logp.png"
import GlobalButton from "./GlobalButton"

const NewProject = () => {
    return (
        <Container>
            <Wrapper>
                <Box>
                    <Title>Best WP Project Bidding Theme – Freelance Marketplace 2021</Title>
                    <SubTitle>The most complete freelancer marketplace theme in the world. Build your freelancer website with the best template. Finest written code and awesome customer support! </SubTitle>
                    <Sub>Starting from <span>$149</span><GlobalButton name= "See Pricing" bg/></Sub>
                  <Boxmain>
                    <GlobalButton name="Veiw Demo"/>
                    <GlobalButton name="Purshase Theme" cl/>
                  </Boxmain>
                </Box> 
                <Image src={img}/>
            </Wrapper>
        </Container>
    )
}

export default NewProject


const Title= styled.h2`

`;
const SubTitle= styled.div`
`;
const Sub= styled.div`
display: flex;
align-items: center;
span{
    color:green;
    font-weight: bold;
    margin-left:10px;
}
`;

const Boxmain= styled.div`
display: flex;
`;

const Container= styled.div`
width: 100%;
height: 100%;
min-height:100vh;
background-image: url("cool.jpeg");
background-position: center;
background-size: cover;
background-repeat: no repeat;

`;

const Wrapper= styled.div`
width: 100%;
height: 100vh;
color:red;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content:center;
background-image:url("cool.jpeg");
background-position: center;
background-size: cover;
background-repeat: no repeat;
`;

const Box= styled.div`
width:340px;
height:400px;
color:white;
/*background-color:white;*/
display: flex;
flex-direction: column;
margin:20px`;

const Image= styled.img`
width:400px;
min-width:320px;
height:400px;
color: white;
margin: 20px;
object-fit:cover;


`;