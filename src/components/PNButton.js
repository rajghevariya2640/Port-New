import React from 'react'

const PNButton = ({children, className, variant, ...props}) => {
  const getButtonStyle = () => {
    switch (variant) {
      case 'primary':
        return "border-[1px] border-secondary text-secondary z-10 py-3 px-6 rounded-none !uppercase";
      case 'secondary':
        return "max-w-[100px] sm:max-w-[125px] lg:max-w-[155px] text-white w-full min-h-[100px] sm:min-h-[125px] lg:min-h-[155px] rounded-full p-0 border-[1px] border-secondary text-secondary z-10";
      case 'link':
        return "after:hidden before:content-[''] before:absolute before:bottom-0 before:left-[-100%] before:hover:left-0 before:w-4/5 before:h-[1px] before:duration-500 before:bg-primary-50 text-white hover:text-primary-50 !uppercase";
      case 'outlined':
        return "py-4 px-6 rounded-full border-[1px] border-primary-50 !text-primary-50 hover:bg-primary-50 hover:!text-cstm-blue-50 hover:shadow-footerBtnShadow";
      case 'none':
        return "after:!hidden hover:text-white pointer-events-none";
      default:
        return '';
    }
  };
  return (
    <button className={`capitalize text-white relative text-[12px] md:text-[16px] overflow-hidden duration-500 after:w-[1px] after:h-[1px]  after:z-[-2] after:rounded-full after:duration-500 after:none:content-[''] after:absolute after:top-0 after:translate-x-[-50%] after:hover:w-[375px] after:hover:h-[375px] after:translate-y-[-50%] after:left-0 after:bg-secondary hover:text-black ${getButtonStyle()} ${className ? className : ''}`} {...props}>
        {children}
    </button>
  )
}

export default PNButton