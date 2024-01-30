import React from 'react'
import PNContainer from '../../../components/PNContainer'
import PNHeading from '../../../components/PNHeading'
import PNNavigation from '../../../components/PNNavigation'
import PNSwiper from '../../../components/PNSwiper'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { SwiperSlide } from 'swiper/react'
import Team1 from '../../../assets/image/png/Member1.png'
import Team2 from '../../../assets/image/png/Member2.png'
import Team3 from '../../../assets/image/png/Member3.png'
import Team4 from '../../../assets/image/png/Member4.png'
import PNh5 from '../../../components/PNh5'
import PNGreyTxt from '../../../components/PNGreyTxt'
import PNButton from '../../../components/PNButton'

const Team = () => {

  const team = [
    {
      img: Team1,
      name: 'Albert Wick',
      job: 'UI/UX Designer',
      hoverBtn: ['github', 'dribbble', 'behance'],
    },
    {
        img: Team2,
        name: 'Andrew Nikos',
        job: 'IOS Developer',
        hoverBtn: ['github', 'dribbble', 'behance'],
    },
    {
        img: Team3,
        name: 'Kanta Kujenos',
        job: 'Web Developer',
        hoverBtn: ['github', 'dribbble', 'behance'],
    },
    {
        img: Team4,
        name: 'Aya Nikola',
        job: 'Digital marketer',
        hoverBtn: ['github', 'dribbble', 'behance'],
    },
    {
      img: Team1,
      name: 'Albert Wick',
      job: 'UI/UX Designer',
      hoverBtn: ['github', 'dribbble', 'behance'],
    },
    {
        img: Team2,
        name: 'Andrew Nikos',
        job: 'IOS Developer',
        hoverBtn: ['github', 'dribbble', 'behance'],
    },
    {
        img: Team3,
        name: 'Kanta Kujenos',
        job: 'Web Developer',
        hoverBtn: ['github', 'dribbble', 'behance'],
    },
    {
        img: Team4,
        name: 'Aya Nikola',
        job: 'Digital marketer',
        hoverBtn: ['github', 'dribbble', 'behance'],
    },
  ]

  return (
    <div className='pb-[50px] md:pb-[75px] lg:pb-[100px] xl:pb-40'>
      <PNContainer>
        <div className='flex items-center justify-between flex-wrap gap-y-5'>
          <div className='w-full lg:w-6/12'>
            <PNHeading subTitle='DEDICATED TEAM' title='Our Dedicated Team Members' />
          </div>
          <div className='w-full lg:w-2/12'>
            <PNNavigation prevClass='teamPrev' nextClass='teamNext' />
          </div>
        </div>
          <PNSwiper
            navigation={{ nextEl: '.teamNext', prevEl: '.teamPrev' }}
          modules={[Navigation]}
          className="mt-8 xl:mt-20"
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 15 },
              450: { slidesPerView: 2, spaceBetween: 15 },
              991: { slidesPerView: 3, spaceBetween: 20 },
              1320: { slidesPerView: 4, spaceBetween: 25 },
            }}
          >
            {team.map((team, teamIndex) => {
               return (
                 <SwiperSlide key={teamIndex}>
                   <div className='relative group'>
                     <div className='h-[325px] sm:h-[350px] w-full overflow-hidden mb-2.5 sm:group-hover:h-[360px] group-hover:mb-0 duration-500'>
                       <img src={team.img} alt={` Team member ${teamIndex + 1}`} className='group-hover:scale-[1.05] duration-500 group-hover:opacity-75 h-full' />
                     </div>
                     <div className='absolute w-full bottom-5 left-1/2 translate-x-[-50%] text-center group-hover:opacity-0 duration-500'>
                       <PNh5 className='text-cstmGrey-100'>
                         {team.name}
                       </PNh5>
                       <PNGreyTxt className='capitalize'>
                         {team.job}
                       </PNGreyTxt>
                     </div>
                     <div className='absolute opacity-0 w-10/12 bottom-6 left-1/2 translate-x-[-50%] translate-y-[-30px] text-center group-hover:opacity-100 group-hover:translate-y-[0px] duration-500 bg-primary-100 flex items-center justify-between'>
                       {team.hoverBtn?.map((hBtn, hBtnIndex) => {
                          return (
                            <PNButton variant="link" key={hBtnIndex} className="px-0 py-4 sm:p-4 w-full !capitalize">
                              {hBtn}
                            </PNButton>
                          )
                        })}
                     </div>
                   </div>
                 </SwiperSlide>
               )
             })}
          </PNSwiper>
      </PNContainer>
    </div>
  )
}

export default Team
