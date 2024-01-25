import React, { useEffect, useState } from "react";
import PNContainer from "./PNContainer";
import PNLink from "./PNLink";
import Logo from "../assets/image/png/Logo.png";

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

  const menu = [
    {
      name: "Home +",
      smList: ['CREATIVE AGENCY','PERSONAL PORTFOLIO','DIGITAL AGENCY'],
    },
    {
      name: "About",
    },
    {
      name: "services +",
      smList: ['SERVICES','SERVICE DETAILS'],
    },
    {
      name: "portfolio +",
      smList: ['PORTFOLIO','PORTFOLIO DETAILS'],
    },
    {
      name: "blog +",
      smList: ['Blog','Blog DETAILS'],
    },
    {
      name: "pages +",
      smList: ['Team','Team DETAILS', '404'],
    },
    {
      name: "contact us",
    },
  ];

  return (
    <header className="absolute top-0 left-0 w-full">
      <div className={`transition-transform duration-500  ${isSticky ? 'fixed top-0 bg-primary-100 z-50 w-full shadow-md animate-fadeDown' : ''}`}>
        <PNContainer>
          <div className="flex justify-between items-center">
            <div className="w-1/12">
              <img src={Logo} alt="Logo" />
              <PNLink></PNLink>
            </div>
            <div className="w-7/12">
              <ul className="flex justify-between">
                {menu.map((menu, menuIndex) => {
                  return (
                    <li
                      key={menuIndex}
                      className="relative group"
                    >
                      <PNLink className="uppercase py-7 text-white hover:text-primary-50 hover:cursor-pointer duration-500">
                        {menu.name}
                      </PNLink>
                        {menu.smList && (
                          <>
                            <ul className="opacity-0 invisible translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible absolute top-full left-0 bg-primary-100 py-2.5 rounded-b-lg w-[260px] border-t-2 border-secondary duration-500">
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
            </div>
          </div>
        </PNContainer>
      </div>
    </header>
  );
};

export default Header;
