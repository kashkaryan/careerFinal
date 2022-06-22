import React from 'react'
import CV from '../../assets/KachikResume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a target="_blank" download rel="noopener noreferrer" href={CV} className='btn'>Download Resume</a>
      <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA