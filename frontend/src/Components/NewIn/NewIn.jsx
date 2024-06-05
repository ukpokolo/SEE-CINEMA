import React, { useState, useEffect, useRef } from 'react';
import './NewIn.css';
import movie1 from '../Assets/movie1.jpg';
import movie2 from '../Assets/movie2.jpg';
import movie3 from '../Assets/movie3.jpg';

const allMovies = [
  { id: 1, image: movie1, title: "Movie 1", releaseDate: "14 April 2024" },
  { id: 2, image: movie2, title: "Movie 2", releaseDate: "15 April 2024" },
  { id: 3, image: movie3, title: "Movie 3", releaseDate: "16 April 2024" },
 
];

function NewIn() {
  const [movies, setMovies] = useState(allMovies);
  const containerRef = useRef(null);

  // Infinite scroll effect
  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        // Append movies to create an infinite loop effect
        setMovies((prevMovies) => [...prevMovies, ...allMovies]);
      }
    };

    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Click-and-drag scrolling
  useEffect(() => {
    const container = containerRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDown = true;
      container.classList.add('active');
      startX = e.pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
      document.body.classList.add('no-select'); // Disable text selection
    };

    const handleMouseLeave = () => {
      isDown = false;
      container.classList.remove('active');
      document.body.classList.remove('no-select'); // Enable text selection
    };

    const handleMouseUp = () => {
      isDown = false;
      container.classList.remove('active');
      document.body.classList.remove('no-select'); // Enable text selection
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 3; // Adjust scrolling speed
      container.scrollLeft = scrollLeft - walk;
    };

    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='newin'>
      <h1>New In</h1>
      <hr />
      <div className="newin-container" ref={containerRef}>
        {movies.map((movie, index) => (
          <div key={index} className="newin-box">
            <div className="newin-box-hover">
              <img src={movie.image} alt={movie.title} />
              <div className="newin-box-text">
                <div className="newin-trailer">
                  {/* Add trailer content here if needed */}
                </div>
                <h3>Read More</h3>
                <p>Released: {movie.releaseDate}</p>
              </div>
            </div>
            <h3 className='newin-box-title'>{movie.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewIn;
