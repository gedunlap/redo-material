import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  {
    url1: 'https://i.imgur.com/qnpPwxq.jpg',
    url2: 'https://i.imgur.com/mDCMfh9.jpg',
  },
  {
    url1: 'https://i.imgur.com/CVNZcqN.jpg',
    url2: 'https://i.imgur.com/RmlvPyK.jpg',
  },
  {
    url1: 'https://i.imgur.com/NB6nAKj.jpg',
    url2: 'https://i.imgur.com/1Psfh7B.jpg',
  },
];


const Slideshow = () => {
    return (
        <div className="slide-container">
            <Fade duration='3000'>
                {fadeImages.map((fadeImage, index) => (
                <div className="each-fade" key={index}>
                    <div className="image-container">
                      <img className='fadeimg' src={fadeImage.url1} />
                      <img className='fadeimg' src={fadeImage.url2} />
                    </div>
                </div>
                ))}
            </Fade>
        </div>
    )
}

export default Slideshow