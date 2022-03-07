import React from 'react'
import { Card } from 'react-bootstrap'
import { CardStyled, DivCard, ImgCard, TextCard, TitleCard } from '../styles/CardStyled'

const CardGrid = () => {
  return (
    <div>
      <DivCard>
        <CardStyled style={{ width: '18rem' }}>
          <ImgCard variant="top" src="https://res.cloudinary.com/david-b/image/upload/v1646188776/AG/3%20sprint/Reto%201/icon-access-anywhere_qmzz0p.svg" />
          <Card.Body>
            <TitleCard>Access your files, anywhere</TitleCard>
            <TextCard>
              The ability to use a smartphone, tablet, or computer to access your account means your
              files follow you everywhere.
            </TextCard>
          </Card.Body>
        </CardStyled>
        <CardStyled style={{ width: '18rem' }}>
          <ImgCard variant="top" src="https://res.cloudinary.com/david-b/image/upload/v1646188778/AG/3%20sprint/Reto%201/icon-security_xeknwn.svg" />
          <Card.Body>
            <TitleCard style={{ marginTop: '-11px' }}>Security you can trust</TitleCard>
            <TextCard>
              2-factor authentication and user-controlled encryption are just a couple of the security
              features we allow to help secure your files.
            </TextCard>
          </Card.Body>
        </CardStyled>
      </DivCard>
      <DivCard>
        <CardStyled style={{ width: '18rem' }}>
          <ImgCard variant="top" src="https://res.cloudinary.com/david-b/image/upload/v1646188779/AG/3%20sprint/Reto%201/icon-collaboration_iljvmq.svg" />
          <Card.Body>
            <TitleCard>Real-time collaboration</TitleCard>
            <TextCard>
              Securely share files and folders with friends, family and colleagues for live collaboration.
              No email attachments required.
            </TextCard>
          </Card.Body>
        </CardStyled>
        <CardStyled style={{ width: '18rem' }}>
          <ImgCard variant="top" src="https://res.cloudinary.com/david-b/image/upload/v1646188776/AG/3%20sprint/Reto%201/icon-any-file_zyfy1x.svg" />
          <Card.Body>
            <TitleCard>Store any type of file</TitleCard>
            <TextCard>
              Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all
              file types to be securely stored and shared.
            </TextCard>
          </Card.Body>
        </CardStyled>
      </DivCard>
    </div>
  )
}

export default CardGrid