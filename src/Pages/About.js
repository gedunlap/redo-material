import React from 'react'

const About = () => {
  return (
    <div className='about'>
      <div className='about1'>
        <div className='about1imgbox'>
          <img className='about1img' src="https://i.imgur.com/YOK59GG.png" alt="clint" />
        </div>
        <div className='about1textbox'>
          <h2 className='about1head'>About</h2>
          <p className='about1p'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora alias iste natus sint officiis enim, quos voluptatum aspernatur cupiditate officia quisquam laborum libero necessitatibus quaerat aliquid ad, delectus voluptas nisi! <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde itaque aliquam in id. Quas similique ipsa animi, non repellendus ratione ad quisquam maiores molestias cum est veritatis, blanditiis sint minima! <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, tempora eveniet neque nisi natus labore beatae, minima aperiam cupiditate, magnam rem. Sequi suscipit labore vel inventore ex fugit eius consequuntur.</p>
        </div>
      </div>
      <div className='about2'>

      </div>
      <iframe className="map"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1281.9751705201484!2d-82.48389064787185!3d27.963140503993333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c37afe6d0c8d%3A0x44582724ad24c70c!2sMATERIAL!5e0!3m2!1sen!2sus!4v1644445746543!5m2!1sen!2sus" title='Material' style={{width:"800px", height:"400px",border:"solid black"}} loading="lazy"></iframe>
    </div>
  )
}

export default About