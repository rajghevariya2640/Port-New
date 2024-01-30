import React from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation, Autoplay } from 'swiper/modules'
import { SwiperSlide } from 'swiper/react'
import PNContainer from './PNContainer'
import PNHeading from './PNHeading'
import PNSwiper from './PNSwiper'
import PNh6 from './PNh6'
// import Testi1 from '../assets/image/png/Testimonial1.png'
// import Testi2 from '../assets/image/png/Testimonial2.png'
import { ReactComponent as LeftArr } from '../assets/image/svg/testiLeft.svg'
import { ReactComponent as RightArr } from '../assets/image/svg/testiRight.svg'
import PNShadowBtn from './PNShadowBtn'

const PNTestimonial = ({testimonial}) => {

  // const testimonial = [
  //   {
  //     review: '“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fr45 BC, making it over 2000 years old. Richard McClintock, a Latin  professor at Hampden-Sydney College. professor at Hampden-Sydney College.”',
  //     img: Testi1,
  //     name: 'Johan Daniel'
  //   },
  //   {
  //     review: '“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fr45 BC, making it over 2000 years old. Richard McClintock, a Latin  professor at Hampden-Sydney College. professor at Hampden-Sydney College.”',
  //     img: Testi2,
  //     name: 'Johan Daniel'
  //   }
  // ]

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
