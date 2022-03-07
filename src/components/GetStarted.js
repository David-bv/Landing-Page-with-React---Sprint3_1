import React from 'react'
import { Container } from 'react-bootstrap'
import { DivMain, GetStartButton, H2Styled, H6Styled, StartedImg } from '../styles/GetStartedStyled'

const GetStarted = () => {
    return (
        <DivMain>
            <Container>
                <StartedImg src='https://res.cloudinary.com/david-b/image/upload/v1646188778/AG/3%20sprint/Reto%201/illustration-intro_ibqodj.png' alt='' />
                <H2Styled>All your files in one secure location, accessible anywhere.</H2Styled>
                <H6Styled>Fylo stores all your most important files in one secure location. Access them wherever
                you need, share and collaborate with friends family, and co-workers.</H6Styled>
                <GetStartButton>Get Started</GetStartButton>
            </Container>
        </DivMain>
    )
}

export default GetStarted