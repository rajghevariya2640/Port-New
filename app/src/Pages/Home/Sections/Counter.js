import React from 'react'
import PNContainer from '../../../components/PNContainer'
import PrimaryStrokeTxt from '../../../components/PrimaryStrokeTxt'
import PNh5 from '../../../components/PNh5'

const Counter = () => {

  const counter = [
    {
      number: '929',
      head: 'Project Complete'
    },
    {
      number: '464',
      head: 'Happy Customers'
    },
    {
      number: '166',
      head: 'Years Experiences'
    },
    {
      number: '122',
      head: 'Awards Achivement'
    }
  ]

  return (
    <div className='py-40'>
      <PNContainer>
        <div className='flex'>
          {counter.map((count, countIndex) => {
             return (
               <div className='w-3/12' key={countIndex}>
                 <PrimaryStrokeTxt className='text-[130px] leading-tight'>
                   {count.number}
                 </PrimaryStrokeTxt>
                 <PNh5 className='text-cstmGrey-100'>
                   {count.head}
                 </PNh5>
               </div>
             )
           })}
        </div>
      </PNContainer>
    </div>
  )
}

export default Counter
