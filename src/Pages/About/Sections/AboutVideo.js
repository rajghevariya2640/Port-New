import React, { useRef, useState } from 'react'
import PNContainer from '../../../components/PNContainer'
import PNHeading from '../../../components/PNHeading'
import PNGreyTxt from '../../../components/PNGreyTxt'
import PNButton from '../../../components/PNButton'
import Video1 from '../../../assets/Video/HomeVideo.mp4'
import { ReactComponent as CloseIcn } from '../../../assets/image/Home/svg/close.svg'
import PNPlayBtn from '../../../components/PNPlayBtn'

const AboutVideo = () => {

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
    <div className='bg-video py-[50px] md:py-[75px] lg:py-[100px] xl:py-40 bg-cover bg-no-repeat bg-center overflow-hidden bg-fixed' onClick={handleClickOutside}>
      <PNContainer>
        <div className='flex flex-wrap lg:space-x-6 gap-y-8'>
          <div className='w-full lg:w-5/12'>
            <PNHeading title='Highly Experienced People With Us' headClass='!leading-tight' headWrapClass='text-center lg:text-start' />
            <PNGreyTxt className='mt-3 sm:mt-5 md:mt-8 lg:mt-10 text-center lg:text-start'>
              Design sweet lorem ipsum? You got it with Cupcake Ipsum, the only text generator that includes marsh mallows, carrot cake, and perhaps e on top. Design sweet lorem
              ipsum?
            </PNGreyTxt>
            <PNButton variant='secondary' className='mx-auto lg:mx-0 block mt-3 sm:mt-5 md:mt-8 lg:mt-10'>
              view projects
            </PNButton>
          </div>
          <div className='w-full lg:w-6/12 '>
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
            <div className='bg-AboutVideo w-full bg-cover bg-no-repeat flex items-center h-[300px] sm:h-[385px] lg:max-w-[665px]'>
              <PNPlayBtn click={openVideo} />
            </div>
          </div>
        </div>
      </PNContainer>
    </div>
  )
}

export default AboutVideo
