import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h2>Services</h2>
      <h5>Inquire For Tailored Pricing</h5>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>College Guide</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Guide through the application process every step of the way.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Customized timeline for your big picture application process.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>One-on-one college essay help.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>SAT and SAT subject test preperation.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Polish all college applications together.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Periodic checkins to make sure students stay on course for a successful college career.</p>
            </li>
          </ul>

        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Software Job Prep</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Intensive resume buffering for your dream job.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Customized schedule for interview preperation.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Access to FAANG technical and behavioral questions.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Reach out to hiring managers together to create a working plan to get a high paying job.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>First hand insight into FAANG work culture and pay expectaions.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Help build apps to strengthen resume and practice how to speak about it in interviews.</p>
            </li>
          </ul>

        </article>


        <article className='service'>
          <div className="service__head">
            <h3>Computer Science Classes</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Able to teach coding to beginners and intermediate level coders.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Languages include Python, Java, C++, C, and Web development (HTML, CSS, Javascript, NodeJS).
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Basic Coding, Web Development, Data Structures, Advanced Algorithms, Discrete Mathematics for Computer Science, and Operating Systems courses available.
              </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design course specfiically for you with one-on-one lessons.</p>
            </li>
          </ul>

        </article>
      </div>

    </section>
  )
}

export default Services