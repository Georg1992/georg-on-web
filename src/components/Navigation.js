import React from "react";
import giflogo from '../images/gif_logo.gif'
import { Navbar, Nav, Image } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'
import '../styles.css'

function Navigation() {



    return (
        <header>
            <div className="nav-container">
                <Navbar bg="light" expand="lg" className="p-1" >
                    <Navbar.Brand>
                        <Image
                            src={giflogo}
                            style={{ maxHeight: '60px', width: 'auto' }}>
                        </Image>
                    </Navbar.Brand>

                    <Nav className={`nav justify-content-center text-center`}>
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/cv">
                            <Nav.Link>CV</Nav.Link>
                        </LinkContainer>

                    </Nav>
                </Navbar>
            </div>
            <div className="divider"/>
        </header>
        
    )
}

export default Navigation