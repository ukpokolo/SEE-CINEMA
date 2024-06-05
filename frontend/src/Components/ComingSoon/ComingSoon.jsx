import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ComingSoon.css'
import ifmovie from '../Assets/if.jpg'
import garfield from '../Assets/garfield.jpg'
import criminal from '../Assets/criminal.jpg'
import kuti from '../Assets/kuti.jpg'

function ComingSoon() {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "white",
          borderRadius: "50%",
          width: "40px",
          height: "150px",
          lineHeight: "40px",
          textAlign: "center",
          color: "black",
          backgroundColor: "transparent"
        }}
        onClick={onClick}
      >
        {" "}
        {/* Arrow Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "white",
          borderRadius: "50%",
          width: "40px",
          height: "150px",
          lineHeight: "40px",
          textAlign: "center",
          color: "black"
        }}
        onClick={onClick}
      >
        {" "}
        {/* Arrow Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
    );
  }
  
  const comingSoon = [
    {
      id: 1,
      image: ifmovie,
      title: "If",
      genre: "Fantasy, 2024",
      date: "17, May"
    },
    {
      id: 1,
      image: garfield,
      title: "Garfield The Movie",
      genre: "Fantasy, 2024",
      date: "23, May"
    },
    {
      id: 1,
      image: kuti,
      title: "Funmilayo Ransome Kuti",
      genre: "Drama, 2024",
      date: "17, May"
    },
    {
      id: 1,
      image: criminal,
      title: "Criminal",
      genre: "Drama, 2024",
      date: "31, May"
    },
  ];

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        
        breakpoint: 886, // max-width 886px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 500, // max-width 500px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  };
  

  return (
    <div className='comingSoon'>
        <h1>Coming Soon</h1>
        <hr />
        
        <div className="comingSoon-movies">
        <Slider {...settings}>
          {comingSoon.map(cs =>(
            <div className="comingSoon-movieBox">
            <div className="cs-mb-image">
            <img src={cs.image} alt="" />
            <p>{cs.date}</p>
            </div>
            <p>{cs.title}</p>
            <p>{cs.genre}</p>
          </div>
          ))}
          </Slider>
            
        </div>
        

    </div>
  )
}

export default ComingSoon