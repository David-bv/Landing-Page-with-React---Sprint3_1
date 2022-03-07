/* import { Button } from "react-bootstrap"; */
import styled from "styled-components";

export const DivMain = styled.div `
    width: 50%;
    display: flex;
    margin: 0 auto;
    padding: 20px;
    @media only screen and (max-width: 600px) {
        width: 100%;
    }
`

export const StartedImg = styled.img`
    width: 400px;
    height: 250px;
    margin-left: 20px;
    display: block;
    margin: 0 auto;
    @media only screen and (max-width: 600px) {
        width: 300px;
        height: 200px;
    }
`
export const H2Styled = styled.h2`
    color: hsl(0, 0%, 100%);
    text-align: center;
    font-size: 2rem ;
    @media only screen and (max-width: 600px) {
        font-size: 1.8rem ;
    }
`
export const H6Styled = styled.h6`
    color: hsl(0, 0%, 100%);
    text-align: center;
    font-size: 14px ;
    @media only screen and (max-width: 600px) {
        font-size: 14px;
        width: 84%;
        display: block;
        margin: 0 auto;
    }
`

export const GetStartButton = styled.button`
    background-color:  hsl(176, 68%, 64%);
    display: block;
    height: 48px;
    color: hsl(0, 0%, 100%);
    border: none;
    width: 50%;
    max-width: 450px;
    font-size: 14px;
    margin:16px auto;
    border-radius: 25px;
    outline: none;
    &:hover{
        background-color: #8cdae4;
        outline: none;
        border:none;
    }
    &:focus{
        outline: none;
        border:none;
        background-color: #8cdae4;
    }
    @media only screen and (max-width: 620px) {
        width: 65%;
    }
`