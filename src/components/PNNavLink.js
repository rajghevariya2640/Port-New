import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const PNNavLink = ({className,...props}) => {
  return (
    <Link className={`${className ? className : ''}`} {...props}>
      {props.children}
      </Link>
  )
}

export default PNNavLink
