import React from 'react'

const PNh3 = ({children, className, ...props}) => {
  return (
      <h3 className={` text-[52px] leading-tight ${className ? className : ''}`} {...props}>{children}</h3>
  )
}

export default PNh3
