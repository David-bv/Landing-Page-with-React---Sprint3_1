import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { MdPhoneInTalk } from "react-icons/md";
import { GrMail } from "react-icons/gr";
import { MdLocationPin } from "react-icons/md";
import { DivEarly, DivFooter, EarlyButton, EarlyInput, FooterImg, H2Early, H6Early, IconCol, RowFooter, TextBrand } from '../styles/FooterStyled';



const Footer = () => {
  return (
    <div>
      <DivEarly>
        <H2Early>Get early access today</H2Early>
        <H6Early>
          It only takes a minute to sign up and our free starter tier is extremely generous. If you have any
          questions, our support team would be happy to help you.
        </H6Early>
        <div>
          <EarlyInput value={'johnapplesedd#mail.com'}/>
          <EarlyButton>Get Started For Free</EarlyButton>
        </div>
      </DivEarly>
      <DivFooter fluid>
        <div>
          <Col>
            <FooterImg src='https://res.cloudinary.com/david-b/image/upload/v1646188779/AG/3%20sprint/Reto%201/logo_wbbohv.svg' alt='' />
          </Col>
        </div>
        <Container>
          <RowFooter>
            <Col xs={11} md={4} lg={4} className='me-3'>
              <Row>
                <Col xs={1} md={1} lg={1}><MdLocationPin className='IconLocation' /></Col>
                <Col xs={11} md={11} lg={11}>
                  <TextBrand>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                    dolore magna aliqua
                  </TextBrand>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={2} lg={2} className='me-3'>
              <ul className='list-unstyled'>
                <li><MdPhoneInTalk className='IconTwo' />+1-543-123-4567</li>
                <li> <GrMail className='IconTwo' />example@fylo.com</li>
              </ul>
            </Col>
            <Col xs={12} md={1} lg={1} className='mx-4'>
              <ul className='list-unstyled'>
                <li>About Us</li>
                <li> Jobs</li>
                <li>Press</li>
                <li>Blog</li>
              </ul>
            </Col>
            <Col xs={11} md={1} lg={1} className='me-4'>
              <ul className='list-unstyled'>
                <li>Contact Us</li>
                <li>Terms</li>
                <li>Privacy</li>
              </ul>
            </Col>
            <IconCol xs={12} md={2} lg={2}>
              <TiSocialFacebook className='Icon' />
              <TiSocialTwitter className='Icon' />
              <IoLogoInstagram className='Icon' />
            </IconCol>
          </RowFooter>
        </Container>

      </DivFooter>
    </div>
  )
}

export default Footer