import React from 'react'

const imgArr = [
  {url:'https://i.imgur.com/GiyZh8W.jpg'},
  {url:'https://i.imgur.com/d1medHx.jpg'},
  {url:'https://i.imgur.com/FtEBq9l.jpg'},
  {url:'https://i.imgur.com/CrJjauY.jpg'},
  {url:'https://i.imgur.com/22KS9Yc.jpg'},
  {url:'https://i.imgur.com/KHKTS6j.jpg'},
  {url:'https://i.imgur.com/bg73ePt.jpg'},
  {url:'https://i.imgur.com/hAWPAqN.jpg'},
  {url:'https://i.imgur.com/rr6BjlW.jpg'},
  {url:'https://i.imgur.com/DzaGpUz.jpg'},
  {url:'https://i.imgur.com/XeMftNc.jpg'},
  
]

const Gallery = () => {
  return (
    <div className='gallery'>
      <div className='imageWrap'>
        {imgArr.map((img, index) => (
          <div className='eachImage' key={index}>
            <img className='image' src={img.url} alt={index} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery