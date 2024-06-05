import React from 'react'
import './MovieHero.css'
import apes from '../Assets/apes.jpg'

function MovieHero() {
  return (
    <div className='movieHero'>
        <div className="mh-background-overlay">
        <div className="mh-text">
        <p className="mh-genre">
            Thriller, Horror
        </p>
        <p className="mh-title">Locked In</p>
        <p className="mh-summary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod illo pariatur, placeat, aliquam a sapiente saepe dolores at culpa quam beatae iure ducimus laudantium voluptates doloribus ex asperiores ipsam architecto!</p>
        <div className="mh-bottom">
            <p className="mh-rating">
                18
            </p>
            <button>Play trailer</button>
        </div>
        </div>
        </div>
        
        
    </div>
  )
}

export default MovieHero