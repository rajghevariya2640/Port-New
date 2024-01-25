import React from 'react'

const PNPrimaryTxt = ({children, className , ...props}) => {
  return (
    <span className={`text-primary-50 ${className? className : ''}`} {...props}>{children}</span>
  )
}

export default PNPrimaryTxt
