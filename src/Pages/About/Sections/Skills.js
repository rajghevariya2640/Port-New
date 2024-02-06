import React from 'react'
import PNSkillValue from '../../../components/PNSkillValue'
import PNh5 from '../../../components/PNh5'
import PNButton from '../../../components/PNButton'

const Skills = () => {

  const skill = [

    [
      {
        boxNumber: '01',
        boxHead: 'Web Coading',
        boxInfo: 'Design sweet lorem ipsum? You got it with Cupcake Ipsum, the only text generator that includes marsh mallows, carrot cake, and perhaps e on top. Design sweet lorem ipsum? You got it with Cupcake Ipsum, the only text generator that includes marsh mallows, carrot cake.',
        boxClass: 'max-w-full xxl:max-w-[535px]',
        boxHeadClass: '!text-lg md:!text-xl lg:!text-[32px]'
      },
      {
        boxNumber: '02',
        boxHead: 'UX Design',
        boxInfo: 'Design sweet lorem ipsum? You got it with Cupcake Ipsum, the only text generator that includes marsh mallows, carrot cake, and perhaps e on top. Design sweet lorem ipsum? You got it with Cupcake Ipsum, the only text generator that includes marsh mallows, carrot cake.',
        boxClass: 'max-w-full xxl:max-w-[535px]',
        boxHeadClass: '!text-lg md:!text-xl lg:!text-[32px]'
      },
      {
        boxNumber: '03',
        boxHead: 'App Development',
        boxInfo: 'Design sweet lorem ipsum? You got it with Cupcake Ipsum, the only text generator that includes marsh mallows, carrot cake, and perhaps e on top. Design sweet lorem ipsum? You got it with Cupcake Ipsum, the only text generator that includes marsh mallows, carrot cake.',
        boxClass: 'max-w-full xxl:max-w-[535px]',
        boxHeadClass: '!text-lg md:!text-xl lg:!text-[32px]'
      },
      {
        boxNumber: '04',
        boxHead: 'IOS Development',
        boxInfo: 'Design sweet lorem ipsum? You got it with Cupcake Ipsum, the only text generator that includes marsh mallows, carrot cake, and perhaps e on top. Design sweet lorem ipsum? You got it with Cupcake Ipsum, the only text generator that includes marsh mallows, carrot cake.',
        boxClass: 'max-w-full xxl:max-w-[535px]',
        boxHeadClass: '!text-lg md:!text-xl lg:!text-[32px]'
      },
    ]
  ]

  return (
    <>
      {skill.map((skillData, skillIndex) => {
         return (
           <PNSkillValue
             mainClass='pb-[50px] md:pb-[75px] lg:pb-[100px] xl:pb-40'
             mainHead='Skills'
             mainHeadTxt='Skills・Certificate'
             key={skillIndex}
             singleBox={skillData}
             boxesWrapperClass='flex flex-wrap justify-between'
             variant="link"/>
         )
       })}
    </>
  )
}

export default Skills
