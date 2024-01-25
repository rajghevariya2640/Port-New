// CursorFollower.js
import React, { useState, useEffect } from 'react';

const CursorFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showDot, setShowDot] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className='fixed h-10 w-10 border-2 border-light-secondary rounded-full pointer-events-none z-[9999] translate-x-[-50%] translate-y-[-50%] duration-[0.1s]' style={{ left: `${position.x}px`, top: `${position.y}px` }}>
        {showDot && <span className='fixed top-1/2 left-1/2 h-1 w-1 translate-x-[-50%] rounded-full translate-y-[-50%] bg-secondary'></span>}
      </div>
    </>
  );
};

export default CursorFollower;
