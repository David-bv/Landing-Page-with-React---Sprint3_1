import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

export const DivEarly = styled(Container)`
    background-color:#1c2230;
    text-align:center;
    display:block ;
    margin:0 auto;
    width:51% ;
    height:250px;
    color: hsl(0, 0%, 100%);
    font-family: 'Open Sans', sans-serif;
    font-size:13px;
    border-radius:10px;
    position:relative;
    top:6rem ;
    @media only screen and (max-width: 600px) {
        width:92% ;
        position:relative;
        top:6rem ;
        height:auto ;
    }
`

export const H2Early = styled.h2`
    color: hsl(0, 0%, 100%);
    font-size: 1.7rem ;
    font-weight: 700;
    padding:2rem 0 1rem;
    @media only screen and (max-width: 600px) {
        font-size: 1.2rem ;
    }
`
export const H6Early = styled.h6`
    color: hsl(0, 0%, 100%);
    font-family: 'Raleway', sans-serif;
    font-size: 14px;
    font-weight: 400;
    width:80% ;
    margin:20px auto;
    @media only screen and (max-width: 600px) {
        font-size: 12px;
        width: 84%;
        display: block;
        margin: 20px auto;
    }
`

export const EarlyInput = styled.input`
    height: 35px;
    border-radius: 25px;
    max-width:400px;
    width:100%;
    margin: 0 10px;
    @media only screen and (max-width: 600px) {
        width:92% ;
        margin:1rem auto;
        height: 50px;
    }
`

export const EarlyButton = styled.button`
    background-color:  hsl(176, 68%, 64%);
    display: inline-block;
    height: 35px;
    color: hsl(0, 0%, 100%);
    border: none;
    width: 24%;
    max-width: 450px;
    font-size: 14px;
    margin:16px 10px;
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
    @media only screen and (max-width: 600px) {
        width:92% ;
        margin:1rem auto 2rem;
        height: 50px;
    }
`

export const DivFooter = styled(Container)`
    background-color:#0c1524;
    display:block ;
    margin:0 auto;
    padding-top:10rem ;
    color: hsl(0, 0%, 100%);
    font-family: 'Open Sans', sans-serif;
    font-size:13px ;
    @media only screen and (max-width: 600px) {
        padding-top:11rem ;
    }
`

export const FooterImg = styled.img`
    margin-left: 10.3rem;
    margin-bottom:2rem;
    width:110px ;
    @media only screen and (max-width: 600px) {
        margin-left: 5px;
    }
`

export const TextBrand = styled.p`
    width: 300px;
    color: hsl(0, 0%, 100%);
    font-size: 14px;
`

export const TextList = styled.li`
    color: hsl(0, 0%, 100%);
    list-style-type: none;
    width: 138px;
    background-color:blue;
`
export const SpanList = styled.span`
    color: red;
`

export const RowFooter = styled(Row)`
    display:flex ;
    justify-content:center ;
    padding-bottom:2rem;
    
`

export const IconCol = styled(Col)`
    width:130px ;
`