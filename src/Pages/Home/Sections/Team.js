import React from "react";
import PNContainer from "../../../components/PNContainer";
import PNHeading from "../../../components/PNHeading";
import PNNavigation from "../../../components/PNNavigation";
import PNSwiper from "../../../components/PNSwiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import Team1 from "../../../assets/image/Home/png/Member1.png";
import Team2 from "../../../assets/image/Home/png/Member2.png";
import Team3 from "../../../assets/image/Home/png/Member3.png";
import Team4 from "../../../assets/image/Home/png/Member4.png";
import PNh5 from "../../../components/PNh5";
import PNGreyTxt from "../../../components/PNGreyTxt";
import PNButton from "../../../components/PNButton";
import TeamCard from "../../../components/TeamCard";

const Team = () => {
  const team = [
    
      {
        img: Team1,
        hoverBtn: ["github", "dribbble", "behance"],
        teamData: [
          {
            name: "Albert Wick",
            job: "UI/UX Designer",
          }
        ],
      },
    
      {
        img: Team2,
        hoverBtn: ["github", "dribbble", "behance"],
        teamData: [
          {
            name: "Andrew Nikos",
            job: "IOS Developer",
          }
        ],
      },
    
    
      {
        img: Team3,
        hoverBtn: ["github", "dribbble", "behance"],
        teamData: [
          {
            name: "Kanta Kujenos",
            job: "Web Developer",
          }
        ],
      },
  
      {
        img: Team4,
        hoverBtn: ["github", "dribbble", "behance"],
        teamData: [
          {
            name: "Aya Nikola",
            job: "Digital marketer",
          }
        ],
        
      },
      {
        img: Team1,
        hoverBtn: ["github", "dribbble", "behance"],
        teamData: [
          {
            name: "Albert Wick",
            job: "UI/UX Designer",
          }
        ],
      },
    
  
      {
        img: Team2,
        hoverBtn: ["github", "dribbble", "behance"],
        teamData: [
          {
            name: "Andrew Nikos",
            job: "IOS Developer",
          }
        ],
      },
    
  
      {
        img: Team3,
        hoverBtn: ["github", "dribbble", "behance"],
        teamData: [
          {
            name: "Kanta Kujenos",
            job: "Web Developer",
          }
        ],
      },
    
  
      {
        img: Team4,
        hoverBtn: ["github", "dribbble", "behance"],
        teamData: [
          {
            name: "Aya Nikola",
            job: "Digital marketer",
          }
        ],
      },
    
  ];

  return (
    <div className="pb-[50px] md:pb-[75px] lg:pb-[100px] xl:pb-40">
      <PNContainer>
        <div className="flex items-center justify-between flex-wrap gap-y-5">
          <div className="w-full lg:w-6/12">
            <PNHeading
              subTitle="DEDICATED TEAM"
              title="Our Dedicated Team Members"
            />
          </div>
          <div className="w-full lg:w-2/12">
            <PNNavigation prevClass="teamPrev" nextClass="teamNext" />
          </div>
        </div>
        <PNSwiper
          navigation={{ nextEl: ".teamNext", prevEl: ".teamPrev" }}
          modules={[Navigation]}
          className="mt-8 xl:mt-20"
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 15 },
            450: { slidesPerView: 2, spaceBetween: 15 },
            991: { slidesPerView: 3, spaceBetween: 20 },
            1320: { slidesPerView: 4, spaceBetween: 25 },
          }}
        >
          {team?.map((team, teamIndex) => {
            return (
              <SwiperSlide key={teamIndex}>
                <TeamCard teamCard={team}>
                  <div className="absolute w-full bottom-5 left-1/2 translate-x-[-50%] text-center group-hover:opacity-0 duration-500">
                    {team?.teamData?.map((team) => {
                      return (
                        <>
                          <PNh5 className="text-cstmGrey-100">{team?.name}</PNh5>
                          <PNGreyTxt className="capitalize">
                            {team?.job}
                          </PNGreyTxt>
                        </>
                      );
                    })}
                  </div>{" "}
                </TeamCard>
              </SwiperSlide>
            );
          })}
        </PNSwiper>
      </PNContainer>
    </div>
  );
};

export default Team;
