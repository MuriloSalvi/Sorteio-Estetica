import React from 'react'
import styled from 'styled-components'



const Wrapper=styled.div`
display:flex;
justify-content:center;
flex-direction: column;
max-width: 300px;
margin:auto;
margin-top:50px;
text-align: center;
justify conten: center
`

const Background = styled.div`
background-image: linear-gradient(#3A3FF0, #33D2F5);
width: 100%;
height: 100%;
position: fixed;

`

const Title= styled.h1`
color: white;
margin: 0;
text-align: cener;
`

const Start = styled.button`
  
  margin-top: 30px;
  background-color: #23DE65;
  width: 100%
  height: 30px;
  text-alight: center;
  box-shadow: 2px 2px 2px rgb(0,0,0, 0.5);
  color: white;
  font-weight: bold;
  padding:15px;
  border-radius: 10px;
  font-size: 25px;
 `
 const Show = styled.div`
color:white;
text-align: center;
font-weight: bolder;
font-size: 50px;
`

function Home() {

  return (
    <>
    <style>
      img{"max-width: 300px;"}
    </style>
    <Background>
      <Wrapper>
    <img src = {'./universo.png'} ></img>
    <Title>Sorteio R$500</Title> 
    
   <Start onClick= {function Start(){
     document.getElementById("demo").innerHTML =
     Math.floor(Math.random() * 100);
     
     
   }}>Sortear</Start>
   <Show id='demo'></Show>
   </Wrapper>
   </Background>
   </>
  )
}

export default Home;