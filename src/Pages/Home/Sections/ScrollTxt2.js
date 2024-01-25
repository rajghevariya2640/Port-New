import React from 'react';
import PNPrimaryTxt from '../../../components/PNPrimaryTxt';

const ScrollTxt2 = () => {

  const renderTexts = () => {
    const texts = [];
    for (let i = 0; i < 50; i++) {
      texts.push(
        <PNPrimaryTxt key={i} className='text-6xl'>
          ✌️ LET’S WORK TOGETHER
        </PNPrimaryTxt>
      );
    }
    return texts;
  };

  return (
      <div className='space-x-5 flex whitespace-nowrap animate-scrollTxt'>{renderTexts()}</div>
  );
};

export default ScrollTxt2;
