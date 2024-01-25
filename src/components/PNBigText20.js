import React from 'react'

const PNBigText20 = ({children, className, ...props}) => {
  return (
    <p className={`text-xl ${className ? className : ''}`} {...props}>
      {children}
    </p>
  )
}

export default PNBigText20
