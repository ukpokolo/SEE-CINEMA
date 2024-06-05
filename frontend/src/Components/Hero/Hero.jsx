import React, { useState, useEffect } from 'react';
import './Hero.css';
import upHero from '../Assets/upHero.jpg';
import barbie from '../Assets/barbie.jpg';
import indianajones from '../Assets/indianajones.jpg';
import cyberpunk from '../Assets/cyberpunk.jpg';

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [upHero, barbie, indianajones, cyberpunk];
  const genres = ["Adventure, Comedy, Family", "Another Genre", "Yet Another Genre", "One More Genre"];
  const movieNames = ["Up", "Other Movie 1", "Other Movie 2", "Other Movie 3"];
  const summaries = [
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta iure distinctio, reprehenderit officia porro, excepturi, quo perferendis labore rerum nulla quod quia. Error vel molestiae quia! Totam, neque quaerat. Quod.",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta iure distinctio, reprehenderit officia porro, excepturi, quo perferendis labore rerum nulla quod quia. Error vel molestiae quia! Totam, neque quaerat. Quod.",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta iure distinctio, reprehenderit officia porro, excepturi, quo perferendis labore rerum nulla quod quia. Error vel molestiae quia! Totam, neque quaerat. Quod.",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta iure distinctio, reprehenderit officia porro, excepturi, quo perferendis labore rerum nulla quod quia. Error vel molestiae quia! Totam, neque quaerat. Quod."
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='hero'>
      <div className="hero-image">
        <img src={images[currentImageIndex]} alt="" />
      </div>
      <div className="hero-text">
        <div className="hero-genre">
          <p>{genres[currentImageIndex]}</p>
        </div>
        <div className="hero-movieName"><h2>{movieNames[currentImageIndex]}</h2></div>
        <div className="hero-summary">{summaries[currentImageIndex]}</div>
        <div className="hero-text-bottom">
          <div className="hero-pg">
            <p>PG 13</p>
          </div>
          <div className="hero-trailer">
            <button>Play Trailer</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
