import React from 'react'
import maddison from '../Photos/MaddisonCove.jpeg'
import jessi from '../Photos/JessiIG.jpeg'
import { IoLogoInstagram } from 'react-icons/io'


const imgArr = [
  {url:'https://i.imgur.com/GiyZh8W.jpg'},
  {url:'https://i.imgur.com/KHKTS6j.jpg'},
  {url:'https://i.imgur.com/KYvTyNy.jpg'},
  {url:'https://i.imgur.com/FtEBq9l.jpg'},
  {url:'https://i.imgur.com/d1medHx.jpg'},
  {url:'https://i.imgur.com/bg73ePt.jpg'},
  {url:'https://i.imgur.com/uciMTmW.jpg'},
  {url:'https://i.imgur.com/4I8aaa3.jpg'},
  {url:'https://i.imgur.com/CQQbA09.jpg'},

  
]

const Gallery = () => {
  return (
    <div className='gallerypage'>
      <h1 className='artistHeader'>ARTISTS</h1>
      <div className='brLine'></div>
      <div className='artists'>
        <div className='artistbox'>
          <div className='imgbox'>
            <img src="https://i.imgur.com/ciLkqIX.jpg" alt="clint" />
          </div>
          <a href="https://www.instagram.com/clint.color/" target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"white"}}><p>Clint Dunlap - Colorist / Salon Owner <IoLogoInstagram size='20' /></p></a>
        </div>
        <div className='artistbox'>
          <div className='imgbox'>
            <img src="https://i.imgur.com/sbtD3pA.jpg" alt="derek" />
          </div>
          <a href="https://www.instagram.com/derekpeterw/" target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"white"}}><p>Derek Williams - Stylist <IoLogoInstagram size='20' /></p></a>
        </div>
        <div className='artistbox'>
          <div className='imgbox'>
            <img src={jessi} alt="jessi" />
          </div>
          <a href="https://www.instagram.com/jessi.lee.hair/" target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"white"}}><p>Jessi Lee - Colorist / Stylist <IoLogoInstagram size='20' /></p></a>
        </div>
        <div className='artistbox'>
          <div className='imgbox'>
            <img src="https://imgur.com/OdUi0TZ.jpg" alt="kevin" />
          </div>
          <a href="https://www.instagram.com/kevinandrewbaker/" target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"white"}}><p>Kevin Baker - Stylist <IoLogoInstagram size='20' /></p></a>
        </div>
        <div className='artistbox'>
          <div className='imgbox'>
            <img src={maddison} alt="maddison" />
          </div>
          <a href="https://www.instagram.com/maddisoncolors/" target="_blank" rel="noreferrer" style={{textDecoration:"none", color:"white"}}><p>Maddison Cave - Colorist / Stylist <IoLogoInstagram size='20' /></p></a>
        </div>
      </div>
      <div className='brLine'></div>
      <h2>GALLERY</h2>
      <div className='brLine'></div>
      <div className='gallery'>
        <div className='imageWrap'>
          {imgArr.map((img, index) => (
            <div className='eachImage' key={index}>
              <img className='image' src={img.url} alt={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery