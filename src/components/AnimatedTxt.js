import React from 'react'
import CircleText from '../assets/image/svg/awardCircleText.js'
import { ReactComponent as CircleArrow } from '../assets/image/svg/awardCircleArrow.svg'

const AnimatedTxt = ({text}) => {
  return (
    <div className='relative shadow-btn h-[160px] w-[160px] rounded-full mt-10'>
      <CircleText className='animate-rotate absolute origin-[0%_0%] top-1/2 left-1/2' text={text} />
      <CircleArrow className='absolute translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 z-10' />
    </div>
  )
}

export default AnimatedTxt
