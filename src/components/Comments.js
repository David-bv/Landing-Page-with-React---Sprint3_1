import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { ContainerComment, DivBox, ImgComment, ImgDiv, SubTitleComment, TitleComment } from '../styles/CommentsStyle'

const Comments = () => {
  return (
    <div>

      <ContainerComment fluid>
      <ImgDiv src='https://res.cloudinary.com/david-b/image/upload/v1646188776/AG/3%20sprint/Reto%201/bg-quotes_r8a36i.png' alt=''/>
        <Row>
          <DivBox xs={12} md={4}>
            <Row>
              <Col xs={12} md={12}>
                <p >Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
                  become a well-oiled collaboration machine.</p>
              </Col>
              <Col>
                <Row>
                  <Col xs={3} md={2}>
                    <ImgComment src='https://res.cloudinary.com/david-b/image/upload/v1646188779/AG/3%20sprint/Reto%201/profile-1_krx6yh.jpg' alt='' />
                  </Col>
                  <Col xs={9} md={10}>
                    <TitleComment>Satish Patel</TitleComment>
                    <SubTitleComment>Founder & CEO, Huddle</SubTitleComment>
                  </Col>
                </Row>
              </Col>
            </Row>
          </DivBox>
          <DivBox xs={12} md={4}>
            <Row>
              <Col xs={12} md={12}>
                <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
                  become a well-oiled collaboration machine.</p>
              </Col>
              <Col>
                <Row>
                  <Col xs={3} md={2}>
                    <ImgComment src='https://res.cloudinary.com/david-b/image/upload/v1646188779/AG/3%20sprint/Reto%201/profile-2_cj6nhc.jpg' alt='' />
                  </Col>
                  <Col xs={9} md={10}>
                    <TitleComment>Satish Patel</TitleComment>
                    <SubTitleComment>Founder & CEO, Huddle</SubTitleComment>
                  </Col>
                </Row>
              </Col>
            </Row>
          </DivBox>
          <DivBox xs={12} md={4}>
            <Row>
              <Col xs={12} md={12}>
                <p>Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has
                  become a well-oiled collaboration machine.</p>
              </Col>
              <Col>
                <Row>
                  <Col xs={3} md={2}>
                    <ImgComment src='https://res.cloudinary.com/david-b/image/upload/v1646188779/AG/3%20sprint/Reto%201/profile-3_ax5c09.jpg' alt='' />
                  </Col>
                  <Col xs={9} md={10}>
                    <TitleComment>Satish Patel</TitleComment>
                    <SubTitleComment>Founder & CEO, Huddle</SubTitleComment>
                  </Col>
                </Row>
              </Col>
            </Row>
          </DivBox>
        </Row>
      </ContainerComment>
    </div>
  )
}

export default Comments