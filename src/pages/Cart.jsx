import React from 'react';
import { Container, Table, Button, Row, Col, Badge, Card } from 'react-bootstrap';
import { BsTrash, BsArrowLeft } from 'react-icons/bs';
import { FiPlus, FiMinus } from 'react-icons/fi';

const Cart = () => {
  // Sample cart data
  const cartItems = [
    { id: 1, name: 'Classic White Tee', price: 29.99, quantity: 2, image: 'https://image.uniqlo.com/UQ/ST3/in/imagesgoods/474244/item/ingoods_00_474244_3x4.jpg?width=369' },
    { id: 2, name: 'Denim Jacket', price: 89.99, quantity: 1, image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSWs9BXv8T8qpDPoaHc-bkXncQyGR-3t_EjjMnyTuJoBsnp9MgKSdX8FsFaf9240zUfGNHDiGpXBE-xHBQb5QBRYP8bNpsS75bO9eAXmnc' },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shippingFee = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shippingFee;

  return (
    <Container className="py-4 py-lg-5">
      <Button variant="outline-secondary" className="mb-4" size="sm">
        <BsArrowLeft className="me-2" /> Continue Shopping
      </Button>
      
      <h2 className="mb-4 fw-bold">Your Cart</h2>
      
      {cartItems.length > 0 ? (
        <Row>
          <Col lg={8} className="mb-4 mb-lg-0">
            <Card className="border-0 shadow-sm">
              <Card.Body className="p-0">
                <Table borderless responsive className="mb-0">
                  <thead className="bg-light">
                    <tr>
                      <th className="ps-4">Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map(item => (
                      <tr key={item.id} className="border-bottom">
                        <td className="ps-4 py-3">
                          <div className="d-flex align-items-center">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              width="80" 
                              className="rounded me-3" 
                              style={{objectFit: 'cover'}}
                            />
                            <span className="fw-medium">{item.name}</span>
                          </div>
                        </td>
                        <td className="align-middle">${item.price.toFixed(2)}</td>
                        <td className="align-middle">
                          <div className="d-flex align-items-center">
                            <Button variant="outline-secondary" size="sm" className="p-1">
                              <FiMinus size={14} />
                            </Button>
                            <Badge bg="light" text="dark" className="mx-2 px-2 py-1">
                              {item.quantity}
                            </Badge>
                            <Button variant="outline-secondary" size="sm" className="p-1">
                              <FiPlus size={14} />
                            </Button>
                          </div>
                        </td>
                        <td className="align-middle fw-medium">
                          ${(item.price * item.quantity).toFixed(2)}
                        </td>
                        <td className="align-middle pe-4">
                          <Button variant="outline-danger" size="sm" className="p-1">
                            <BsTrash size={14} />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
          
          <Col lg={4}>
            <Card className="border-0 shadow-sm">
              <Card.Body>
                <h5 className="mb-3 fw-bold">Order Summary</h5>
                
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-muted">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-muted">Shipping</span>
                    <span>{shippingFee === 0 ? 'FREE' : `$${shippingFee.toFixed(2)}`}</span>
                  </div>
                  {subtotal < 50 && (
                    <div className="text-end small text-success">
                      Spend ${(50 - subtotal).toFixed(2)} more for free shipping!
                    </div>
                  )}
                </div>
                
                <hr />
                
                <div className="d-flex justify-content-between mb-4">
                  <span className="fw-bold">Total</span>
                  <span className="fw-bold">${total.toFixed(2)}</span>
                </div>
                
                <Button 
                  variant="primary" 
                  size="lg" 
                  className="w-100 py-2 fw-medium"
                >
                  Proceed to Checkout
                </Button>
                
                <div className="text-center mt-3 small text-muted">
                  or <a href="/" className="text-decoration-none">Continue Shopping</a>
                </div>
              </Card.Body>
            </Card>
            
            <div className="mt-3 p-3 bg-light rounded small">
              <h6 className="fw-medium mb-2">Secure Checkout</h6>
              <p className="mb-0">
                Your payment information is processed securely. We don't store 
                your credit card details.
              </p>
            </div>
          </Col>
        </Row>
      ) : (
        <div className="text-center py-5">
          <div className="mb-4" style={{ fontSize: '4rem' }}>🛒</div>
          <h4 className="fw-bold mb-3">Your cart is empty</h4>
          <p className="text-muted mb-4">
            Looks like you haven't added anything to your cart yet
          </p>
          <Button 
            href="/products" 
            variant="primary" 
            size="lg"
            className="px-4 py-2 fw-medium"
          >
            Browse Products
          </Button>
        </div>
      )}
    </Container>
  );
};

export default Cart;