import React from 'react'

const PNButton = ({children, className, variant, ...props}) => {
  const getButtonStyle = () => {
    switch (variant) {
      case 'primary':
        return "border-[1px] border-secondary text-secondary z-10 py-3 px-6 rounded-none ";
      case 'secondary':
        return "max-w-[155px] text-white w-full min-h-[155px] rounded-full p-0 border-[1px] border-secondary text-secondary z-10";
      case 'link':
        return "after:hidden before:content-[''] before:absolute before:bottom-0 before:left-[-100%] before:hover:left-0 before:w-4/5 before:h-[1px] before:duration-500 before:bg-primary-50 text-white hover:text-primary-50 !uppercase";
      default:
        return 'color-black';
    }
  };
  return (
    <button className={`capitalize text-white relative text-[12px] md:text-[16px] overflow-hidden duration-500 after:w-[1px] after:h-[1px]  after:z-[-2] after:rounded-full after:duration-500 after:none:content-[''] after:absolute after:top-0 after:translate-x-[-50%] after:hover:w-[375px] after:hover:h-[375px] after:translate-y-[-50%] after:left-0 after:bg-secondary hover:text-black ${getButtonStyle()} ${className ? className : ''}`} {...props}>
        {children}
    </button>
  )
}

export default PNButton