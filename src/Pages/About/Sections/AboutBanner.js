import React from 'react'
import PNh3 from '../../../components/PNh3'
import PNGreyTxt from '../../../components/PNGreyTxt'

const AboutBanner = () => {
  return (
    <div className='h-[45vh] min-h-[20rem] bg-AboutBanner bg-cover bg-no-repeat flex justify-center items-center flex-col'>
      <div className='flex space-x-6 mb-3'>
        <PNGreyTxt>
          -- Home
        </PNGreyTxt>
        <PNGreyTxt>
          About --
        </PNGreyTxt>
      </div>
      <PNh3 className='text-cstmGrey-100'>
        About Us
      </PNh3>
    </div>
  )
}

export default AboutBanner
