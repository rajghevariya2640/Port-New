import React from 'react'
import PNBigText18 from '../../../components/PNBigText18'
import PNButton from '../../../components/PNButton'
import PNShadowBtn from '../../../components/PNShadowBtn'
import { ReactComponent as CrossArr } from '../../../assets/image/Home/svg/workArr.svg'

const AboutContact = () => {
  return (
    <div className='my-[50px] md:my-[75px] lg:my-[100px] xl:my-40 border-y-[1px] border-y-primary-100'>
      <div className='py-10 lg:py-20 text-center'>
        <PNBigText18 className='text-cstmGrey-100 font-semibold  font-syne mb-4 text-sm sm:text-base'>
          Tell us about your project!
        </PNBigText18>
        <span className='text-white capitalize text-3xl md:text-5xl lg:text-7xl xl:text-[80px] flex-wrap flex gap-x-2 sm:gap-x-4 justify-center items-center font-syne font-semibold'>Let’s Chat With <PNButton variant='link' className='!capitalize !text-3xl md:!text-5xl lg:!text-7xl xl:!text-[80px] hover:text-secondary group flex items-center gap-x-4'> Daniel <PNShadowBtn icon={<CrossArr className='group-hover:stroke-black duration-300' />} className='h-[50px] w-[50px] group-hover:bg-primary-50' /> </PNButton></span>
      </div>
    </div>
  )
}

export default AboutContact
