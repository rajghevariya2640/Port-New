import React from 'react'

const Loader = () => {
  return (
    <div className='h-screen w-full bg-primary-100 animate-fade flex items-center z-[100] fixed top-0 left-0 right-0 bottom-0'>
      <span className='mx-auto w-[10%] h-[3px] bg-secondary animate-loaderLine block'></span>
    </div>
  )
}

export default Loader
