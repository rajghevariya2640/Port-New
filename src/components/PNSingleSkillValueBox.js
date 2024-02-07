import React from 'react'
import PNPrimaryTxt from './PNPrimaryTxt'
import PNGreyTxt from './PNGreyTxt'
import PNButton from './PNButton'

const PNSingleSkillValueBox = ({boxClass, boxNumber, boxHead, boxInfo, boxHeadClass, boxHeadWrapClass, variant}) => {
  return (
    <div className={`mt-8 lg:mt-12 px-3 mx-[-12px] ${boxClass ? boxClass : ''}`}>
      <div className={`space-y-2 mb-4 ${boxHeadWrapClass ? boxHeadWrapClass : ''}`}>
        <PNPrimaryTxt>
          {boxNumber}
        </PNPrimaryTxt>
        <PNButton variant={variant} className={`font-syne font-semibold !block text-start ${boxHeadClass ? boxHeadClass : ''}`}>
          {boxHead}
        </PNButton>
      </div>
      <PNGreyTxt className='leading-relaxed'>
        {boxInfo}
      </PNGreyTxt>
    </div>
  )
}

export default PNSingleSkillValueBox
