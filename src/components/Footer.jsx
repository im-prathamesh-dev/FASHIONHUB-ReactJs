import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="mt-5">
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <h5>FASHIONHUB</h5>
            <p className="small">
              Premium clothing brand offering high-quality, sustainable fashion for the modern individual.
            </p>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Home</a></li>
              <li><a href="/products" className="text-white">Products</a></li>
              <li><a href="/about" className="text-white">About Us</a></li>
              <li><a href="/contact" className="text-white">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Newsletter</h5>
            <p className="small">Subscribe to get updates on new arrivals and special offers.</p>
            <div className="d-flex">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Your email" 
              />
              <button className="btn btn-danger ms-2">Subscribe</button>
            </div>
          </Col>
        </Row>
        <hr className="mt-4 mb-3" />
        <Row>
          <Col className="text-center">
            <p className="small mb-0">
              &copy; {new Date().getFullYear()} FASHIONHUB. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;