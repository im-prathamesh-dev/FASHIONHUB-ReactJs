import React from 'react';
// import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { sliderImages } from '../data';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <section className="slider-section mb-5">
      <Slider {...settings}>
        {sliderImages.map((slide) => (
          <div key={slide.id} className="slider-item">
            <div 
              className="slider-image" 
              style={{ 
                backgroundImage: `url(${slide.url})`,
                height: '500px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
              }}
            >
              <div className="slider-overlay d-flex align-items-center">
                <div className="container text-white">
                  <h2 className="display-4 fw-bold">{slide.title}</h2>
                  <p className="lead">{slide.subtitle}</p>
                  <button className="btn btn-light btn-lg mt-3">Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ImageSlider;