import React from "react";
import PNButton from "./PNButton";

const TeamCard = ({ teamCard, children, mainClass }) => {
  console.log(teamCard)
  return (
    <>
          <div className={`relative group ${mainClass ? mainClass : ''}`}>
            <div className="h-[325px] sm:h-[350px] w-full overflow-hidden mb-2.5 sm:group-hover:h-[360px] sm:group-hover:mb-0 duration-500">
              <img
                src={teamCard.img}
                alt={` Team member`}
                className="group-hover:scale-[1.05] duration-500 group-hover:opacity-75 h-full"
              />
            </div>
            {children}
            <div className="absolute opacity-0 w-10/12 bottom-10 sm:bottom-6 left-1/2 translate-x-[-50%] translate-y-[-30px] text-center group-hover:opacity-100 group-hover:translate-y-[0px] duration-500 bg-primary-100 flex items-center justify-between">
              {teamCard.hoverBtn?.map((hBtn, hBtnIndex) => {
                return (
                  <PNButton
                    variant="link"
                    key={hBtnIndex}
                    className="px-0 py-4 sm:p-4 xl:px-0 xl:text-sm xxl:text-base w-full !capitalize"
                  >
                    {hBtn}
                  </PNButton>
                );
              })}
            </div>
          </div>
        
    
    </>
  );
};

export default TeamCard;
