import React from 'react'

const PNh5 = ({children, className, ...props}) => {
  return (
      <h5 className={`text-xl md:text-[26px] leading-tight ${className ? className : ''}`} {...props}>{children}</h5>
  )
}

export default PNh5
