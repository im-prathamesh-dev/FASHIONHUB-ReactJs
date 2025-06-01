import React, { useState } from 'react';
import {
  Container, Card,  Row, Col, Tab, Nav, Image
} from 'react-bootstrap';
import {
  FiUser, FiShoppingBag, FiHeart, FiMapPin,
  FiCreditCard, FiSettings, FiLogOut
} from 'react-icons/fi';

const Profile = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const user = {
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    joinedDate: 'January 2023',
    orders: 5,
    wishlist: 12
  };

  return (
    <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
      <Container className="py-5">
        <Row className="g-4">
          {/* Sidebar */}
          <Col lg={3}>
            <Card className="h-100 shadow-sm">
              <Card.Body className="text-center d-flex flex-column">
                <Image
  src={user.avatar}
  roundedCircle
  width={100}
  height={100}
  className="mb-3 border d-block mx-auto"
/>

                <h5>{user.name}</h5>
                <p className="text-muted small">{user.email}</p>
                <p className="text-muted small">Joined: {user.joinedDate}</p>

                <div className="d-flex justify-content-around my-3">
                  <div>
                    <h6>{user.orders}</h6>
                    <small>Orders</small>
                  </div>
                  <div>
                    <h6>{user.wishlist}</h6>
                    <small>Wishlist</small>
                  </div>
                </div>

                <Nav variant="pills" className="flex-column text-start">
                  <Nav.Item>
                    <Nav.Link eventKey="profile"><FiUser className="me-2" /> Profile</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="orders"><FiShoppingBag className="me-2" /> My Orders</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="wishlist"><FiHeart className="me-2" /> Wishlist</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="addresses"><FiMapPin className="me-2" /> Addresses</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="payments"><FiCreditCard className="me-2" /> Payment Methods</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="settings"><FiSettings className="me-2" /> Settings</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="mt-auto">
                    <Nav.Link eventKey="logout" className="text-danger"><FiLogOut className="me-2" /> Logout</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Card.Body>
            </Card>
          </Col>

          {/* Content */}
          <Col lg={9}>
            <Tab.Content>
              <Tab.Pane eventKey="profile">
                <h4>Profile</h4>
                <p>This is your profile tab content.</p>
              </Tab.Pane>

              <Tab.Pane eventKey="orders">
                <h4>My Orders</h4>
                <p>List of your recent orders will appear here.</p>
              </Tab.Pane>

              <Tab.Pane eventKey="wishlist">
                <h4>Wishlist</h4>
                <p>Your saved wishlist items appear here.</p>
              </Tab.Pane>

              <Tab.Pane eventKey="addresses">
                <h4>Addresses</h4>
                <p>Manage your shipping and billing addresses here.</p>
              </Tab.Pane>

              <Tab.Pane eventKey="payments">
                <h4>Payment Methods</h4>
                <p>Your saved credit/debit cards appear here.</p>
              </Tab.Pane>

              <Tab.Pane eventKey="settings">
                <h4>Settings</h4>
                <p>Change your password or account preferences here.</p>
              </Tab.Pane>

              <Tab.Pane eventKey="logout">
                <h4>Logout</h4>
                <p>You have been logged out.</p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Container>
    </Tab.Container>
  );
};

export default Profile;
