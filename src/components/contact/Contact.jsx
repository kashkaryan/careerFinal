import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rnmnx9c', 'template_hcjphat', form.current, 'VIwjuixNGTy8USDpK')
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h2>Contact Me About Service and Pricing</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>atlascareerservice@gmail.com</h5>
            <a href="mailto:atlascareerservice@gmail.com" target='_blank'>Send a Message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Call</h4>
            <a href="tel:626-497-5599">626-497-5599</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'> Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact