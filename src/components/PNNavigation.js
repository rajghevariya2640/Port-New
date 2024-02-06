import React from 'react'
import PNButton from './PNButton'

const PNNavigation = ({...props}) => {
  return (
    <div className='flex gap-1'>
      <PNButton className={`uppercase  cursor-pointer !py-2 px-4 lg:!py-3 lg:px-6 ${props.prevClass}`} variant='primary'>
        Prev
      </PNButton>
      <PNButton className={`uppercase  cursor-pointer !py-2 px-4 lg:!py-3 lg:px-6 ${props.nextClass}`} variant='primary'>
        Next
      </PNButton>
    </div>
  )
}

export default PNNavigation
