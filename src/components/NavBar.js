import React from 'react'
import { Container, Navbar} from 'react-bootstrap'
import { LogoNav, NavbarStyled, NavLinkStyled } from '../styles/NavBarStyled'

const NavBar = () => {
    return (
        <div>
            <NavbarStyled>
                <Container fluid>
                    <Navbar.Brand href="#home">
                        <LogoNav
                            src="https://res.cloudinary.com/david-b/image/upload/v1646188779/AG/3%20sprint/Reto%201/logo_wbbohv.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end"> 
                        <NavLinkStyled> Features</NavLinkStyled>
                        <NavLinkStyled> Team</NavLinkStyled>
                        <NavLinkStyled> Sign in</NavLinkStyled> 
                    </Navbar.Collapse>
                </Container>
            </NavbarStyled>
        </div>
    )
}

export default NavBar