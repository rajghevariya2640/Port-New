import React from 'react'
import PNContainer from '../../../components/PNContainer'
import PNHeading from '../../../components/PNHeading'
import PNTable from '../../../components/PNTable'

const AboutAward = () => {

  const awardTbl = [
    [{
      head: 'Awwwards',
      date: '05 Jan 2023',
      info: 'Design sweet lorem ipsum? You got it with Cupcake Ipsum, the only text generator that includes marsh mallows',
      btn: 'see project'
    },
    {
      head: 'Github',
      date: '09 Feb 2023',
      info: 'Design sweet lorem ipsum? You got it with Cupcake Ipsum, the only text generator that includes marsh mallows',
      btn: 'see project'
    },
    {
      head: 'Zencode',
      date: '14 Mar 2023',
      info: 'Design sweet lorem ipsum? You got it with Cupcake Ipsum, the only text generator that includes marsh mallows',
      btn: 'see project'
    },
    {
      head: 'Drobbble',
      date: '16 Mar 2023',
      info: 'Design sweet lorem ipsum? You got it with Cupcake Ipsum, the only text generator that includes marsh mallows',
      btn: 'see project'
    }]
  ]

  return (
    <div className='pb-[50px] md:pb-[75px] lg:pb-[100px] xl:pb-40'>
      <PNContainer>
        <PNHeading
          subTitle='Award'
          title='Our Award Achievement'
          bgClass='bg-subHead'
          headWrapClass='text-center' />
        {awardTbl.map((table, tableIndex) => {
           return (
             <PNTable tableData={table} key={tableIndex} trClass="flex-col gap-y-2  xxl:flex-row" tableClass="mt-8 lg:mt-20" />
           )
         })}
      </PNContainer>
    </div>
  )
}

export default AboutAward
