import React from "react";
// import { ReactComponent as Shape } from '../../../assets/image/svg/txtScroll.svg'
import { ReactComponent as Shape } from "../../../assets/image/svg/txtScroll.svg";
import PrimaryStrokeTxt from "../../../components/PrimaryStrokeTxt";

const ScrollTxt1 = () => {

  const renderTexts = () => {
    const texts = [];
    for (let i = 0; i < 50; i++) {
      texts.push(
        <>
        Connecting your brand to the digital world <Shape /> Elevating your
          online presence your brand
        </>
      );
    }
    return texts;
  };

  return (
    <>
      <div className="">
    <PrimaryStrokeTxt className="flex whitespace-nowrap animate-scrollTxt uppercase items-center gap-6 font-syne font-semibold">
    {renderTexts()}
        </PrimaryStrokeTxt>
      </div>
    </>
  );
};

export default ScrollTxt1;
