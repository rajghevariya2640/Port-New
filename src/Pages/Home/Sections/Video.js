import React, { useRef, useState } from 'react'
import PNContainer from '../../../components/PNContainer'
import PNButton from '../../../components/PNButton'
import { ReactComponent as CloseIcn } from '../../../assets/image/svg/close.svg'
import Video1 from '../../../assets/Video/HomeVideo.mp4'

const Video = () => {
  const [isOpen, setIsOpen] = useState(false)
  const videoRef = useRef()

  const openVideo = () => {
    setIsOpen(true)
    document.body.style.overflowY = 'hidden'
    document.body.style.paddingRight = '15px'
  }

  const closeVideo = () => {
    setIsOpen(false)
    document.body.style.overflowY = 'auto'
    document.body.style.paddingRight = '0px' // Enable scrolling
  }

  const handleClickOutside = (e) => {
    if (videoRef.current) {
      closeVideo()
    }
  }

  return (
    <div className='bg-video py-[50px] md:py-[75px] lg:py-[100px] xl:py-40 bg-cover bg-no-repeat bg-center overflow-hidden ' onClick={handleClickOutside}>
      <PNContainer>
        <div className='py-16 lg:py-24'>
          {isOpen && (
           <div ref={videoRef} className='fixed top-0 left-0 flex items-center justify-center bg-cstmGrey-0 h-screen w-full z-[51]'>
             <div className='relative' ref={videoRef}>
               <video
                 width='100%'
                 height='auto'
                 autoPlay
                 controls
                 src={Video1}
                 type='video/mp4'>
               </video>
               <PNButton onClick={closeVideo} variant='primary' className='!absolute top-4 right-4 text-black !rounded-full !p-0.5'>
                 <CloseIcn />
               </PNButton>
             </div>
           </div>
           )}
          <div className="h-16 md:h-20 w-16 md:w-20 z-10 mx-auto rounded-full bg-primary-100 flex items-center justify-center relative after:content-[''] after:absolute after:h-full after:w-full after:rounded-full after:z-[-1] after:bg-primary-100 after:opacity-50 after:animate-pulse hover:cursor-pointer"
            onClick={openVideo}>
            <span className='w-0 h-0 ms-1.5 border-l-[20px] md:border-l-[28px] block border-l-white border-t-[12px] md:border-t-[16px] border-t-transparent border-b-[12px] md:border-b-[16px] border-b-transparent'></span>
          </div>
        </div>
      </PNContainer>
    </div>
  )
}

export default Video
