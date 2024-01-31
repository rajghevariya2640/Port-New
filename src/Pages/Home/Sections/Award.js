import React from 'react'
import PNContainer from '../../../components/PNContainer'
import PNHeading from '../../../components/PNHeading'

import AnimatedTxt from '../../../components/AnimatedTxt'
import PNTable from '../../../components/PNTable'

const Award = () => {
  const awardTbl = [
    
    [{
      head: 'Awwwards',
      date: '05 Jan 2023',
      btn: 'see project'
    }],
    [{
      head: 'Github',
      date: '09 Feb 2023',
      btn: 'see project'
    }],
    [{
      head: 'Zencode',
      date: '14 Mar 2023',
      btn: 'see project'
    }],
    [{
      head: 'Drobbble',
      date: '16 Mar 2023',
      btn: 'see project'
    }]
    
  ]

  return (
    <div className='py-[50px] md:py-[75px] lg:py-[100px] xl:py-40'>
      <PNContainer>
        <div className='flex flex-wrap gap-y-5'>
          <div className='w-full xl:w-5/12'>
            <PNHeading subTitle='AWARD' title='Our Hard Work Has Been Multiple Awards' headWrapClass='xl:max-w-[540px] w-full'/>
            <AnimatedTxt text={'Design Agency Portnew Digital Agency .'} className='mt-10 hidden xl:block' />
          </div>
          <div className='w-full xl:w-7/12'>
            {awardTbl?.map((awrdTbl, awrdTblIndex) => {
               return (
                 <PNTable key={awrdTblIndex} tableData={awrdTbl} />
               )
             })}
          </div>
        </div>
      </PNContainer>
    </div>
  )
}

export default Award
