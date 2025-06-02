// components/LogoLoader.jsx
import React from 'react';
import './LogoLoader.css';
import  { useEffect, useState } from 'react';

const messages = [
  'Curating your wardrobe...',
  'Unfolding timeless styles...',
  'Crafting your signature look...',
  'Sourcing premium trends...',
  'Tailoring elegance to fit you...'
];

const LogoLoader = () => {
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage(prev => (prev + 1) % messages.length);
    }, 2000); // Change message every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="elegant-loader-wrapper">
      <div className="pulse-dot"></div>
      <p className="loader-text fade-text">{messages[currentMessage]}</p>
    </div>
  );
};

export default LogoLoader;
