import React from 'react'
import Team1 from '../../../assets/image/Home/png/Member1.png'
import Team2 from '../../../assets/image/Home/png/Member2.png'
import Team3 from '../../../assets/image/Home/png/Member3.png'
import Team4 from '../../../assets/image/Home/png/Member4.png'
import PNButton from '../../../components/PNButton'
import PNContainer from '../../../components/PNContainer'
import PNGreyTxt from '../../../components/PNGreyTxt'
import PNHeading from '../../../components/PNHeading'
import TeamCard from '../../../components/TeamCard'

const AboutTeam = () => {

  const team = [
    {
      img: Team1,
      hoverBtn: ['github', 'dribbble', 'behance'],
      teamData: [
        {
          name: 'Albert Wick',
          job: 'UI/UX Designer'
        }
      ]
    },

    {
      img: Team2,
      hoverBtn: ['github', 'dribbble', 'behance'],
      teamData: [
        {
          name: 'Andrew Nikos',
          job: 'IOS Developer'
        }
      ]
    },

    {
      img: Team3,
      hoverBtn: ['github', 'dribbble', 'behance'],
      teamData: [
        {
          name: 'Kanta Kujenos',
          job: 'Web Developer'
        }
      ]
    },

    {
      img: Team4,
      hoverBtn: ['github', 'dribbble', 'behance'],
      teamData: [
        {
          name: 'Aya Nikola',
          job: 'Digital marketer'
        }
      ]

    }
  ]

  return (
    <div className='pb-[50px] md:pb-[75px] lg:pb-[100px] xl:pb-40'>
      <PNContainer>
        <PNHeading
          subTitle='Team'
          title='Our Professional Team'
          headWrapClass='text-center'
          bgClass='bg-subHead' />
        <div className='flex flex-wrap mt-8 xl:mt-20 gap-y-5 sm:gap-y-8 lg:gap-y-10'>
          {team.map((team, teamIndex) => {
             return (
               <div className='w-full sm:w-1/2 xl:w-3/12 px-3'>
                     <TeamCard teamCard={team} key={teamIndex} mainClass="pb-2.5" />
                        <div className="flex sm:block md:flex xl:block xxl:flex flex-wrap items-center justify-between pt-4 border-t-[1px] border-t-primary-100 group">
                    {team?.teamData?.map((team) => {
                        return (
                            <>
                          <PNButton variant="link" className="text-cstmGrey-100 font-syne font-semibold !text-lg !capitalize group-hover:text-secondary text-start">{team?.name}</PNButton>
                          <PNGreyTxt className="capitalize">
                            {team?.job}
                          </PNGreyTxt>
                        </>
                      );
                    })}
               </div>
                    </div>
             )
           })}
        </div>
      </PNContainer>
    </div>
  )
}

export default AboutTeam
