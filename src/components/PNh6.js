import React from 'react'

const PNh6 = ({children, className, ...props}) => {
  return (
    <h6 className={`text-sm sm:text-base md:text-lg lg:text-[22px] leading-tight ${className ? className : ''}`} {...props}>
      {children}
    </h6>
  )
}

export default PNh6
