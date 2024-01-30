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
            <PNPrimaryTxt key={i} className={`text-4xl md:text-5xl lg:text-6xl ${primaryClass ? primaryClass : ''}`}>
              {primaryText}
            </PNPrimaryTxt>
          )
        }
        {
          strokeText && (
            <PrimaryStrokeTxt className={`flex whitespace-nowrap animate-scrollTxt uppercase items-center gap-6 font-syne font-semibold leading-none text-5xl sm:text-6xl md:text-8xl xl:text-[120px] ${strokeClass ? strokeClass : ''}`}>
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
    <div className={`space-x-5 flex whitespace-nowrap animate-scrollTxt leading-none ${mainClass ? mainClass : ''}`}>
      {renderTexts()}
    </div>
  )
}

export default PNScrollTxt
