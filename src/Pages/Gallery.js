import React from 'react'

const imgArr = [
  {url:'https://i.imgur.com/GiyZh8W.jpg'},
  {url:'https://i.imgur.com/d1medHx.jpg'},
  {url:'https://i.imgur.com/FtEBq9l.jpg'},
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