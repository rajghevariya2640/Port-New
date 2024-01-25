import React from 'react'
import PNContainer from '../../../components/PNContainer'
import PNHeading from '../../../components/PNHeading'
import PNButton from '../../../components/PNButton'
import { ReactComponent as Arrow } from '../../../assets/image/svg/workArr.svg'
import PNBigText18 from '../../../components/PNBigText18'

import AnimatedTxt from '../../../components/AnimatedTxt'

const Award = () => {

  const awardRow = [
    {
      name: 'Awwwards',
      date: '05 Jan 2023',
      btn: 'see project'
    },
    {
      name: 'Github',
      date: '09 Feb 2023',
      btn: 'see project'
    },
    {
      name: 'Zencode',
      date: '14 Mar 2023',
      btn: 'see project'
    },
    {
      name: 'Drobbble',
      date: '16 Mar 2023',
      btn: 'see project'
    }
  ]

  return (
    <div className='py-40'>
      <PNContainer>
        <div className='flex space-x-4'>
          <div className='w-5/12'>
            <PNHeading subTitle='AWARD' title='Our Hard Work Has Been Multiple Awards' headWrapClass='max-w-[540px] w-full' />
            <AnimatedTxt text={'Design Agency Portnew Digital Agency .'} />
          </div>
          <div className='w-7/12'>
            <table className='w-full'>
              <tbody>
                {awardRow.map((row, rowIndex) => {
                   return (
                     <tr key={rowIndex} className='py-12 px-8 border-t-[1px] flex justify-between border-primary-100'>
                       <td>
                         <PNBigText18 className='font-syne text-cstmGrey-100 font-semibold'>
                           {row.name}
                         </PNBigText18>
                       </td>
                       <td>
                         <PNBigText18 className='font-syne text-cstmGrey-100 font-semibold'>
                           {row.date}
                         </PNBigText18>
                       </td>
                       <td>
                         <PNButton variant='link' className='flex space-x-2 items-center !capitalize !text-primary-50'>
                           {row.btn}
                           <Arrow className='stroke-primary-50 h-[18px]' />
                         </PNButton>
                       </td>
                     </tr>
                   )
                 })}
              </tbody>
            </table>
          </div>
        </div>
      </PNContainer>
    </div>
  )
}

export default Award
