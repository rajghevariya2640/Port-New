import React from 'react'

const PNh2 = ({children, className, ...props}) => {
  return (
      <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight ${className ? className : ''}`} {...props}>
          {children}
    </h2>
  )
}

export default PNh2
