import React from 'react'
import PNBigText18 from './PNBigText18'
import PNButton from './PNButton'
import PNContainer from './PNContainer'
import PNh4 from './PNh4'
import AnimatedTxt from './AnimatedTxt'

const Footer = () => {

  const footerBtn = [
    {
      btn: 'facebook'
    },
    {
      btn: 'linkedin'
    },
    {
      btn: 'instagram'
    },
    {
      btn: 'dribbble'
    },
    {
      btn: 'behance'
    },
    {
      btn: 'pinterest'
    }
  ]

  const footerHead = [
    {
      subHead: 'We are in',
      Head: 'In New York, USA'
    },
    {
      subHead: 'Drop us a line',
      Head: 'hello@portnew.com'
    }
  ]

  const footerLinks = [
    {
      btn: 'About /'
    },
    {
      btn: 'About /'
    },
    {
      btn: 'services /'
    },
    {
      btn: 'portfolio /'
    },
    {
      btn: 'services /'
    },
    {
      btn: 'blog /'
    },
    {
      btn: 'contact'
    }
  ]

  return (
    <footer className='bg-footerBg bg-no-repeat overflow-hidden h-full w-full  py-20 relative'>
      <div className='bg-footerImg bg-center bg-irght ms-auto w-1/2 h-full bg-no-repeat absolute top-0 right-0 bottom-0'></div>
      <PNContainer>
        <div className='w-1/2 flex flex-col gap-12 relative'>
          <AnimatedTxt text={"Portnew Digital Agency . Design Agency ."} className='bg-cstm-blue-50 !absolute top-1/2 right-0 translate-x-3/4 translate-y-[-50%]' />
          <div className='flex flex-wrap max-w-[420px] gap-4'>
            {footerBtn.map((fbtn, fbtnIndex) => {
               return (
                 <PNButton variant='outlined'>
                   {fbtn.btn}
                 </PNButton>
               )
             })}
          </div>
          {footerHead.map((fHead, fHeadIndex) => {
             return (
               <div key={fHeadIndex}>
                 <PNBigText18 className='text-cstmGrey-100 font-syne font-semibold'>
                   {fHead.subHead}
                 </PNBigText18>
                 <PNh4 className='text-cstmGrey-100'>
                   {fHead.Head}
                 </PNh4>
               </div>
             )
           })}
          <div>
            <div>
              {footerLinks.map((flink, flinkIndex) => {
                 return (
                   <PNButton variant='link' className='!capitalize me-6 font-syne font-medium' key={flinkIndex}>
                     {flink.btn}
                   </PNButton>
                 )
               })}
            </div>
            <span className='my-4 h-0.5 w-8/12 bg-primary-50 block'></span>
            <PNBigText18 className='font-syne font-semibold text-cstmGrey-100'>
              © 2023 Portnew, All Right Reserved.
            </PNBigText18>
          </div>
        </div>
      </PNContainer>
    </footer>
  )
}

export default Footer
