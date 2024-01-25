import React from 'react'

const PNBigText18 = ({children, className, ...props}) => {
  return (
    <p className={`text-lg ${className ? className : ''}`} {...props}>
      {children}
    </p>
  )
}

export default PNBigText18
