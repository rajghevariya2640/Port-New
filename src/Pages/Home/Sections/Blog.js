import React from 'react'
import PNContainer from '../../../components/PNContainer'
import PNHeading from '../../../components/PNHeading'
import PNSwiper from '../../../components/PNSwiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation, Autoplay } from 'swiper/modules'
import { SwiperSlide } from 'swiper/react'
import Blog1 from '../../../assets/image/png/Blog1.png'
import Blog2 from '../../../assets/image/png/Blog2.png'
import Blog3 from '../../../assets/image/png/Blog3.png'
import { ReactComponent as Clock } from '../../../assets/image/svg/clock.svg'
import PNPrimaryTxt from '../../../components/PNPrimaryTxt'
import PNGreyTxt from '../../../components/PNGreyTxt'
import PNh6 from '../../../components/PNh6'
import { ReactComponent as CrossArr } from '../../../assets/image/svg/workArr.svg'
import PNLink from '../../../components/PNLink'
import PNShadowBtn from '../../../components/PNShadowBtn'

const Blog = () => {

  const blogData = [
    {
      img: Blog1,
      pText: 'Development',
      time: '4 minutes',
      head: '10 Tips for Creating an Intuitive User Interface',
      info: 'Best way to impress your web & mobile app customer to sell any'
    },
    {
      img: Blog2,
      pText: 'Development',
      time: '1 minutes',
      head: 'How to Conduct User Research for Your Design Project?',
      info: 'Best way to impress your web & mobile app customer to sell any'
    },
    {
      img: Blog3,
      pText: 'work process',
      time: '4 minutes',
      head: 'The Importance of User Experi- ence in Web Design',
      info: 'Best way to impress your web & mobile app customer to sell any'
    },
    {
      img: Blog1,
      pText: 'Development',
      time: '4 minutes',
      head: '10 Tips for Creating an Intuitive User Interface',
      info: 'Best way to impress your web & mobile app customer to sell any'
    },
    {
      img: Blog2,
      pText: 'Development',
      time: '1 minutes',
      head: 'How to Conduct User Research for Your Design Project?',
      info: 'Best way to impress your web & mobile app customer to sell any'
    },
    {
      img: Blog3,
      pText: 'work process',
      time: '4 minutes',
      head: 'The Importance of User Experi- ence in Web Design',
      info: 'Best way to impress your web & mobile app customer to sell any'
    },
    {
      img: Blog1,
      pText: 'Development',
      time: '4 minutes',
      head: '10 Tips for Creating an Intuitive User Interface',
      info: 'Best way to impress your web & mobile app customer to sell any'
    },
    {
      img: Blog2,
      pText: 'Development',
      time: '1 minutes',
      head: 'How to Conduct User Research for Your Design Project?',
      info: 'Best way to impress your web & mobile app customer to sell any'
    },
    {
      img: Blog3,
      pText: 'work process',
      time: '4 minutes',
      head: 'The Importance of User Experi- ence in Web Design',
      info: 'Best way to impress your web & mobile app customer to sell any'
    }
  ]

  return (
    <div className='py-[50px] md:py-[75px] lg:py-[100px] xl:py-40 mx-[15px] md:me-0 md:ms-[4%] lg:ms-[6%] xl:ms-[5%] xxl:ms-[10.5%] overflow-hidden'>
      <div className='flex flex-wrap gap-y-5'>
        <div className='w-full xl:w-3/12'>
          <PNHeading subTitle='OUR BLOG' title='Explore Recent Article' headWrapClass='max-w-[400px]' />
        </div>
        <div className='w-full xl:w-9/12 xxl:w-9/12 xl:ps-3'>
          <PNSwiper
            slidesPerView={3}
            spaceBetween={25}
            navigation={{ nextEl: '.testiNext', prevEl: '.testiPrev' }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            modules={[Navigation, Autoplay]}
            breakpoints={{ 1320: { slidesPerView: 3 }, 1140: { slidesPerView: 2.5 }, 991: { slidesPerView: 3 }, 585: { slidesPerView: 2 }, 0: { slidesPerView: 1 } }}
            className="blog-slider"
          >
            {blogData.map((blog, blogIndex) => {
               return (
                 <SwiperSlide key={blogIndex} className='even:mt-5'>
                   <div className='group/card rounded-2xl overflow-hidden shadow-btn bg-cstm-blue-100 hover:bg-primary-100 duration-500'>
                     <div className='h-[175px] overflow-hidden'>
                       <img src={blog.img} alt={`Blog ${blogIndex + 1}`} className='h-full group-hover/card:scale-[1.1] duration-500' />
                     </div>
                     <div className='space-y-4 p-5'>
                       <div className='flex justify-between items-center'>
                         <PNPrimaryTxt className='capitalize'>
                           {blog.pText}
                         </PNPrimaryTxt>
                         <div className='flex items-center space-x-1'>
                           <Clock />
                           <PNGreyTxt>
                             {blog.time}
                           </PNGreyTxt>
                         </div>
                       </div>
                       <PNLink>
                         <PNh6 className='text-cstmGrey-100 hover:text-secondary hover:underline duration-500'>
                           {blog.head}
                         </PNh6>
                       </PNLink>
                       <div className='flex gap-2.5 !mb-4'>
                         <PNGreyTxt>
                           {blog.info}
                         </PNGreyTxt>
                         <PNShadowBtn icon={<CrossArr className='group-hover/btn:stroke-black duration-300' />} className='group/btn  h-[50px] w-[50px]' />
                       </div>
                     </div>
                   </div>
                 </SwiperSlide>
               )
             })}
          </PNSwiper>
        </div>
      </div>
    </div>
  )
}

export default Blog
