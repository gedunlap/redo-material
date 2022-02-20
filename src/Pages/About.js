import React from 'react'

const About = () => {
  return (
    <div className='about'>
      <div className='aboutHeader'><h1>ABOUT</h1></div>
      <div className='brLine' />
      <div className='about1'>
        <div className='about1imgbox'>
          <img className='about1img' src="https://i.imgur.com/YOK59GG.png" alt="sign" />
        </div>
        <div className='about1text'>
          <p className='about1p'>MATERIAL is an intimate, new style of full service hair salon that provides premiere color and styles to Tampa's best. A boutique space in the heart of Tampa Bay, where top stylists from NYC and LA bring their cultivated quality of work to the rapidly growing community.</p>
        </div>
      </div>
      <div className='about2'>
        <div className='about2text'>
          <div className='about2p'>
            <p><span className='quote'>“I wanted to create a space that brings the same environment and aesthetic to the Tampa area, as a salon you would visit in New York City or Los Angeles.”</span><br />-Clint Dunlap, Salon Owner</p>
          </div>
        </div>
        <div className='about2imgbox'>
            <img className='about2img' src="https://i.imgur.com/6MpYJ4U.png" alt="clint" />
        </div>
      </div>
    </div>
  )
}

export default About