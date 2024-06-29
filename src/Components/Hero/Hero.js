import React from 'react'
import { useEffect,useRef } from 'react';
import pdf from '../../Assets/SHRUTHI_Resume.pdf'
import img from '../../Assets/hero_image.jpg'
import Typed from "typed.js";
import './Hero.css'


function Hero() {
    const typedRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My Name is Madishetty shruthi",
        "I'm front end developer",
        "React.js Developer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
     <div className="container hero" id="home">
        <div className="left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}>
            
          </h1>

          <a
            href={pdf}
            download="Resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={img} alt="hero" />
          </div>
        </div>
      </div>
 
    </>
  )
}

export default Hero
