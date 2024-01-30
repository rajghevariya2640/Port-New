import React from 'react'

const PNh4 = ({className, ...props}) => {
  return (
    <h4 className={`text-2xl sm:text-3xl md:text-4xl lg:text-[40px] xl:text-5xl leading-tight ${className ? className : ''}`} {...props}>
      {props.children}
    </h4>
  )
}

export default PNh4
