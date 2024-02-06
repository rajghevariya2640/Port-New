import React from 'react'
import PNh3 from '../../../components/PNh3'
import PNGreyTxt from '../../../components/PNGreyTxt'
import PNNavLink from '../../../components/PNNavLink'

const AboutBanner = () => {
  return (
    <div className='h-[30vh] min-h-[13rem] sm:h-[35vh] sm:min-h-[16rem] lg:h-[45vh] lg:min-h-[20rem] bg-AboutBanner bg-cover bg-no-repeat flex justify-center items-center flex-col'>
      <div className='flex space-x-6 mb-3'>
        <PNNavLink to='/'>
          <PNGreyTxt>
            -- Home
          </PNGreyTxt>
        </PNNavLink>
        <PNNavLink to='/about'>
          <PNGreyTxt>
            About --
          </PNGreyTxt>
        </PNNavLink>
      </div>
      <PNh3 className='text-cstmGrey-100'>
        About Us
      </PNh3>
    </div>
  )
}

export default AboutBanner
