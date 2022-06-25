import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/logo1.png'
import HeaderSocials from './HeaderSocials'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {FcGoogle} from 'react-icons/fc'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>Atlas Career Service</h1>
        <hr class="rounded"></hr>
        <h5>By Kachik Ashkaryan</h5>
        <h5 className='text-light'>SWE @ <FcGoogle size={30} className='icon__google'/>oogle</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <div className="scroll__down">
          <a href="#about">Scroll Down <AiOutlineArrowRight href="#about" className='down__arrow'/></a>
        </div>
      </div>
    </header>
  )
}

export default Header