import { Col, Container } from "react-bootstrap";
import styled from "styled-components";

export const ContainerComment = styled(Container)`
    width: 80%;
    margin: 5rem auto 4rem;
    padding-bottom:1rem ;
    @media only screen and (max-width: 600px) {
        width: 100%;
        margin: 5rem auto 1rem;
        padding-bottom:1rem ;
    }
`
export const ImgDiv = styled.img`
    width: 60px;
    position: relative;
    z-index: 1;
    top: 20px;
    left: 65px;
    @media only screen and (max-width: 600px) {
        width: 25px;
        height: 25px;
        top: 11px;
        left: 33px;
    }
`

export const DivBox = styled(Col)`
    z-index: 2;
    background-color: hsl(219, 30%, 18%);
    margin: 10px auto;
    border:none;
    max-width: 340px;
    padding: 35px 25px 15px;
    color: hsl(0, 0%, 100%);
    font-family: 'Raleway', sans-serif;
    font-size: 14px;
    border-radius: 6px;
    @media only screen and (max-width: 1342px) {
        display: block;
        width: 290px;
        padding: 25px;
        margin: 10px auto;
        font-size: 13px;
    }
`

export const ImgComment = styled.img`
    width: 30px;
    border-radius: 50px;
    margin: auto;
    display: block;
    @media only screen and (max-width: 600px) {
    }
`

export const TitleComment = styled.h5`
    font-size: 12px;
    margin-left:-15px;
    margin-bottom: 0;
    color: hsl(0, 0%, 100%);
    font-weight: 700;
    font-family: 'Raleway', sans-serif;
    @media only screen and (max-width: 600px) {
        margin-left: -20px;
    }
`

export const SubTitleComment = styled.h6`
    font-size: 9px;
    border-radius: 50px;
    margin-left:-15px;
    @media only screen and (max-width: 600px) {
        margin-left:-20px;
        font-size: 12px;
    }
`