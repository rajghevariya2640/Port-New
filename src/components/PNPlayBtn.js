import React from 'react'

const PNPlayBtn = ({click}) => {
  return (
    <div className="h-16 md:h-20 w-16 md:w-20 z-10 mx-auto rounded-full bg-primary-100 flex items-center justify-center relative after:content-[''] after:absolute after:h-full after:w-full after:rounded-full after:z-[-1] after:bg-primary-100 after:opacity-50 after:animate-pulse hover:cursor-pointer"
      onClick={click}>
      <span className='w-0 h-0 ms-1.5 border-l-[20px] md:border-l-[28px] block border-l-white border-t-[12px] md:border-t-[16px] border-t-transparent border-b-[12px] md:border-b-[16px] border-b-transparent'></span>
    </div>
  )
}

export default PNPlayBtn
