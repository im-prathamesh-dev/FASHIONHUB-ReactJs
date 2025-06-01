import React from 'react';
import { Navbar, Nav, Container, Button, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsCart3, BsPerson } from 'react-icons/bs';

const Header = () => {
  // Temporary cart count - replace with your state management
  const cartItemsCount = 3;
  // Temporary login state - replace with your auth logic
  const isLoggedIn = true;

  return (
    <Navbar expand="lg" className="py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-3">
          FASHION<span className="text-danger">HUB</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            
            {/* Login/User Profile Button */}
            {isLoggedIn ? (
              <Nav.Link as={Link} to="/profile" className="mx-2">
                <BsPerson size={20} />
              </Nav.Link>
            ) : (
              <Button 
                variant="outline-primary" 
                as={Link} 
                to="/login" 
                className="ms-3"
              >
                Login
              </Button>
            )}
            
            {/* Shopping Cart with Badge */}
            <Nav.Link as={Link} to="/cart" className="position-relative mx-2">
              <BsCart3 size={20} />
              {cartItemsCount > 0 && (
                <Badge 
                  pill 
                  bg="danger" 
                  className="position-absolute top-0 start-100 translate-middle"
                  style={{ fontSize: '0.6rem' }}
                >
                  {cartItemsCount}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;