import React from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation, Autoplay } from 'swiper/modules'
import { SwiperSlide } from 'swiper/react'
import PNContainer from '../../../components/PNContainer'
import PNHeading from '../../../components/PNHeading'
import PNSwiper from '../../../components/PNSwiper'
import PNh6 from '../../../components/PNh6'
import Testi1 from '../../../assets/image/png/Testimonial1.png'
import Testi2 from '../../../assets/image/png/Testimonial2.png'
import { ReactComponent as LeftArr } from '../../../assets/image/svg/testiLeft.svg'
import { ReactComponent as RightArr } from '../../../assets/image/svg/testiRight.svg'
import PNShadowBtn from '../../../components/PNShadowBtn'

const Testimonial = () => {

  const testimonial = [
    {
      review: '“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fr45 BC, making it over 2000 years old. Richard McClintock, a Latin  professor at Hampden-Sydney College. professor at Hampden-Sydney College.”',
      img: Testi1,
      name: 'Johan Daniel'
    },
    {
      review: '“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fr45 BC, making it over 2000 years old. Richard McClintock, a Latin  professor at Hampden-Sydney College. professor at Hampden-Sydney College.”',
      img: Testi2,
      name: 'Johan Daniel'
    }
  ]

  return (
    <div className='py-40 h-screen min-h-[48rem] w-full bg-testimonial bg-no-repeat bg-cover'>
      <PNContainer className='relative'>
        <PNHeading subTitle='TEAM' title='Our Professional Team' headWrapClass='text-center' />
        <div className='absolute w-full top-1/2 left-1/2 translate-x-[-50%] flex justify-between items-center z-20'>
          <PNShadowBtn className='testiPrev' icon={<LeftArr/>} />
          <PNShadowBtn className='testiNext' icon={<RightArr/>} />
        </div>
        <PNSwiper
          loop
          slidesPerView={1}
          spaceBetween={25}
          navigation={{ nextEl: '.testiNext', prevEl: '.testiPrev' }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Navigation, Autoplay]}
          className='mt-20'>
          {testimonial.map((testi, testiIndex) => {
             return (
               <SwiperSlide className='text-center' key={testiIndex}>
                 <PNh6 className='text-cstmGrey-100 mx-auto max-w-[860px]'>
                   {testi.review}
                 </PNh6>
                 <div className='h-16 max-w-16 w-full mx-auto !mt-20'>
                   <img src={testi.img} alt={`Teame Member ${testiIndex + 1}`} />
                 </div>
                 <PNh6 className='text-cstmGrey-100 mt-2'>
                   {testi.name}
                 </PNh6>
               </SwiperSlide>
             )
           })}
        </PNSwiper>
      </PNContainer>
    </div>
  )
}

export default Testimonial
