import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav.Link className='text-white' as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link className='text-white' as={Link} to="/orders">Orders</Nav.Link>
                    <Nav.Link className='text-white' as={Link} to="/inventory">Inventory</Nav.Link>
                    <Nav.Link className='text-white' as={Link} to="/login">Login</Nav.Link>
                    <Nav.Link className='text-white' as={Link} to="/about">About</Nav.Link>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;