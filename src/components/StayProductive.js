import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { H2Stay, H6Stay, SpanStay, StayImg } from '../styles/StayprodStyled'

const StayProductive = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={6} md={6} >
                        <StayImg src='https://res.cloudinary.com/david-b/image/upload/v1646188778/AG/3%20sprint/Reto%201/illustration-stay-productive_qtf0fz.png' alt='' />
                    </Col>
                    <Col sm={6} md={6}>
                        <H2Stay>Stay productive, wherever you are</H2Stay>
                        <H6Stay>
                            Never let location be an issue when accessing your files. Fylo has you covered for all of your file
                            storage needs.
                        </H6Stay>
                        <H6Stay>
                            Securely share files and folders with friends, family and colleagues for live collaboration. No email
                            attachments required.
                        </H6Stay>
                        <SpanStay>See how Fylo works <img src={'https://res.cloudinary.com/david-b/image/upload/v1646188777/AG/3%20sprint/Reto%201/icon-arrow_gammso.svg'} alt=''/></SpanStay>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default StayProductive