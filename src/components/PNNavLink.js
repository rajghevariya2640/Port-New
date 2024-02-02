import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const PNNavLink = ({children, className, ...props}) => {
  return (
    <Link className={`${className ? className : ''}`} {...props}>
      {children}
      </Link>
  )
}

export default PNNavLink
