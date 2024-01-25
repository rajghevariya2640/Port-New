import React from 'react'

const PrimaryStrokeTxt = ({className, ...props}) => {
  return (
    <span className={`txt-stroke txt-stroke-primary text-transparent text-[120px] ${className ? className : ''}`} {...props}>
      {props.children}
    </span>
  )
}

export default PrimaryStrokeTxt
