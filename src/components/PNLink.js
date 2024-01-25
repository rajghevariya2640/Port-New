import React from 'react'

const PNLink = ({className, ...props}) => {
  return (
    <a {...props} className={`cursor-pointer ${className ? className : ''}`}>
      {props.children}
    </a>
  )
}

export default PNLink
