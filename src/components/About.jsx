import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <section className="about-section py-5 bg-light">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=1000&q=80" 
              alt="About Us" 
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col lg={6}>
            <h2 className="section-title">About Our Brand</h2>
            <p className="lead">
              We believe in creating fashion that's sustainable, ethical, and timeless.
            </p>
            <p>
              Founded in 2010, our brand has grown from a small boutique to an internationally
              recognized name in fashion. We're committed to quality craftsmanship and fair
              labor practices.
            </p>
            <p>
              Our designs blend contemporary trends with classic styles to create pieces
              that will stay in your wardrobe for years to come.
            </p>
            <button className="btn btn-outline-dark">Learn More</button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;