import React from 'react'

const PNGreyTxt = ({children, className, ...props}) => {
  return (
    <p className={`text-cstmGrey-50 ${className ? className : ''}`} {...props}>
        {children}
    </p>
  )
}

export default PNGreyTxt
