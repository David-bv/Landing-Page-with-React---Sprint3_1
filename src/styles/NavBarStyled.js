import { Navbar, NavLink } from "react-bootstrap";
import styled from "styled-components";

export const NavbarStyled = styled(Navbar)`
    background-color: hsl(218, 28%, 13%);
    padding-top: 20px;
    @media only screen and (max-width: 600px) {
        font-size: 12px;
        text-align: end;

    }
`

export const NavLinkStyled = styled(NavLink)`
    color: hsl(0, 0%, 100%);
    &:hover {
        text-decoration: underline;
        color: hsl(0, 0%, 100%);
    }
`

export const LogoNav = styled.img`
    width: 120px;
    height: 40px;
    margin-left: 20px;
    @media only screen and (max-width: 600px) {
        width: 60px;
        height: 25px;
        margin-left: 8px;;
        margin-top: 5px;

    }
`