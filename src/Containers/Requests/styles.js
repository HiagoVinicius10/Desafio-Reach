import styled from "styled-components";

import BackGround from "../../Assets/BackGround.png"

export const Container = styled.div`
background: url("${BackGround}");
background-size: cover;

display: flex;
flex-direction: column;
align-items: center;

height: 100vh;
`

export const Image = styled.img`
    margin-top: 30px;

`


export const H1 = styled.h1`
   font-style: normal;
   font-weight: bold;
    font-size: 28px;
    line-height: 40px;
    text-align: center;

    margin-bottom: 60px;
    margin-top: 30px;

    color: #ffffff;
    
`



export const Button = styled.button`
    width: 342px;
    height: 74px;
    margin-top: 70px;

    background: #FFFFFF24;
    border: none;
    

    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: #ffffff;

    cursor: pointer;

    &:hover{
        opacity: .8;
    } 

    &:active{
        opacity: .5;
    }
`

export const User = styled.li`
 display: flex;
 justify-content: space-around;

 
 height: 58px;
 margin-bottom: 50px;

 background: rgba(255,255,255,0.25);
 box-shadow: 0px 4px 4px rgba(0,0,0,0, 0.25) ;
 border-radius: 14px;

width: 342px;
height: 110px;

border: none;
outline: none;



.Button {
    background: none;
    border: none;
    cursor: pointer;
    
    
}


`
export const Div = styled.div`
display: flex;
flex-direction: column;
margin-top: 10px;
margin-left: 60px;
margin-right: 50px;
gap: 15px;




p{

font-style: normal;
font-weight: bolder;
font-size: 18px;
line-height: 28px;

color: white;

}


.Div{
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;
   
    color: #FFFFFF99;
}


`
