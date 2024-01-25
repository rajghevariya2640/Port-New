import React from 'react'

const awardCircleText = ({text, className}) => {
  return (
    <svg
      viewBox='0 0 200 200'
      width='140'
      height='140'
          stroke='#fff'
      className={`${className ? className : ''}`}>
      <path
        id='link-circle'
        d='M 20, 100 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0'
        stroke='none'
        fill='none'></path>
      <text class='link__text'>
        <textPath
          href='#link-circle'
          stroke='none'
          fill='rgb(207 221 232'
          className='font-syne font-semibold circularTxt text-xl'>
          {text}
        </textPath>
      </text>
    </svg>
  )
}

export default awardCircleText
