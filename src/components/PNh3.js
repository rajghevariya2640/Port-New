import React from 'react'

const PNh3 = ({children, className, ...props}) => {
  return (
      <h3 className={` text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[52px] leading-tight ${className ? className : ''}`} {...props}>{children}</h3>
  )
}

export default PNh3
