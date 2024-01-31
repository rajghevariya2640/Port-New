import React from 'react'
import PNh3 from './PNh3'
import PNPrimaryTxt from './PNPrimaryTxt'

const PNHeading = ({subTitle, title, headClass, headWrapClass, bgClass}) => {
  return (
    <div className={`space-y-3 flex flex-col ${headWrapClass ? headWrapClass :''}
    `}>
      <PNPrimaryTxt className={`uppercase text-xs lg:text-base ${bgClass ? bgClass : ''}`}>
        {subTitle}
      </PNPrimaryTxt>
      <PNh3 className={`text-white ${headClass ? headClass : ''}`} data-aos='fade-up' data-offset='500'>
        {title}
      </PNh3>
    </div>
  )
}

export default PNHeading
