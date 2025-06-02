import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import UserProfilePage from './pages/UserProfilePage';
import LogoLoader  from './components/LogoLoader'; // Import loader component
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  // Simulate loading on initial mount
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2 seconds loader
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LogoLoader />;
  }

  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<UserProfilePage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
