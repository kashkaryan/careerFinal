import React from 'react'
import './testimonials.css'
import AVT1 from '../../assets/avatar1.jpg'
import AVT2 from '../../assets/avatar2.jpg'
import AVT3 from '../../assets/avatar3.jpg'
import AVT4 from '../../assets/avatar4.jpg'

// core version + navigation, pagination modules:
import {Pagination} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  const data = [{avatar:AVT1}, {avatar:AVT2}, {avatar:AVT3}, {avatar:AVT4}]
  return (
    <section id='testimonial'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable:true}}>
      {
          data.map(({avatar}, index) => {
            return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="avatar one" />
              </div>
              <h5 className='client__name'>Helmingway</h5>
              <small className="client__review">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A accusantium sequi soluta recusandae corrupti inventore ab facilis labore rerum distinctio exercitationem nulla expedita, dolor dolore vero sed veniam provident nemo.
              </small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials