import React from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Autoplay, Navigation } from 'swiper/modules'
import { SwiperSlide } from 'swiper/react'
import PNSwiper from './PNSwiper'
import PNh6 from './PNh6'

const PNTestimonial = ({testimonial}) => {
  return (
    <>
      <PNSwiper
      loop
      slidesPerView={1}
      spaceBetween={25}
      navigation={{ nextEl: '.testiNext', prevEl: '.testiPrev' }}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      modules={[Navigation, Autoplay]}
      className='mt-8 xl:mt-20'>
      {testimonial.map((testi, testiIndex) => {
        return (
          <SwiperSlide className='text-center' key={testiIndex}>
             <PNh6 className='text-cstmGrey-100 mx-auto max-w-[860px]'>
               {testi.review}
             </PNh6>
             <div className='h-16 max-w-16 w-full mt-8 lg:mt-20 mx-auto'>
               <img src={testi.img} alt={`Teame Member ${testiIndex + 1}`} />
             </div>
             <PNh6 className='text-cstmGrey-100 mt-2'>
               {testi.name}
             </PNh6>
           </SwiperSlide>
         )
        })}
      </PNSwiper>
    </>
  )
}

export default PNTestimonial
