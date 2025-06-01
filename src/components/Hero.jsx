import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <section className="hero-section py-5">
      <Container>
        <Row className="align-items-center">
          <Col lg={5} className="mb-4 mb-lg-0">
            <h1 className="display-4 fw-bold mb-3">Elevate Your Style</h1>
            <p className="lead mb-4">
              Discover premium quality clothing that combines comfort and style for every occasion.
            </p>
            <Button variant="primary" size="lg" className="me-2">
              Shop Now
            </Button>
            <Button variant="outline-dark" size="lg">
              Explore
            </Button>
          </Col>
          <Col lg={7}>
            <img 
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&h=600&q=80" 
              alt="Fashion Hero" 
              className="img-fluid rounded shadow"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;