import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  {
    url: 'https://i.imgur.com/XL9L0qo.jpg',
  },
  {
    url: 'https://i.imgur.com/u9MQNck.jpg',
  },
  {
    url: 'https://i.imgur.com/sPSgrwa.jpg',
  },
];

const Slideshow = () => {
    return (
        <div className="slide-container">
            <Fade duration="3000">
                {fadeImages.map((fadeImage, index) => (
                <div className="each-fade" key={index}>
                    <div className="image-container">
                      <img className='fadeimg' src={fadeImage.url} />
                    </div>
                </div>
                ))}
            </Fade>
        </div>
    )
}

export default Slideshow