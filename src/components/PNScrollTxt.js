import React from 'react'
import PNPrimaryTxt from './PNPrimaryTxt'
import PrimaryStrokeTxt from './PrimaryStrokeTxt'

const PNScrollTxt = ({mainClass, primaryText, strokeText, primaryClass, strokeClass}) => {

  const renderTexts = () => {
    const texts = []
    for (let i = 0; i < 50; i++) {
      texts.push(
        <>
        {
          primaryText && (
            <PNPrimaryTxt key={i} className={` ${primaryClass ? primaryClass : ''}`}>
              {primaryText}
            </PNPrimaryTxt>
          )
        }
        {
          strokeText && (
            <PrimaryStrokeTxt className={`uppercase items-center gap-6 font-syne font-semibold  ${strokeClass ? strokeClass : ''}`}>
              {strokeText}
            </PrimaryStrokeTxt>
          )
        }
        </>

      )
    }
    return texts
  }

  return (
    <div className={`flex whitespace-nowrap animate-scrollTxt leading-none ${mainClass ? mainClass : ''}`}>
      {renderTexts()}
    </div>
  )
}

export default PNScrollTxt
