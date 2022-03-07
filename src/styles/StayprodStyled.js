import styled from "styled-components";

export const StayImg = styled.img`
    width: 450px;
    height: 300px;
    display: block;
    margin: 0 auto ;
    position: relative;
    left: 2rem;
    @media only screen and (max-width: 1240px) {
        margin-top: 4rem;
        width: 300px;
        height: 200px;
        padding: 0;
        left: 0;
    }
`
export const H2Stay = styled.h2`
    margin-top: 5rem;
    width: 50%;
    color: hsl(0, 0%, 100%);
    text-align: left;
    font-size: 1.7rem ;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    @media only screen and (max-width: 1240px) {
        width: 100%;
        margin-top: 2rem;
        font-size: 1.3rem;
        font-size: 19.5px ;
        text-align: center;
    }
`
export const H6Stay = styled.h6`
    width: 60%;
    color: hsl(0, 0%, 100%);
    text-align: justify;
    font-family: 'Raleway', sans-serif;
    font-size: 12px;
    @media only screen and (max-width: 1240px) {
        font-size: 14px;
        width: 90%;
        display: block;
        margin: 10px auto;
    }
`
export const SpanStay = styled.span`
    color: #6bb9b6;
    text-align: justify;
    font-family: 'Raleway', sans-serif;
    font-size: 12px;
    cursor: pointer;
    text-decoration: underline;
    &:hover{
        color: hsl(0, 0%, 100%);
    }
    @media only screen and (max-width: 1240px) {
        margin-left: 15px;
    }
`