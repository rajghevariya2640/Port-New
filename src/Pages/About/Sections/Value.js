import React from 'react'
import PNSkillValue from '../../../components/PNSkillValue'

const Value = () => {

  const value = [
    [
      {
        text: 'Cooperation',
        boxNumber: '01',
        boxHead: 'Cooperation',
        boxInfo: 'Design sweet lorem ipsum? You got it with Cupcake Ipsum, the only text generator that includes marsh mallows, carrot cake, and perhaps e on top. Design sweet lorem ipsum? You got it with Cupcake Ipsum, the only text generator.',
        boxClass: 'xxl:flex items-center gap-x-10 mb-4',
        boxHeadClass: '!text-2xl sm:!text-3xl md:!text-4xl lg:!text-[40px] xl:!text-5xl break-all',
        boxHeadWrapClass: 'max-w-[395px] w-full',
      },
      {
        text: 'Useful',
        boxNumber: '02',
        boxHead: 'Useful',
        boxInfo: 'Design sweet lorem ipsum? You got it with Cupcake Ipsum, the only text generator that includes marsh mallows, carrot cake, and perhaps e on top. Design sweet lorem ipsum? You got it with Cupcake Ipsum, the only text generator.',
        boxClass: 'xxl:flex items-center gap-x-10 mb-4',
        boxHeadClass: '!text-2xl sm:!text-3xl md:!text-4xl lg:!text-[40px] xl:!text-5xl break-all',
        boxHeadWrapClass: 'max-w-[395px] w-full',
      },
      {
        text: 'Effective',
        boxNumber: '03',
        boxHead: 'Effective',
        boxInfo: 'Design sweet lorem ipsum? You got it with Cupcake Ipsum, the only text generator that includes marsh mallows, carrot cake, and perhaps e on top. Design sweet lorem ipsum? You got it with Cupcake Ipsum, the only text generator.',
        boxClass: 'xxl:flex items-center gap-x-10 mb-4',
        boxHeadClass: '!text-2xl sm:!text-3xl md:!text-4xl lg:!text-[40px] xl:!text-5xl break-all',
        boxHeadWrapClass: 'max-w-[395px] w-full',
      },
    ]
  ]

  return (
    <>
      {value.map((valueData, valueIndex) => {
        return (
          <PNSkillValue
            key={valueIndex}
            singleBox={valueData}
            mainClass='pb-[50px] md:pb-[75px] lg:pb-[100px] xl:pb-40'
            mainHead='Value'
            mainHeadClass='uppercase'
            mainHeadTxt='Strength・Feature'
            variant="none"
            circle={true}
             circleData={valueData} />
         )
       })}
    </>
  )
}

export default Value
