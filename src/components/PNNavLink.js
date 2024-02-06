import React from 'react'
import { NavLink } from 'react-router-dom'

const PNNavLink = ({children, className, ...props}) => {
  return (
    <NavLink className={`${className ? className : ''}`} {...props}>
      {children}
      </NavLink>
  )
}

export default PNNavLink
