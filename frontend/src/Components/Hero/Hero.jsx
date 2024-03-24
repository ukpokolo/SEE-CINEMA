import React from 'react'
import './Hero.css'
import upHero from '../Assets/upHero.jpg'

function Hero() {
  return (
    <div className='hero'>
        <div className="hero-image">
        <img  src={upHero} alt="" />
        </div>
        <div className="hero-text">
        <div className="hero-genre">
            <p>Adventure, Comedy, Family</p>
        </div>
        <div className="hero-movieName"><h2>Up</h2></div>
        <div className="hero-summary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta iure distinctio, reprehenderit officia porro, excepturi, quo perferendis labore rerum nulla quod quia. Error vel molestiae quia! Totam, neque quaerat. Quod.</div>
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
  )
}

export default Hero