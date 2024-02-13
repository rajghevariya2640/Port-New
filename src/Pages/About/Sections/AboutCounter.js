import React from 'react'
import PNContainer from '../../../components/PNContainer'
import PrimaryStrokeTxt from '../../../components/PrimaryStrokeTxt'
import PNh6 from '../../../components/PNh6'
import CountUp from 'react-countup'

const AboutCounter = () => {

  const singleCounter = [
    {
      number: '99',
      head: 'Project Complete'
    },
    {
      number: '46',
      head: 'Happy Customers'
    },
    {
      number: '0',
      head: 'Years Experiences'
    },
    {
      number: '0',
      head: 'Awards Achivement'
    }
  ]

  return (
    <div className='pb-[50px] md:pb-[75px] lg:pb-[100px] xl:pb-40'>
      <PNContainer>
        <div className='flex flex-wrap justify-between gap-y-5'>
          {singleCounter.map((counter, counterIndex) => {
             return (
               <div className="w-[48%] md:w-[175px] lg:max-w-[200px] relative after:content-[''] xl:after:absolute after:top-0 xl:after:left-[-40%] xxl:after:left-[-60%] 3xl:after:left-[-75%] first:after:hidden after:h-full after:w-0.5 after:bg-primary-100">
                 <PrimaryStrokeTxt className='text-5xl sm:text-6xl md:text-8xl xl:text-[130px] leading-tight border-b-[1px] block pb-2 border-b-secondary'>
                   <CountUp
                     start={0}
                     end={counter.number}
                     delay={2}
                     duration={5}></CountUp>
                 </PrimaryStrokeTxt>
                 <PNh6 className='text-cstmGrey-100 mt-2 md:mt-8 max-w-[80%]'>
                   {counter.head}
                 </PNh6>
               </div>
             )
           })}
        </div>
      </PNContainer>
    </div>
  )
}

export default AboutCounter
