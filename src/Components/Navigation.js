import React from 'react'
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'
import logo from '../images/logo.png'
import '../App.scss'

const Navigation = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="xl" variant="dark" className="navbar">
                <Navbar.Brand href="#home">
                    <img
                        src={logo}
                        width="150"
                        height="50"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                    
                    </Nav>
                    <Nav>
                    <Nav.Link href="#features">Product Catalog</Nav.Link>
                    <Nav.Link href="#pricing">Popular Movie</Nav.Link>
                    <Nav.Link href="#pricing">Shooping Cart</Nav.Link>
                    <Nav.Link href="#pricing">Check Out</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation
