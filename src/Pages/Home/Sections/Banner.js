import React from 'react'
import PNBigText18 from '../../../components/PNBigText18'
import PNButton from '../../../components/PNButton'
import PNContainer from '../../../components/PNContainer'
import PNh1 from '../../../components/PNh1'

const Banner = () => {
  return (
    <div className='bg-Banner bg-no-repeat bg-cover flex items-center h-screen min-h-[48rem] w-full'>
      <PNContainer>
        <div className='lg:w-10/12'>
          <PNh1 className='font-bold'>
            GLOBAL CREATIVE MINDS AGENCY
          </PNh1>
          <PNBigText18 className='text-white max-w-[775px] py-8'>
            Our digital agency specializes in helping businesses of all sizes navigate the ever-evolving digital landscape. From website design and development to digital marketing.
          </PNBigText18>
          <PNButton variant='primary' className='mt-4 -z-[0]'>
            View project
          </PNButton>
        </div>
      </PNContainer>
    </div>
  )
}

export default Banner
