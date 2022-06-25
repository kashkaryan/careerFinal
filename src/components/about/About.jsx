import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import {IoIosSchool} from 'react-icons/io'

const About = () => {
  return (
    <section id='about'>
      <h2>Get To Know Your Future Career Advisor</h2>
      <h3>Kachik Ashkaryan</h3>
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
              <h5>My Experience</h5>
              <small>3+ years teaching experience</small>
            </article>
            <article className='about__card'>
              <FiUser className='about__icon'/>
              <h5>Clients</h5>
              <small>Students ranging from middle school to masters students</small>
            </article>
            <article className='about__card'>
              <IoIosSchool className='about__icon'/>
              <h5>College</h5>
              <small>Graduated 2022 from Ivy League @ UPenn in Computer Science</small>
            </article>
          </div>

          <p>
            After graduating Magna Cum Laude from the University of Pennsylvania, I joined Google as a full time Software Engineer. However, in college I discovered my passion in teaching after leading classes to undergraduate and masters students. Concurrently, I now spend time developing customized curriculums for my students in topics from college prep to computer science classes!
          </p>
          <a href="#contact" className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About