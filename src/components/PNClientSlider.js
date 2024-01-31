import React from 'react'
import PNContainer from './PNContainer'
import PNh5 from './PNh5'
import PNSwiper from './PNSwiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation, Autoplay } from 'swiper/modules'
import { SwiperSlide } from 'swiper/react'
// import Client1 from '../../../assets/image/svg/client1.svg'
// import Client2 from '../../../assets/image/svg/client2.svg'
// import Client3 from '../../../assets/image/svg/client3.svg'
// import Client4 from '../../../assets/image/svg/client4.svg'
// import Client5 from '../../../assets/image/svg/client5.svg'

const PNClientSlider = ({client, mainClass, heading}) => {

  // const client = [
  //   {
  //     img: Client1
  //   },
  //   {
  //     img: Client2
  //   },
  //   {
  //     img: Client3
  //   },
  //   {
  //     img: Client4
  //   },
  //   {
  //     img: Client5
  //   },
  //   {
  //     img: Client1
  //   },
  //   {
  //     img: Client2
  //   },
  //   {
  //     img: Client3
  //   },
  //   {
  //     img: Client4
  //   },
  //   {
  //     img: Client5
  //   }
  // ]

  return (
      <PNContainer>
        <PNh5 className='text-cstmGrey-100 text-center'>
          {heading}
        </PNh5>
        <PNSwiper
          loop
          slidesPerView={5}
          spaceBetween={25}
          navigation={{ nextEl: '.testiNext', prevEl: '.testiPrev' }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[Navigation, Autoplay]}
          breakpoints={{ 0: { slidesPerView: 3, spaceBetween: 15 }, 768: { slidesPerView: 4, spaceBetween: 20 }, 1320: { slidesPerView: 5, spaceBetween: 25 } }}
          className='mt-8 xl:mt-20'>
          {client?.map((client, clientIndex) => {
             return (
               <SwiperSlide key={clientIndex}>
                 <div className='h-10 md:h-[50px] xl:h-[75px] w-auto'>
                   <img src={client.img} alt={`${clientIndex + 1}`} className='h-full object-contain' />
                 </div>
               </SwiperSlide>
             )
           })}
        </PNSwiper>
      </PNContainer>
  )
}

export default PNClientSlider
