import React from 'react'
import Slideshow from '../Components/Slideshow/Slideshow'
import Slideshow2 from '../Components/Slideshow2/Slideshow2'
import { AiOutlinePhone } from "react-icons/ai";

const Home = () => {
  return (
      <div className='home'>
        <img className='homelogo' src="https://imgur.com/RNPuLg2.jpg" alt="logo" />
        <div className='slideshowweb'>
          <Slideshow />
        </div>
        <div className='slideshowphone'>
          <Slideshow2 />
        </div>
        <div className='homeText'>
          <div className='brLine' />
          <div><AiOutlinePhone size='35' style={{color:"black"}} /><br /><a href="tel:+1-813-280-1356" style={{color:"black", textDecoration:"none", fontSize:"25px"}}>(813) 280-1356</a></div>
          <br />
          <div className="t4"><p>2502 N. Howard Ave Suite B Tampa, FL 33607</p></div>
          <div className="t5">Tues: 10am-5pm</div>
          <div className='t5'>Wed - Fri: 9am-5pm</div>
          <div className='t6'> Sat: 10am-4pm</div>
        </div>
      </div>
  )
}

export default Home