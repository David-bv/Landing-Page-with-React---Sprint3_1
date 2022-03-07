import { Card, CardImg, Container } from "react-bootstrap";
import styled from "styled-components";

export const DivCard = styled(Container)`
    justify-content: center;
    display: flex;
    padding: 4rem 0 5rem;
    @media only screen and (max-width: 600px) {
       display: block;
       margin: auto;
       padding: 1rem 0 1rem;
    }
`

export const CardStyled = styled(Card)`
    justify-content: center;
    margin: 20px auto;
    background-color: transparent;
    border: none;
    @media only screen and (max-width: 600px) {
       margin: 0px auto;
       width: 350px;
       display: block;

    }
`
export const TitleCard = styled(Card)`
    border: none;
    text-align: center;
    color: hsl(0, 0%, 100%);
    background-color: transparent;
    font-family: 'Raleway', sans-serif;
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 10px;
    @media only screen and (max-width: 600px) {
        font-size: 20px;
    }
`
export const TextCard = styled(Card)`
    border: none;
    text-align: center;
    color: hsl(0, 0%, 100%);
    background-color: transparent;
    font-family: 'Raleway', sans-serif;
    font-size: 12px;
    @media only screen and (max-width: 600px) {
        font-size: 14px;
        text-align: center;
        position: relative;
        right: 25px;
        width: 310px;
    }
`

export const ImgCard = styled(CardImg)`
    width: 65px;
    height: auto;
    min-height: 69.14px;
    margin: auto;
    @media only screen and (max-width: 600px) {
       margin-top: 20px;
       display: block;
    }
`