import React from 'react'
import PNContainer from '../../../components/PNContainer'
import PNHeading from '../../../components/PNHeading'
import PNNavigation from '../../../components/PNNavigation'
import PNSwiper from '../../../components/PNSwiper'
import PNh5 from '../../../components/PNh5'
import PNGreyTxt from '../../../components/PNGreyTxt'
import { SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { ReactComponent as Serv1 } from '../../../assets/image/Home/svg/service1.svg'
import { ReactComponent as Serv2 } from '../../../assets/image/Home/svg/service2.svg'
import { ReactComponent as Serv3 } from '../../../assets/image/Home/svg/service3.svg'
import { ReactComponent as Serv4 } from '../../../assets/image/Home/svg/service4.svg'
import { ReactComponent as Serv5 } from '../../../assets/image/Home/svg/service5.svg'
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
      name: 'Web Design',
      info: 'You got it with Cupcake Ipsum, the only text generator that includes marsh mallows',
      btn: 'read more'
    },
    {
      icn: <Serv3 />,
      name: 'Development',
      info: 'You got it with Cupcake Ipsum, the only text generator that includes marsh mallows',
      btn: 'read more'
    },
    {
      icn: <Serv4 />,
      name: 'App Development',
      info: 'You got it with Cupcake Ipsum, the only text generator that includes marsh mallows',
      btn: 'read more'
    },
    {
      icn: <Serv5 />,
      name: 'App Deployment',
      info: 'You got it with Cupcake Ipsum, the only text generator that includes marsh mallows',
      btn: 'read more'
    }
  ]
  return (
    <div className='pb-[50px] md:pb-[75px] lg:pb-[100px] xl:pb-40'>
      <PNContainer>
        <div className='flex justify-between items-center flex-wrap gap-y-5'>
          <div className='w-full lg:w-7/12'>
            <PNHeading subTitle='services' title='Our Services Cover A Wide Range Of Areas' />
          </div>
          <div className='w-full lg:w-3/12 flex lg:justify-end'>
            <PNNavigation prevClass='servicePrev' nextClass='serviceNext' />
          </div>
        </div>
        <PNSwiper
          navigation={{ nextEl: '.serviceNext', prevEl: '.servicePrev' }}
          modules={[Navigation]}
          className='mt-8 xl:mt-20'
          breakpoints={{ 0: { slidesPerView: 1, spaceBetween: 15 }, 475: { slidesPerView: 2, spaceBetween: 15 }, 991: { slidesPerView: 3, spaceBetween: 20 }, 1320: { slidesPerView: 4, spaceBetween: 25 } }}>
          {serviceSlide.map((servSlide, servSlideIndex) => {
             return (
               <SwiperSlide key={servSlideIndex} className=''>
                 <div className='border-[1px] border-primary-100 p-4 sm:py-8 sm:px-6 lg:py-12 lg:px-8 hover:bg-primary-100 duration-500'>
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
      </PNContainer>
    </div>
  )
}

export default Services
