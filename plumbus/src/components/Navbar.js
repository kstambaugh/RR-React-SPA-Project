import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import logo from '../todolistlogo.png'



export const MyNav = () => {
    return (
        <>
            <Navbar bg="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width='200px'
                            alt="logo"
                        />
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#home">ToDo</Nav.Link>
                        <Nav.Link href="#chores">Chores</Nav.Link>
                        <Nav.Link href="#self-care">Self Care</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}