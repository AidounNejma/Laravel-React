import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

function MyNav() {

    return (
        <>
            <Navbar bg="transparent" variant="dark">
                <Container>
                    <Navbar.Brand href="/">Boite à idées</Navbar.Brand>
                    <Nav className=" float-right">
                        <Nav.Link href="/">Accueil</Nav.Link>
                        <Nav.Link href="add-ideas">Ajouter une idée</Nav.Link>
                        <Nav.Link href="#login">Connexion</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default MyNav;
