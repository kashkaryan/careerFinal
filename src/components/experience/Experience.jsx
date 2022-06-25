import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>School</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Got Into 4 Top 10 Schools</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>

              <h4>Graduated Ivy League</h4>
              <small className='text-light'>UPenn Engineering School</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>

              <h4>Questbridge Scholar</h4>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>

              <h4>Scholarships</h4>
              <small className='text-light'>Worth over $10,000</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>

              <h4>Professor's Assistant</h4>
              <small className='text-light'>Taught CS to UPenn Students</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
        <h3>Software</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>

              <h4>Backend Pipeline Engineer</h4>
              <small className='text-light'>Google</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>

              <h4>Cloud Engineer</h4>
              <small className='text-light'>Capital One</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>

              <h4>Web Developer</h4>
              <small className='text-light'>Beachbody</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>

              <h4>Automating Software</h4>
              <small className='text-light'>Tradeblock</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>

              <h4>Software Testing and Frontend</h4>
              <small className='text-light'>Engage Co.</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience