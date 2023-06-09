import React from 'react';
import { Link } from 'react-router-dom';
import {Nav,Navbar,NavLink} from 'react-bootstrap'; 

export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav className='nav'>
          <NavLink eventKey="1" as={Link} to="/">Home</NavLink>
          <NavLink eventKey="2" as={Link} to="/about">About</NavLink>
          <NavLink eventKey="3" as={Link} to="/contact">Contact</NavLink>
          <NavLink eventKey="4" as={Link} to="/signin">Sign in</NavLink>
          <NavLink eventKey="5" as={Link} to="/signup">Sign up</NavLink>
          <NavLink eventKey="6" as={Link} to="/products">Products</NavLink>


        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}