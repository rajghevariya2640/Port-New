import React, { useEffect, useRef, useState } from "react";
import PNContainer from "./PNContainer";
import PNLink from "./PNLink";
import Logo from "../assets/image/png/Logo.png";
import { ReactComponent as MenuIcn } from "../assets/image/svg/menuIcn.svg";
import { ReactComponent as Plus } from "../assets/image/svg/plus.svg";
import { ReactComponent as Minus } from "../assets/image/svg/minus.svg";
import { ReactComponent as Close } from "../assets/image/svg/close.svg";
import Hamburger from 'hamburger-react';

const Header = () => {


  // Sticky Header
  const [isSticky, setSticky] = useState(false);
  useEffect(() => {
      const handleScroll = () => {
        const offset = window.scrollY;
        setSticky(offset > 200);
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
  }, []);
  
  // Toggle Menu
  const [isMenuToggle, setToggleMenu] = useState(false);

  const [navOpen, setNavOpen] = useState(false)
  const menuToggle = () => {
    setToggleMenu(!isMenuToggle);
  };
  const menuRef = useRef(null);
  const handleClickOutside = (e) => {
    if (menuRef.current) {
    console.log(e)
setNavOpen(false)
    }
  };
  // Toggle Sub Menu
  const [isSubMenuToggle, setToggleSubMenu] = useState(false);

  const subMenuToggle = (name) => {
    if (isSubMenuToggle === name) {
     return setToggleSubMenu(false)
    }
    return setToggleSubMenu(name);
  };

  const menu = [
    {
      name:'home',
      label: "Home +",
      smList: ['CREATIVE AGENCY', 'PERSONAL PORTFOLIO', 'DIGITAL AGENCY'],
      icn: <Plus />,
    },
    {
      label: "About",
      name:"about"
    },
    {
      label: "services +",
      name:"services",
      icn: <Plus />,
      smList: ['SERVICES','SERVICE DETAILS'],
    },
    {
      label: "portfolio +",
      name: "portfolio",
      smList: ['PORTFOLIO','PORTFOLIO DETAILS'],
      icn: <Plus />,
    },
    {
      label: "blog +",
      name: "blog",
      smList: ['Blog','Blog DETAILS'],
      icn: <Plus />,
    },
    {
      icn: <Plus />,
      label: "pages +",
      name: "pages",
      smList: ['Team','Team DETAILS', '404'],
    },
    {
      name: "contactUs",
      label: "contact us",
    },
  ];

  return (
    <header className="absolute top-0 left-0 w-full" onClick={handleClickOutside}>
      <div className={`transition-transform duration-500 py-5 lg:py-0  ${isSticky ? 'fixed top-0 bg-primary-100 z-50 w-full shadow-md animate-fadeDown' : ''}`}>
        <PNContainer>
          <div className="flex justify-between items-center">
            <div className="w-2/12">
              <PNLink>
                <div className="min-w-24 sm:max-w-32 lg:max-w-[150px]">
                  <img src={Logo} alt="Logo" />
                </div>
              </PNLink>
            </div>
            <div className="lg:w-9/12 xl:w-8/12 xxl:w-7/12" ref={menuRef}>
              <ul className={`lg:justify-between lg:flex absolute top-full left-0 bg-primary-100 w-full origin-top lg:static lg:bg-transparent border-y-[1px] duration-500 lg:scale-y-100 z-10 border-y-primary-50 lg:border-0  ${navOpen ? "scale-y-100" : "scale-y-0"}`}>
                {menu.map((menu, menuIndex) => {
                  return (
                    <li
                      key={menuIndex}
                      className="relative group h-max"
                    >
                      <PNLink className="uppercase py-2 px-5 lg:py-7 lg:px-0 text-white hover:text-primary-50 hover:cursor-pointer duration-500 flex justify-between items-center" onClick={() => subMenuToggle(menu.name)}>
                        {menu.label}
                        <span className="block lg:hidden">
                          {menu.icn && (
                            isSubMenuToggle === menu.name ? (<Minus/>):(<Plus/>)
                          )}
                        </span>
                      </PNLink>
                        {menu.smList &&(
                          <>
                            <ul className={`opacity-0 invisible translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible lg:absolute origin-top top-full left-0 bg-primary-100 py-2.5 rounded-b-lg w-[260px] ps-5 lg:ps-0 lg:border-t-2 border-secondary duration-500 ${isSubMenuToggle === menu.name ? "block w-full" : "hidden"}`}>
                              {menu.smList.map((smLink, smListIndex) => {
                                return (
                                  <li key={smListIndex}>
                                    <PNLink className="uppercase text-white hover:text-primary-50 hover:cursor-pointer duration-500 py-2.5 px-5">{smLink}</PNLink>
                                  </li>
                                );
                              })}
                            </ul>
                          </>
                        )}
                    </li>
                  );
                })}
              </ul>
              <span className="block lg:hidden" onClick={()=>setNavOpen(true)}>
             <Hamburger color="white" />
              </span>
            </div>
          </div>
        </PNContainer>
      </div>
    </header>
  );
};

export default Header;
