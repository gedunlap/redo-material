import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const fadeImages = [
  {
    url: 'https://i.imgur.com/qnpPwxq.jpg',
  },
  {
    url: 'https://i.imgur.com/CVNZcqN.jpg',
  },
  {
    url: 'https://i.imgur.com/NB6nAKj.jpg',
  },
  {
    url: 'https://i.imgur.com/mDCMfh9.jpg',
  },
  {
    url: 'https://i.imgur.com/RmlvPyK.jpg',
  },
  {
    url: 'https://i.imgur.com/1Psfh7B.jpg',
  },
];


const Slideshow = () => {
    return (
        <div className="slide-container2">
            <Fade duration='3000'>
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