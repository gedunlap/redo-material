import React from 'react'
import { BiRightArrow } from "react-icons/bi";


const Services = () => {
  return (
    <div className='services'>
      <div className='servicesHeader'><h1>SERVICES</h1></div>
      <div className='brLine' />
      <img className='servicesHeaderImg' src="https://i.imgur.com/bHMAkXy.jpg" alt="product" />
      <div className='servicesColor'>
        <div className='colorTextBox'>
          <h2>COLOR</h2><br />
          <h4 className='colorLabel'>Single Process: <br /> <span>$140+ <BiRightArrow size="15"/> 2hr</span></h4>
          <p className='colorText'>Service includes a root touch up for color or gray coverage, toner/gloss and blow dry.</p><br />
          <h4 className='colorLabel'>Highlights: <br /> <span>$275+ <BiRightArrow size="15"/> 3hr</span></h4>
          <p className='colorText'>Highlighting techniques include foiling and free-hand painting. Service includes toner/gloss and blow dry.</p><br />
          <h4 className='colorLabel'>Gloss | Toner | Glaze: <br /> <span>$75+ <BiRightArrow size="15"/> 45min</span></h4>
          <p className='colorText'>Service includes toning/color melt/gloss and blow dry.</p><br />
          <h4 className='colorLabel'>Double Process Retouch: <br /> <span>$200+ <BiRightArrow size="15"/> 2hr+</span></h4>
          <p className='colorText'>This is a four-to-six-week refresh for existing, double-process blondes. Service includes toner/gloss and blow dry.</p><br />
          <h4 className='colorLabel'>Color Correction | Complete Color Change: <br /> <span>$300+ <BiRightArrow size="15"/> 3hr+</span></h4>
        </div>
        <div className='colorImgBox'>
          <img className='servicesColorImg' src="https://i.imgur.com/22KS9Yc.jpg" alt="photo2" />
        </div>
      </div>
      <div className='servicesStyle'>
        <div className='stylingImgBox'>
          <img className='servicesStylingImg' src="https://i.imgur.com/xL51teP.jpg" alt="photo3" />
        </div>
        <div className='stylingTextBox'>
          <h2>STYLING</h2><br />
          <h4 className='stylingLabel'>Women’s Haircut: <br /> <span>$200+ <BiRightArrow size="15"/> 2hr+</span></h4>
          <p className='stylingText'>Service includes blow dry/style.</p><br />
          <h4 className='stylingLabel'>Blow Dry: <br /> <span>$200+ <BiRightArrow size="15"/> 2hr+</span></h4>
          <br />
          <h4 className='stylingLabel'>Up do | Special Occasion: <br /> <span>$200+ <BiRightArrow size="15"/> 2hr+</span></h4>
          <br />
        </div>
      </div>
      <img className='servicesHeaderImg' src="https://i.imgur.com/q9zryo0.jpg" alt="example" />
    </div>
  )
}

export default Services