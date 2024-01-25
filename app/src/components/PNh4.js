import React from 'react'

const PNh4 = ({className, ...props}) => {
  return (
    <h4 className={`text-5xl leading-tight ${className ? className : ''}`} {...props}>
      {props.children}
    </h4>
  )
}

export default PNh4
