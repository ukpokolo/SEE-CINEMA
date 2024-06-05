import React from 'react'
import MovieHero from '../Components/MovieHero/MovieHero'
import Movieinfo from '../Components/MovieInfo/Movieinfo'

function Movie() {
  return (
    <div className='movie'>
        <MovieHero/>
        <Movieinfo/>
    </div>
  )
}

export default Movie