import React from 'react'
import Slideshow from '../Components/Slideshow/Slideshow'
import Slideshow2 from '../Components/Slideshow2/Slideshow2'
import { AiOutlinePhone } from "react-icons/ai";

const Home = () => {
  return (
      <div className='home'>
        <img className='homelogo' src="https://i.imgur.com/Yan6SO9.jpg" alt="logo" />
        <div className='slideshowweb'>
          <Slideshow />
        </div>
        <div className='slideshowphone'>
          <Slideshow2 />
        </div>
        <div className='homeText'>
          <div className='brLine' />
          <div><AiOutlinePhone size='30' style={{color:"black"}} /><p>(813) 280-1356</p></div>
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