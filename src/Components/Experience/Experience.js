import React from 'react'
import experience from '../Data/Experience.json';
import './Experience.css';
import Navbar from '../../Components/Navbar/Navbar';



const Experience = () => {
 
  return (
    <>
      <div className="experience_container" id="experience">
        <h1>EXPERIENCE</h1>
        {experience.map((data) => {
          
          return (
            <>
              <Navbar/>
              <div
                key={data.id}
                className="ex-items text-center my-5"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="left">
                  <img src={data.imageSrc} alt={data.role} className='image_data'/>
                </div>
                <div className="right">
                  <h2>{data.role}</h2>
                  <h4>
                    <span style={{ color: "yellowgreen" }}>
                      {data.startDate} {data.endDate}{" "}
                    </span>{" "}
                    <span style={{ color: "yellow" }}>{data.location}</span>
                  </h4>
                  <h5 style={{ color: "yellow" }}>{data.experiences[0]}</h5>
                  <h5 style={{ color: "yellow" }}>{data.experiences[1]}</h5>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  )
}

export default Experience
