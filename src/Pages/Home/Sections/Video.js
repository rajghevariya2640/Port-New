import React, { useRef, useState } from 'react'
import PNContainer from '../../../components/PNContainer'
import PNButton from '../../../components/PNButton'
import { ReactComponent as CloseIcn } from '../../../assets/image/Home/svg/close.svg'
import Video1 from '../../../assets/Video/HomeVideo.mp4'
import PNPlayBtn from '../../../components/PNPlayBtn'

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
    document.body.style.paddingRight = '0px'
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
           <div    className='fixed top-0 left-0 flex items-center justify-center bg-cstmGrey-0 h-screen w-full z-[51]'>
             <div className='relative' >
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
          <PNPlayBtn click={openVideo}/>
        </div>
      </PNContainer>
    </div>
  )
}

export default Video
