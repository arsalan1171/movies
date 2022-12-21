import React from 'react';
import './Navigation.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar collapseOnSelect className='p-0 navbar-sticky' bg='warning' variant='light' expand='sm'>
      <Container>
        <Navbar.Brand className='bg-secondary'>
          <p className='m-2 text-light'> Awesome Movies</p>
        </Navbar.Brand>
        <Navbar.Toggle
          className='border-0'
          aria-controls='responsive-navbar-nav'
        />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav>
            <Nav.Link eventKey="1" as={Link} to={'/'}>
              Home
            </Nav.Link>
            <Nav.Link eventKey="2" as={Link} to={'/movies'}>
              Popular Movies
            </Nav.Link>
            <Nav.Link eventKey="3" as={Link} to={'/about'}>
              About the Developer
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
