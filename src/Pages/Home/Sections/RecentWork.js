import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { SwiperSlide } from "swiper/react";
import Img1 from "../../../assets/image/png/RecentWork1.png";
import Img2 from "../../../assets/image/png/RecentWork2.png";
import Img3 from "../../../assets/image/png/RecentWork3.png";
import Img4 from "../../../assets/image/png/RecentWork4.png";
import Img5 from "../../../assets/image/png/RecentWork5.png";
import Img6 from "../../../assets/image/png/RecentWork6.png";
import { ReactComponent as Arrow } from "../../../assets/image/svg/workArr.svg";
import PNContainer from "../../../components/PNContainer";
import PNGreyTxt from "../../../components/PNGreyTxt";
import PNHeading from "../../../components/PNHeading";
import PNNavigation from "../../../components/PNNavigation";
import PNSwiper from "../../../components/PNSwiper";
import PNh5 from "../../../components/PNh5";
import PNLink from "../../../components/PNLink";

const RecentWork = () => {
  const work = [
    {
      img: Img1,
      head: "Crypto Exchange App",
      info: "Web3 Dev",
      hoverText: "Award Wining Project",
    },
    {
      img: Img2,
      head: "Redesign a Ride Sharing App",
      info: "Communication",
      hoverText: "Award Wining Project",
    },
    {
      img: Img3,
      head: "Payment Gateway App",
      info: "Development",
      hoverText: "Award Wining Project",
    },
    {
      img: Img4,
      head: "Crypto Exchange App",
      info: "Web3 Dev",
      hoverText: "Award Wining Project",
    },
    {
      img: Img5,
      head: "Redesign a Ride Sharing App",
      info: "Communication",
      hoverText: "Award Wining Project",
    },
    {
      img: Img6,
      head: "Payment Gateway App",
      info: "Development",
      hoverText: "Award Wining Project",
    },
  ];

  return (
    <div className="pt-[50px] md:pt-[75px] lg:pt-[100px] xl:pt-40">
      <PNContainer>
        <div className="flex justify-between items-center flex-wrap gap-y-4">
          <div className="w-full lg:w-6/12">
            <PNHeading
              subTitle="recent work"
              title="Expolore Our Recent Sucessfull Work"
            />
          </div>
          <div className="w-full lg:w-2/12">
            <PNNavigation prevClass="workPrev" nextClass="workNext" />
          </div>
        </div>
      </PNContainer>
      <PNSwiper
        navigation={{ nextEl: ".workNext", prevEl: ".workPrev" }}
        modules={[Navigation]}
        className="px-3 mt-8 xl:mt-20"
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 15 },
          475: { slidesPerView: 2, spaceBetween: 15 },
          991: { slidesPerView: 3, spaceBetween: 20 },
          1320: { slidesPerView: 4, spaceBetween: 25 },
        }}
      >
        {work.map((work, workIndex) => {
          return (
            <SwiperSlide key={workIndex}>
              <div className="group/card h-[300px] sm:h-[350px] xl:h-[490px] lg:mb-5 lg:hover:h-[370px] xl:hover:h-[510px] lg:hover:mb-0 overflow-hidden duration-500 relative after:content-[''] after:absolute after:translate-x-[-50%] after:translate-y-[-50%] after:top-1/2 after:left-1/2 after:h-[92%] after:opacity-0 after:w-11/12 after:bg-primary-100 after:duration-500 after:hover:opacity-50">
                <img
                  src={work.img}
                  className="group-hover/card:scale-[1.1] duration-500 h-full"
                  alt={`Work ${workIndex + 1}`}
                />
                <div className="flex absolute translate-x-[-50%] left-1/2 w-10/12 z-10 opacity-0 justify-center items-center gap-2.5 bottom-3 group-hover/card:bottom-14 group-hover/card:opacity-100 duration-500">
                  <PNh5 className="text-cstmGrey-100 text-[16px] sm:!text-lg">{work.hoverText}</PNh5>
                  <div className="h-[50px] max-w-[50px] w-full bg-primary-100 rounded-full flex items-center justify-center group/arrow">
                    <PNLink>
                      <Arrow className="group-hover/arrow:stroke-primary-50 duration-500" />
                    </PNLink>
                  </div>
                </div>
              </div>
              <PNh5 className="text-cstmGrey-100 mt-4 lg:mt-0">{work.head}</PNh5>
              <PNGreyTxt className="lg:mt-4">{work.info}</PNGreyTxt>
            </SwiperSlide>
          );
        })}
      </PNSwiper>
    </div>
  );
};

export default RecentWork;
