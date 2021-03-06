import React from 'react'
import { BiRightArrow } from "react-icons/bi";
import { BsArrowRightShort } from "react-icons/bs";



const Services = () => {
  return (
    <div className='services'>
      <div className='servicesHeader'><h1>SERVICES</h1></div>
      <div className='brLine' />
      <img className='servicesHeaderImg' src="https://i.imgur.com/bHMAkXy.jpg" alt="product" />
      <div className='servicesColor'>
        <div className='colorTextBox'>
          <h2>COLOR</h2><br />
          <h4 className='colorLabel'>Highlights: <br /> <span>$300+ <BiRightArrow size="15"/> 3hr</span></h4>
          <p className='colorText'>Highlighting techniques include foiling and free-hand painting. Service includes toner/gloss and blow dry.</p><br />
          <h4 className='colorLabel'>Single Process: <br /> <span>$150+ <BiRightArrow size="15"/> 2hr</span></h4>
          <p className='colorText'>Service includes a root touch up for color or gray coverage, toner/gloss and blow dry.</p><br />
          <h4 className='colorLabel'>All Over Color: <br /> <span>$200+ <BiRightArrow size="15"/> 2hr+</span></h4>
          <p className='colorText'>Service includes all-over hair color application that covers grays or creates a holistic color change, toner/gloss and blow dry.</p><br />
          <h4 className='colorLabel'>Gloss | Toner | Glaze: <br /> <span>$75+ <BiRightArrow size="15"/> 45min</span></h4>
          <p className='colorText'>Service includes toning/color melt/gloss and blow dry.</p><br />
          <h4 className='colorLabel'>Double Process Retouch: <br /> <span>$225+ <BiRightArrow size="15"/> 2hr+</span></h4>
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
          <h4 className='stylingLabel'>Haircut: <br /> <span>$110+ <BiRightArrow size="15"/> 1hr 15min</span></h4>
          <p className='stylingText'>Service includes blow dry/style.</p><br />
          <h4 className='stylingLabel'>Blow Dry: <br /> <span>$65+ <BiRightArrow size="15"/> 45min</span></h4>
          <br />
          <h4 className='stylingLabel'>Up do | Special Occasion: <br /> <span>$95+ <BiRightArrow size="15"/> 1hr</span></h4>
          <br />
          <h2>EXTENSIONS</h2>
          <p className='stylingText'>All extension services are priced upon consultation</p><br />
        </div>
      </div>
      <h4 style={{textAlign:"center", width:"70%", fontFamily:"Helvetica Now Bold"}}>Consultations for Color, Haircuts and Extensions are Complimentary</h4>
      <button><a href="https://www.fresha.com/a/material-tampa-2502-north-howard-avenue-tjr5uxjo/booking?menu=true" target="_blank" style={{textDecoration:"none", color:"white"}}>Book An Appointment</a></button>
      <img className='servicesFooterImg' src="https://i.imgur.com/q9zryo0.jpg" alt="example" />
    </div>
  )
}

export default Services