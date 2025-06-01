import React from 'react';
import About from '../components/About';
import { Container, Row, Col } from 'react-bootstrap';
// import { Container } from 'react-bootstrap';

const AboutPage = () => {
  return (
    <div className="py-5">
      <Container>
        <About />
        <section className="py-5">
          <h2 className="section-title text-center mb-5">Our Story</h2>
          <p className="lead text-center">
            From humble beginnings to a global brand, our journey has been about passion and dedication to quality.
          </p>
          <div className="mt-5">
            <Row>
              <Col md={4} className="text-center mb-4">
                <div className="p-4 bg-white rounded shadow">
                  <h3>2010</h3>
                  <p>Founded in a small studio</p>
                </div>
              </Col>
              <Col md={4} className="text-center mb-4">
                <div className="p-4 bg-white rounded shadow">
                  <h3>2015</h3>
                  <p>First international store opened</p>
                </div>
              </Col>
              <Col md={4} className="text-center mb-4">
                <div className="p-4 bg-white rounded shadow">
                  <h3>2023</h3>
                  <p>Recognized as a top sustainable brand</p>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default AboutPage;