import React from 'react'
import skills from '../Data/Skills.json';
import './Skills.css'


const Skills = () => {
  return (
    <>

      <div className="container_skills" id="skills">
        <h1>SKILLS</h1>
        <div className="items">
          {skills.map((data) => (
            <>
              <div
                className="item"
                key={data.id}
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <img src={data.imageSrc} alt="" />
                <h3>{data.title}</h3>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default Skills
