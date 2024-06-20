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

export const InputLabel = styled.p`
    letter-spacing: -0.408px;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 22px;
    color: #ffffff;
    margin-right: 205px;
    
`


export const Input = styled.input`
background: rgba(255,255,255,0.25);
box-shadow: 0px 4px 4px rgba(0,0,0,0, 0.25) ;
border-radius: 14px;

width: 342px;
height: 58px;
padding-left: 15px;

border: none;
outline: none;

font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 28px;

color: #ffffff;

margin-bottom: 60px;
`


export const Button = styled.button`
    width: 342px;
    height: 74px;
    margin-top: 76px;

    background: rgba(0,255,0, 0.8);
    border: none;
    

    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 28px;

    color: #ffffff;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    

    &:hover{
        opacity: .8;
    } 

    &:active{
        opacity: .5;
    }
`
