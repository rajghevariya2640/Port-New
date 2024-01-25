import React from 'react'

const PNContainer = ({children, className, ...props}) => {
  return (
      <div className={`container ${className ? className : ''}`} {...props}>
          {children}
    </div>
  )
}

export default PNContainer
