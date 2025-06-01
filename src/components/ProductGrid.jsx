import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { products } from '../data';

const ProductGrid = () => {
  return (
    <section className="product-section py-5">
      <div className="container">
        <h2 className="section-title text-center mb-5">Our Products</h2>
        <Row className="g-4">
          {products.map((product) => (
            <Col key={product.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
              <Card className="product-card h-100 border-0 shadow-sm hover-shadow transition">
                <div className="position-relative">
                  <Card.Img 
                    variant="top" 
                    src={product.image} 
                    className="product-img img-fluid"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  {product.isNew && (
                    <span className="badge bg-danger position-absolute top-0 end-0 m-2">NEW</span>
                  )}
                </div>
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="fs-6">{product.name}</Card.Title>
                  <Card.Text className="text-muted small flex-grow-1">
                    {product.description}
                  </Card.Text>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div>
                      <span className="price fw-bold text-danger">₹{product.price.toFixed(2)}</span>
                      {product.oldPrice && (
                        <span className="text-muted text-decoration-line-through ms-2">
                          ₹{product.oldPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                    <Button variant="dark" size="sm">Add to Cart</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default ProductGrid;