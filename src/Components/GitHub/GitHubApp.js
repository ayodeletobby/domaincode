import React from "react";
import styled from "styled-components";
import HeaderTop from "./HeaderTop";
import TopHeader from "./TopHeader";




 const GitHubApp = () => {
    return (
       <Container>
           <Wrapper>
               <TopHeader/>
               <HeaderTop/>
               <Middle/>
           </Wrapper>
           
       </Container>
    )
};


export default GitHubApp;

 
const Container = styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
background-image: url("star-bg.svg");
background-color: #24292e;
padding-top: 50px;
background-size: cover;
color: white;
`;


const Wrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`;


const Middle = styled.div`
width: 100%;
display: flex;
flex-direction:column;
`;

