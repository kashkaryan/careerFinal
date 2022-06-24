import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {FcGoogle} from 'react-icons/fc'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Kachik Ashkaryan</h1>
        <h5 className='text-light'>Fullstack Developer @ <FcGoogle size={30} className='icon__google'/>oogle</h5>
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