import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {CgWebsite} from 'react-icons/cg'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/kachik/" target='_blank'><BsLinkedin size={30}/></a>
      <a href="http://kachik.me" target='_blank'><CgWebsite size={30}/></a>
      <a href="https://github.com/kashkaryan" target='_blank'><BsGithub size={30}/></a>
    </div>
  )
}

export default HeaderSocials