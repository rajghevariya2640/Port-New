import React from 'react'

const PNShadowBtn = ({icon, className, ...props}) => {
  return (
    <div className={`bg-cstm-blue-50 rounded-full p-[15px] hover:bg-primary-50 duration-500 shadow-btn flex items-center justify-center ${className ? className : ''}`} {...props}>
          {icon}
          {props.children}
    </div>
  )
}

export default PNShadowBtn
