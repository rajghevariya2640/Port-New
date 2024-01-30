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
    <div className='py-[50px] md:py-[75px] lg:py-[100px] xl:py-40'>
      <PNContainer>
        <div className='flex flex-wrap w-full gap-y-8'>
          {counter.map((count, countIndex) => {
             return (
               <div className='w-1/2 lg:w-3/12 text-center lg:text-start px-3' key={countIndex}>
                 <PrimaryStrokeTxt className='text-5xl sm:text-6xl md:text-8xl xl:text-[130px] leading-tight'>
                   {count.number}
                 </PrimaryStrokeTxt>
                 <PNh5 className='text-cstmGrey-100 !text-sm sm:!text-base md:!text-xl xl:!text-[26px]'>
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
