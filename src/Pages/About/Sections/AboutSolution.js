import React from 'react'
import PNh4 from '../../../components/PNh4'
import PNGreyTxt from '../../../components/PNGreyTxt'
import PNContainer from '../../../components/PNContainer'
import Img1 from '../../../assets/image/About/png/Solution1.png'
import Img2 from '../../../assets/image/About/png/Solution2.png'

const AboutSolution = () => {
  return (
    <div className='py-[50px] md:py-[75px] lg:py-[100px] xl:py-40'>
      <PNContainer>
        <div className='flex items-center flex-wrap '>
          <div className='w-full lg:w-6/12 relative px-3'>
            <div className='xl:max-w-[615px]  h-full sm:h-[500px]'>
              <img src={Img1} alt='Solution 1' className='h-full' />
            </div>
            <div className='absolute bottom-[-12px] left-0 max-h-[326px] max-w-[300px] hidden md:block'>
              <img src={Img2} alt='solution' className='h-full' />
            </div>
          </div>
          <div className='w-full lg:w-6/12 px-3 mt-8 lg:mt-0 '>
            <div className='w-full xxl:max-w-[575px]'>
              <PNh4 className='text-white mb-5 md:mb-8 lg:mb-11'>
                We Are Complete Solution For Every Idea
              </PNh4>
              <div className="space-y-4 pb-8 lg:pb-11 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-3/12 after:bg-secondary">
                <PNGreyTxt>
                  Design sweet lorem ipsum? You got it with Cupcake Ipsum, the only text generator that includes marsh mallows, carrot cake, and perhaps e on top. Design sweet lorem
                  ipsum? You got it with Cupcake Ipsum, the only text generator that includes marsh mallows, carrot cake.
                </PNGreyTxt>
                <PNGreyTxt>
                  Design sweet lorem ipsum? You got it with Cupcake Ipsum, the only text generator that includes marsh mallows, carrot cake, and perhaps e on top. Design sweet lorem
                  ipsum
                </PNGreyTxt>
              </div>
            </div>
          </div>
        </div>
      </PNContainer>
    </div>
  )
}

export default AboutSolution
