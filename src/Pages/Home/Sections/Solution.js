import React from 'react'
import PNBigText20 from '../../../components/PNBigText20'
import PNContainer from '../../../components/PNContainer'
import PNh2 from '../../../components/PNh2'
import PNButton from '../../../components/PNButton'

const Solution = () => {
  return (
    <div className='py-[50px] md:py-[75px] lg:py-[100px] xl:py-[50px] text-center'>
      <PNContainer>
        <PNh2 className='txt-stroke txt-stroke-white uppercase text-transparent max-w-[1150px] w-full mx-auto leading-tight duration-500 font-syne font-semibold hover:text-white' data-aos='fade-up'>
          We Are Complete Solution For Every Idea
        </PNh2>
        <PNBigText20 className='text-cstmGrey-50 max-w-[1000px] mx-auto mt-4 sm:mt-6 lg:mt-8'>
          Design sweet lorem ipsum? You got it with Cupcake Ipsum, the only text generator that includes marsh mallows, carrot cake, and perhaps e on top. Design sweet lorem
          ipsum? You got it with Cupcake Ipsum, the only text generator that includes marsh mallows, carrot cake.
        </PNBigText20>
        <PNButton variant='secondary' className='mt-4 sm:mt-6 lg:mt-10 xl:mt-14'>
          view project
        </PNButton>
      </PNContainer>
    </div>
  )
}

export default Solution
