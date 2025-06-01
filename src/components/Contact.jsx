import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { GeoAltFill, TelephoneFill, EnvelopeFill, Facebook, Twitter, Instagram, Pinterest } from 'react-bootstrap-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    
    if (form.checkValidity()) {
      // Here you would typically send the data to your backend
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
    
    setValidated(true);
  };

  return (
    <section className="contact-section py-5 bg-light">
      <Container className="py-4">
        <h2 className="section-title text-center mb-5">
          <span className="text-primary">Contact</span> Us
        </h2>
        
        <Row className="g-4 justify-content-center">
          <Col lg={6} className="pe-lg-4">
            <div className="contact-form-container p-4 p-lg-5 shadow bg-white rounded-3">
              {submitted && (
                <Alert variant="success" onClose={() => setSubmitted(false)} dismissible>
                  Thank you! Your message has been sent successfully.
                </Alert>
              )}
              
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-4" controlId="formName">
                  <Form.Label className="fw-bold">Your Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="py-2 border-2"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide your name.
                  </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group className="mb-4" controlId="formEmail">
                  <Form.Label className="fw-bold">Email Address</Form.Label>
                  <Form.Control
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="py-2 border-2"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                  </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group className="mb-4" controlId="formMessage">
                  <Form.Label className="fw-bold">Message</Form.Label>
                  <Form.Control
                    required
                    as="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Your message"
                    className="py-2 border-2"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your message.
                  </Form.Control.Feedback>
                </Form.Group>
                
                <Button 
                  variant="primary" 
                  type="submit" 
                  className="w-100 py-2 fw-bold"
                >
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>
          
          <Col lg={6} className="ps-lg-4">
            <div className="contact-info-container p-4 p-lg-5 h-100 shadow bg-white rounded-3">
              <h3 className="mb-4 fw-bold">Get in Touch</h3>
              
              <div className="contact-info-item d-flex mb-4">
                <div className="contact-icon bg-primary bg-opacity-10 text-primary p-3 rounded-circle me-3">
                  <GeoAltFill size={24} />
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Our Location</h5>
                  <p className="mb-0 text-muted">123 Fashion Street, Style District, New York, NY 10001</p>
                </div>
              </div>
              
              <div className="contact-info-item d-flex mb-4">
                <div className="contact-icon bg-primary bg-opacity-10 text-primary p-3 rounded-circle me-3">
                  <TelephoneFill size={24} />
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Phone Number</h5>
                  <p className="mb-0 text-muted">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="contact-info-item d-flex mb-4">
                <div className="contact-icon bg-primary bg-opacity-10 text-primary p-3 rounded-circle me-3">
                  <EnvelopeFill size={24} />
                </div>
                <div>
                  <h5 className="fw-bold mb-1">Email Address</h5>
                  <p className="mb-0 text-muted">info@fashionhub.com</p>
                </div>
              </div>
              
              <div className="social-section mt-5">
                <h5 className="fw-bold mb-3">Follow Us</h5>
                <div className="social-links d-flex">
                  <a href="#" className="social-icon me-3 bg-primary bg-opacity-10 text-primary p-3 rounded-circle">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="social-icon me-3 bg-primary bg-opacity-10 text-primary p-3 rounded-circle">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="social-icon me-3 bg-primary bg-opacity-10 text-primary p-3 rounded-circle">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="social-icon bg-primary bg-opacity-10 text-primary p-3 rounded-circle">
                    <Pinterest size={20} />
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;