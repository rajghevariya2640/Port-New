import React from 'react'
import PNContainer from '../../../components/PNContainer'
import PNHeading from '../../../components/PNHeading'
import PNNavigation from '../../../components/PNNavigation'
import PNSwiper from '../../../components/PNSwiper'
import PNh5 from '../../../components/PNh5'
import PNGreyTxt from '../../../components/PNGreyTxt'
import { SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { ReactComponent as Serv1 } from '../../../assets/image/svg/service1.svg'
import { ReactComponent as Serv2 } from '../../../assets/image/svg/service2.svg'
import { ReactComponent as Serv3 } from '../../../assets/image/svg/service3.svg'
import { ReactComponent as Serv4 } from '../../../assets/image/svg/service4.svg'
import { ReactComponent as Serv5 } from '../../../assets/image/svg/service5.svg'
import 'swiper/css'
import 'swiper/css/navigation'
import PNButton from '../../../components/PNButton'

const Services = () => {
  const serviceSlide = [
    {
      icn: <Serv1 />,
      name: 'UX/UI Design',
      info: 'You got it with Cupcake Ipsum, the only text generator that includes marsh mallows',
      btn: 'read more'
    },
    {
      icn: <Serv2 />,
      name: 'UX/UI Design',
      info: 'You got it with Cupcake Ipsum, the only text generator that includes marsh mallows',
      btn: 'read more'
    },
    {
      icn: <Serv3 />,
      name: 'UX/UI Design',
      info: 'You got it with Cupcake Ipsum, the only text generator that includes marsh mallows',
      btn: 'read more'
    },
    {
      icn: <Serv4 />,
      name: 'UX/UI Design',
      info: 'You got it with Cupcake Ipsum, the only text generator that includes marsh mallows',
      btn: 'read more'
    },
    {
      icn: <Serv5 />,
      name: 'UX/UI Design',
      info: 'You got it with Cupcake Ipsum, the only text generator that includes marsh mallows',
      btn: 'read more'
    }
  ]
  return (
    <div className='pb-40'>
      <PNContainer>
        <div className='flex justify-between items-center'>
          <div className='w-7/12'>
            <PNHeading subTitle='services' title='Our Services Cover A Wide Range Of Areas' />
          </div>
          <div className='w-2/12 flex justify-end'>
            <PNNavigation prevClass='servicePrev' nextClass='serviceNext' />
          </div>
        </div>
        <div className='mt-20'>
          <PNSwiper
            slidesPerView={4}
            spaceBetween={25}
            navigation={{ nextEl: '.serviceNext', prevEl: '.servicePrev' }}
            modules={[Navigation]}>
            {serviceSlide.map((servSlide, servSlideIndex) => {
               return (
                 <SwiperSlide key={servSlideIndex} className=''>
                   <div className='border-[1px] border-primary-100 py-12 px-8 hover:bg-primary-100 duration-500'>
                     {servSlide.icn}
                     <PNh5 className='text-white mt-8'>
                       {servSlide.name}
                     </PNh5>
                     <PNGreyTxt className='mt-4'>
                       {servSlide.info}
                     </PNGreyTxt>
                     <PNButton variant='link' className='mt-[30px]'>
                       {servSlide.btn}
                     </PNButton>
                   </div>
                 </SwiperSlide>
               )
             })}
          </PNSwiper>
        </div>
      </PNContainer>
    </div>
  )
}

export default Services
