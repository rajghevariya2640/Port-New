import React from 'react'
import PNContainer from './PNContainer'
import PNh4 from './PNh4'
import PNPrimaryTxt from './PNPrimaryTxt'
import PNSingleSkillValueBox from './PNSingleSkillValueBox'

const PNSkillValue = ({mainClass, mainHead, mainHeadTxt, singleBox, boxesWrapperClass, mainHeadClass, variant, circle, circleData}) => {
  return (
    <div className={`${mainClass ? mainClass : ''}`}>
      <PNContainer>
        <div className='md:flex flex-wrap'>
          <div className='w-full lg:w-2/12'>
            <PNh4 className={`text-white mb-4 ${mainHeadClass ? mainHeadClass : ''}`}>
              {mainHead}
            </PNh4>
            <PNPrimaryTxt>
              {mainHeadTxt}
            </PNPrimaryTxt>
          </div>
          <div className='w-full lg:w-10/12 mt-6 border-t-2 border-t-primary-50'>
            {
              circle && (
                <div className='md:flex justify-center items-center mt-12 hidden'>
                  {
                    circleData.map((circle, circleIndex) => {
                      return (
                        <div key={circleIndex} className='h-[240px]  xl:h-[300px] xxl:h-[350px] 3xl:h-[410px] max-w-[240px] xl:max-w-[300px] xxl:max-w-[350px] 3xl:max-w-[410px] mx-[-10px] w-full rounded-full border-[1px] border-primary-100 flex items-center justify-center'>
                          <span className='text-cstmGrey-100 text-lg md:text-xl lg:text-[32px] font-syne font-semibold'>{circle.text}</span>
                        </div>
                      )
                    })
                  }
                </div>
              )
            }
                      <div className={`${boxesWrapperClass ? boxesWrapperClass : ''}`}>
                          
            {singleBox?.map((sBox, sBoxIndex) => {
                return (
                    
                    <PNSingleSkillValueBox boxNumber={sBox.boxNumber} key={sBoxIndex} boxHead={sBox.boxHead} boxClass={sBox.boxClass} boxInfo={sBox.boxInfo} boxHeadWrapClass={sBox.boxHeadWrapClass} boxHeadClass={sBox.boxHeadClass} variant={variant} />
                    )
                })}
                </div>
          </div>
        </div>
      </PNContainer>
    </div>
  )
}

export default PNSkillValue
