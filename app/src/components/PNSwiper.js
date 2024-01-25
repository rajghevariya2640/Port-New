import React from 'react'
import { Swiper } from 'swiper/react'


const PNSwiper = ({children, className, ...props}) => {
  return (
    <Swiper className={`${className ? className : ''}`} {...props}>
        {children}
    </Swiper>
  )
}

export default PNSwiper
