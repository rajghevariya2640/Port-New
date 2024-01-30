import React from 'react'
import PNScrollTxt from '../../../components/PNScrollTxt'
import { ReactComponent as Shape } from "../../../assets/image/svg/txtScroll.svg";

const StrokeTxtScroll = () => {
  return (
    <div>
      <PNScrollTxt  strokeText={<>Connecting your brand to the digital world <Shape /> Elevating your online presence your brand</>} strokeClass="text-5xl sm:text-6xl md:text-8xl xl:text-[120px] flex" />
    </div>
  )
}

export default StrokeTxtScroll
