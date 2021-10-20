import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand className="text-danger fw-bold fs-2" as={Link} to="/home">MediPlus</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="fw-bold" as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link className="fw-bold" as={Link} to="/aboutus">About Us</Nav.Link>
                            <Nav.Link className="fw-bold" as={Link} to="/services">Services</Nav.Link>
                            <Nav.Link className="fw-bold" as={Link} to="/blog">Blog</Nav.Link>

                        </Nav>
                        <Nav>
                            <span className="text-danger">{user.displayName}  </span>
                            {
                                user.email ?
                                    <button onClick={logout}>Log Out</button>
                                    :
                                    <Nav.Link className="fw-bold" as={Link} to="/login">Login</Nav.Link>}

                            {/* <img className="rounded-circle" src={user.photoURL} alt="" /> */}

                            <Nav.Link className="fw-bold" as={Link} to="/register">Register</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;