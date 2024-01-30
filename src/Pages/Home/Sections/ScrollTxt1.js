// import React from "react";
// // import { ReactComponent as Shape } from '../../../assets/image/svg/txtScroll.svg'
// import PrimaryStrokeTxt from "../../../components/PrimaryStrokeTxt";

// const ScrollTxt1 = () => {
  
  //   const renderTexts = () => {
    //     const texts = [];
    //     for (let i = 0; i < 50; i++) {
      //       texts.push(
        //         <>
        //         Connecting your brand to the digital world <Shape /> Elevating your
        //           online presence your brand
        //         </>
        //       );
        //     }
        //     return texts;
        //   };
        
        //   return (
          //     <>
          //       <div className="">
          //     <PrimaryStrokeTxt className="flex whitespace-nowrap animate-scrollTxt uppercase items-center gap-6 font-syne font-semibold leading-none text-5xl sm:text-6xl md:text-8xl xl:text-[120px]">
          //     {renderTexts()}
          //         </PrimaryStrokeTxt>
          //       </div>
          //     </>
          //   );
          // };
          
          // export default ScrollTxt1;
          
import React from 'react'
import PNScrollTxt from '../../../components/PNScrollTxt'
import { ReactComponent as Shape } from "../../../assets/image/svg/txtScroll.svg";

const ScrollTxt1 = () => {
  return (
    <div>
      <PNScrollTxt  strokeText={<>Connecting your brand to the digital world <Shape /> Elevating your online presence your brand</>} />
    </div>
  )
}

export default ScrollTxt1
