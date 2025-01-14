import React, {useState} from "react"; 
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import './navigation-bar.scss';


export const NavigationBar = ({ user, onLoggedOut, setMovies }) => {
  

  return (
    <Navbar bg="primary" expand="lg"> 
      <Container>
        <Nav.Link className="nav-link" as={Link} to="/">
          Books App
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!user && (
              <>
                <Nav.Link as={Link} to="/login" >
                   Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup" >
                  Signup
                </Nav.Link>
              </>
            )}
            {user && (
              <>
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to="/profile">Settings</Nav.Link>
                <Nav.Link onClick={onLoggedOut}>Logout</Nav.Link>
              </>
            )}
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};