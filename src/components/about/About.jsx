import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ years experience</small>
            </article>
            <article className='about__card'>
              <FiUser className='about__icon'/>
              <h5>Clients</h5>
              <small>hundreds</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>Very Many Projects</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis inventore aliquid eveniet dolorum dolor quod amet, porro vel accusantium quis quaerat, itaque sequi saepe voluptatibus est nobis eum quisquam sapiente!
          </p>
          <a href="#contact" className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About