import React from 'react'
import PNBigText20 from '../../../components/PNBigText20'
import PNContainer from '../../../components/PNContainer'
import PNh2 from '../../../components/PNh2'
import PNButton from '../../../components/PNButton'

const Solution = () => {
  return (
    <div className='py-40 text-center'>
      <PNContainer>
        <PNh2 className='txt-stroke txt-stroke-white uppercase text-transparent max-w-[1150px] w-full mx-auto leading-tight duration-500 font-syne font-semibold hover:text-white'>
          We Are Complete Solution For Every Idea
        </PNh2>
        <PNBigText20 className='text-cstmGrey-50 max-w-[1000px] mx-auto mt-8'>
          Design sweet lorem ipsum? You got it with Cupcake Ipsum, the only text generator that includes marsh mallows, carrot cake, and perhaps e on top. Design sweet lorem
          ipsum? You got it with Cupcake Ipsum, the only text generator that includes marsh mallows, carrot cake.
        </PNBigText20>
        <PNButton variant='secondary' className='mt-14'>
          view project
        </PNButton>
      </PNContainer>
    </div>
  )
}

export default Solution