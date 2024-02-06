import React from 'react'
import PNTestimonial from '../../../components/PNTestimonial'
import Testi1 from '../../../assets/image/Home/png/Testimonial1.png'
import Testi2 from '../../../assets/image/Home/png/Testimonial2.png'
import PNContainer from '../../../components/PNContainer'
import PNHeading from '../../../components/PNHeading'
import PNShadowBtn from '../../../components/PNShadowBtn'
import { ReactComponent as LeftArr } from '../../../assets/image/Home/svg/testiLeft.svg'
import { ReactComponent as RightArr } from '../../../assets/image/Home/svg/testiRight.svg'

const AboutTestimonial = () => {

  const testimonial = [
    [{
      review: '“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fr45 BC, making it over 2000 years old. Richard McClintock, a Latin  professor at Hampden-Sydney College. professor at Hampden-Sydney College.”',
      img: Testi1,
      name: 'Johan Daniel'
    },
      {
        review: '“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature fr45 BC, making it over 2000 years old. Richard McClintock, a Latin  professor at Hampden-Sydney College. professor at Hampden-Sydney College.”',
        img: Testi2,
        name: 'Johan Daniel'
      }]
  ]

  return (
    <div className='py-[50px] md:py-[75px] lg:py-[100px] xl:py-40'>
      <PNContainer>
        <div className='relative'>
          <PNHeading
            subTitle='TEAM'
            title='Our Professional Team'
            headWrapClass='text-center'
            bgClass='bg-subHead' />
          <div className='absolute w-full top-1/2 left-1/2 translate-x-[-50%] lg:flex justify-between items-center z-20 hidden'>
            <PNShadowBtn className='testiPrev' icon={<LeftArr/>} />
            <PNShadowBtn className='testiNext' icon={<RightArr/>} />
          </div>
          {testimonial.map((testi, testiIndex) => {
             return (
               <PNTestimonial testimonial={testi} key={testiIndex} />
             )
           })}
        </div>
      </PNContainer>
    </div>
  )
}

export default AboutTestimonial
