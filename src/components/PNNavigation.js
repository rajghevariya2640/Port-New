import React from 'react'
import PNButton from './PNButton'

const PNNavigation = ({...props}) => {
  return (
    <div className='flex gap-1'>
      <PNButton className={`uppercase  cursor-pointer ${props.prevClass}`} variant='primary'>
        Prev
      </PNButton>
      <PNButton className={`uppercase  cursor-pointer ${props.nextClass}`} variant='primary'>
        Next
      </PNButton>
    </div>
  )
}

export default PNNavigation
