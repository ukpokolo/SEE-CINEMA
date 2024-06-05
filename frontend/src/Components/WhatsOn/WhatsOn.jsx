import React, { useState, useEffect } from 'react';
import './WhatsOn.css';
import movie1 from '../Assets/movie1.jpg';
import movie2 from '../Assets/movie2.jpg';
import movie3 from '../Assets/movie3.jpg';

function WhatsOn() {
  const [selectedDay, setSelectedDay] = useState('');
  const [currentDay, setCurrentDay] = useState('');

  // Get current day
  const today = new Date();
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const currentDayName = daysOfWeek[today.getDay()];

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  // Update current day when the component mounts
  useEffect(() => {
    setCurrentDay(currentDayName);
    setSelectedDay(currentDayName); // Set selected day to current day
  }, []);

  const moviesByDay = {
    MON: [
      {
        image: movie1,
        title: 'Daylight',
        genres: 'Thriller, Horror',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, excepturi voluptas rem officia soluta molestiae dolorum eum aliquid, incidunt libero suscipit ipsum consectetur illo obcaecati praesentium ad, velit maxime! Explicabo?',
        duration: '155 mins',
        rating: '15',
        viewingTimes: ['3:45pm', '7:45pm']
      },
      {
        image: movie2,
        title: 'Daylight',
        genres: 'Thriller, Horror',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, excepturi voluptas rem officia soluta molestiae dolorum eum aliquid, incidunt libero suscipit ipsum consectetur illo obcaecati praesentium ad, velit maxime! Explicabo?',
        duration: '155 mins',
        rating: '15',
        viewingTimes: ['3:45pm', '7:45pm']
      },
      {
        image: movie3,
        title: 'Daylight',
        genres: 'Thriller, Horror',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, excepturi voluptas rem officia soluta molestiae dolorum eum aliquid, incidunt libero suscipit ipsum consectetur illo obcaecati praesentium ad, velit maxime! Explicabo?',
        duration: '155 mins',
        rating: '15',
        viewingTimes: ['3:45pm', '7:45pm']
      },
      // Add more movies for Monday as needed
    ],
    TUE: [
      {
        image: movie3,
        title: 'Daylight',
        genres: 'Thriller, Horror',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, excepturi voluptas rem officia soluta molestiae dolorum eum aliquid, incidunt libero suscipit ipsum consectetur illo obcaecati praesentium ad, velit maxime! Explicabo?',
        duration: '155 mins',
        rating: '15',
        viewingTimes: ['3:45pm', '7:45pm']
      },
      {
        image: movie2,
        title: 'Daylight',
        genres: 'Thriller, Horror',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, excepturi voluptas rem officia soluta molestiae dolorum eum aliquid, incidunt libero suscipit ipsum consectetur illo obcaecati praesentium ad, velit maxime! Explicabo?',
        duration: '155 mins',
        rating: '15',
        viewingTimes: ['3:45pm', '7:45pm']
      },
      {
        image: movie1,
        title: 'Daylight',
        genres: 'Thriller, Horror',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, excepturi voluptas rem officia soluta molestiae dolorum eum aliquid, incidunt libero suscipit ipsum consectetur illo obcaecati praesentium ad, velit maxime! Explicabo?',
        duration: '155 mins',
        rating: '15',
        viewingTimes: ['3:45pm', '7:45pm']
      },
      // Add more movies for Tuesday as needed
    ],
    WED: [
      {
        image: movie2,
        title: 'Daylight',
        genres: 'Thriller, Horror',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, excepturi voluptas rem officia soluta molestiae dolorum eum aliquid, incidunt libero suscipit ipsum consectetur illo obcaecati praesentium ad, velit maxime! Explicabo?',
        duration: '155 mins',
        rating: '15',
        viewingTimes: ['3:45pm', '7:45pm']
      },
      {
        image: movie1,
        title: 'Daylight',
        genres: 'Thriller, Horror',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, excepturi voluptas rem officia soluta molestiae dolorum eum aliquid, incidunt libero suscipit ipsum consectetur illo obcaecati praesentium ad, velit maxime! Explicabo?',
        duration: '155 mins',
        rating: '15',
        viewingTimes: ['3:45pm', '7:45pm']
      },
      {
        image: movie3,
        title: 'Daylight',
        genres: 'Thriller, Horror',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, excepturi voluptas rem officia soluta molestiae dolorum eum aliquid, incidunt libero suscipit ipsum consectetur illo obcaecati praesentium ad, velit maxime! Explicabo?',
        duration: '155 mins',
        rating: '15',
        viewingTimes: ['3:45pm', '7:45pm']
      },
      // Add more movies for Tuesday as needed
    ],
    THU: [
      {
        image: movie3,
        title: 'Daylight',
        genres: 'Thriller, Horror',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, excepturi voluptas rem officia soluta molestiae dolorum eum aliquid, incidunt libero suscipit ipsum consectetur illo obcaecati praesentium ad, velit maxime! Explicabo?',
        duration: '155 mins',
        rating: '15',
        viewingTimes: ['3:45pm', '7:45pm']
      },
      {
        image: movie1,
        title: 'Daylight',
        genres: 'Thriller, Horror',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, excepturi voluptas rem officia soluta molestiae dolorum eum aliquid, incidunt libero suscipit ipsum consectetur illo obcaecati praesentium ad, velit maxime! Explicabo?',
        duration: '155 mins',
        rating: '15',
        viewingTimes: ['3:45pm', '7:45pm']
      },
      {
        image: movie2,
        title: 'Daylight',
        genres: 'Thriller, Horror',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, excepturi voluptas rem officia soluta molestiae dolorum eum aliquid, incidunt libero suscipit ipsum consectetur illo obcaecati praesentium ad, velit maxime! Explicabo?',
        duration: '155 mins',
        rating: '15',
        viewingTimes: ['3:45pm', '7:45pm']
      },
      // Add more movies for Tuesday as needed
    ],
    FRI: [
      {
        image: movie1,
        title: 'Daylight',
        genres: 'Thriller, Horror',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, excepturi voluptas rem officia soluta molestiae dolorum eum aliquid, incidunt libero suscipit ipsum consectetur illo obcaecati praesentium ad, velit maxime! Explicabo?',
        duration: '155 mins',
        rating: '15',
        viewingTimes: ['3:45pm', '7:45pm']
      },
      {
        image: movie3,
        title: 'Daylight',
        genres: 'Thriller, Horror',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, excepturi voluptas rem officia soluta molestiae dolorum eum aliquid, incidunt libero suscipit ipsum consectetur illo obcaecati praesentium ad, velit maxime! Explicabo?',
        duration: '155 mins',
        rating: '15',
        viewingTimes: ['3:45pm', '7:45pm']
      },
      {
        image: movie2,
        title: 'Daylight',
        genres: 'Thriller, Horror',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, excepturi voluptas rem officia soluta molestiae dolorum eum aliquid, incidunt libero suscipit ipsum consectetur illo obcaecati praesentium ad, velit maxime! Explicabo?',
        duration: '155 mins',
        rating: '15',
        viewingTimes: ['3:45pm', '7:45pm']
      },
      // Add more movies for Tuesday as needed
    ],
    SAT: [
      {
        image: movie2,
        title: 'Daylight',
        genres: 'Thriller, Horror',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, excepturi voluptas rem officia soluta molestiae dolorum eum aliquid, incidunt libero suscipit ipsum consectetur illo obcaecati praesentium ad, velit maxime! Explicabo?',
        duration: '155 mins',
        rating: '15',
        viewingTimes: ['3:45pm', '7:45pm']
      },
      {
        image: movie1,
        title: 'Daylight',
        genres: 'Thriller, Horror',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, excepturi voluptas rem officia soluta molestiae dolorum eum aliquid, incidunt libero suscipit ipsum consectetur illo obcaecati praesentium ad, velit maxime! Explicabo?',
        duration: '155 mins',
        rating: '15',
        viewingTimes: ['3:45pm', '7:45pm']
      },
      {
        image: movie3,
        title: 'Daylight',
        genres: 'Thriller, Horror',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, excepturi voluptas rem officia soluta molestiae dolorum eum aliquid, incidunt libero suscipit ipsum consectetur illo obcaecati praesentium ad, velit maxime! Explicabo?',
        duration: '155 mins',
        rating: '15',
        viewingTimes: ['3:45pm', '7:45pm']
      },
      // Add more movies for Tuesday as needed
    ],
    SUN: [
      {
        image: movie2,
        title: 'Daylight',
        genres: 'Thriller, Horror',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, excepturi voluptas rem officia soluta molestiae dolorum eum aliquid, incidunt libero suscipit ipsum consectetur illo obcaecati praesentium ad, velit maxime! Explicabo?',
        duration: '155 mins',
        rating: '15',
        viewingTimes: ['3:45pm', '7:45pm']
      },
      {
        image: movie3,
        title: 'Daylight',
        genres: 'Thriller, Horror',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, excepturi voluptas rem officia soluta molestiae dolorum eum aliquid, incidunt libero suscipit ipsum consectetur illo obcaecati praesentium ad, velit maxime! Explicabo?',
        duration: '155 mins',
        rating: '15',
        viewingTimes: ['3:45pm', '7:45pm']
      },
      {
        image: movie1,
        title: 'Daylight',
        genres: 'Thriller, Horror',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, excepturi voluptas rem officia soluta molestiae dolorum eum aliquid, incidunt libero suscipit ipsum consectetur illo obcaecati praesentium ad, velit maxime! Explicabo?',
        duration: '155 mins',
        rating: '15',
        viewingTimes: ['3:45pm', '7:45pm']
      },
      // Add more movies for Tuesday as needed
    ],
    // Add movies for other days as needed
  };

  const renderSelectedContent = () => {
    if (selectedDay && moviesByDay[selectedDay]) {
      return moviesByDay[selectedDay].map((movie, index) => (
        <div key={index}>
          <div className='whatsOn-movie'>
            <img className='whatsOn-movieImage' src={movie.image} alt="" />
            <div className="whatsOn-movieText">
              <h3>{movie.genres}</h3>
              <h2>{movie.title}</h2>
              <p>{movie.description}</p>
              <h3>Full Synopsis</h3>
              <div className="whatsOn-bottom">
                <div className="whatsOn-viewingTimes">
                  {movie.viewingTimes.map((time, i) => (
                    <div key={i}>{time}</div>
                  ))}
                </div>
                <div className="whatsOn-rating">
                  <p>{movie.duration}</p>
                  <p>{movie.rating}</p>
                </div>
              </div>
            </div>
          </div>
          {index < moviesByDay[selectedDay].length - 1 && <hr className='whatson-hr'  />}
        </div>
      ));
    }
    return null;
  };

  return (
    <div className='whatsOn'>
      <div className="whatsOn-nav">
        <ul className="whatsOn-days">
          {daysOfWeek.map(day => (
            <li
              key={day}
              onClick={() => handleDayClick(day)}
              className={`${selectedDay === day ? 'selectedDay' : ''}`} // Apply selectedDay class if selected
            >
              {currentDay === day ? 'Today' : day}
            </li>
          ))}
        </ul>
        <div className="whatsOn-todayDate">
          <p>{(new Date()).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'short' })}</p>
        </div>
      </div>
      <div className="selectedContent">
        {selectedDay && renderSelectedContent()}
      </div>
    </div>
  );
}

export default WhatsOn;
