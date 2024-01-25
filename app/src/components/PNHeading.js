import React from 'react'
import PNh3 from './PNh3'
import PNPrimaryTxt from './PNPrimaryTxt'

const PNHeading = ({subTitle, title, headClass, headWrapClass}) => {
  return (
    <div className={`space-y-3 flex flex-col ${headWrapClass ? headWrapClass :''}
    `}>
      <PNPrimaryTxt className='uppercase'>
        {subTitle}
      </PNPrimaryTxt>
      <PNh3 className={`text-white ${headClass ? headClass : ''}`}>
        {title}
      </PNh3>
    </div>
  )
}

export default PNHeading
