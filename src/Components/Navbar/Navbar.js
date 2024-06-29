import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import {FaTimes,FaBars} from 'react-icons/fa'
import './Navbar.css';


const Navbar = () => {
  const [click,setClick]=useState(false)

  const handleClick=()=>{
    setClick(!click)
  }

  return (
    <nav>
      <div className='logo'
      data-aos="fade-down"
      data-aos-duration="1000" 
      >
         <h1>PORTFOLIO</h1>
      </div>
      <div className= {click ? 'menu active': 'menu'}>
        <Link to='/'><p>HOME</p></Link>
        <Link to='/Experience'><p>EXPERIENCE</p></Link>
        <Link to='/skills'><p>SKILLS</p></Link>
        <Link to='/Project'><p>PROJECT</p></Link>
        <Link to='/Contact'><p>CONTACT</p></Link>

      </div>
      <div className='hamburger' onClick={handleClick}>
        {
          click?(
            <FaTimes style={{color:"white"}} size={25}/>
          ):
          (
            <FaBars style={{color:"white"}} size={25}/>
          ) 
        }
      </div>
    </nav>
  )
}

export default Navbar
