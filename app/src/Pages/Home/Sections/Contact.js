import React from 'react'
import PNBigText18 from '../../../components/PNBigText18'
import PNContainer from '../../../components/PNContainer'
import PNh4 from '../../../components/PNh4'
import PNButton from '../../../components/PNButton'

const Contact = () => {
  return (
    <div className='py-40'>
      <PNContainer>
        <div className='text-center bg-contact bg-cover bg-no-repeat py-28'>
          <PNBigText18 className='text-cstmGrey-100 font-semibold font-syne'>
            Tell us about your project!
          </PNBigText18>
          <PNh4 className='max-w-[800px] mt-3 mx-auto text-white'>
            Do you have a project in your mind? Keep connect us.
          </PNh4>
          <PNButton variant='primary' className='mt-12 !uppercase'>
            View projects
          </PNButton>
        </div>
      </PNContainer>
    </div>
  )
}

export default Contact
