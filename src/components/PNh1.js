import React from 'react'

const PNh1 = ({children, className, ...props}) => {
  return (
    <h1 className={`text-white text-8xl leading-tight ${className ? className : ''}`} {...props}>
      {children}
    </h1>
  )
}

export default PNh1
