import React, { useEffect, useRef, useState } from "react";
import PNContainer from "./PNContainer";
import PNLink from "./PNLink";
import Logo from "../assets/image/Home/png/Logo.png";
import { ReactComponent as Plus } from "../assets/image/Home/svg/plus.svg";
import { ReactComponent as Minus } from "../assets/image/Home/svg/minus.svg";
import Hamburger from "hamburger-react";
import PNNavLink from "./PNNavLink";

const Header = () => {
  // Sticky Header
  const [isSticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setSticky(offset > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle Menu
  const [navOpen, setNavOpen] = useState(false);
  const menuToggle = () => {
    setNavOpen(!navOpen);
  };

  // Toggle Sub Menu
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);
  const subMenuToggle = (name) => {
    if (isSubMenuOpen === name) {
      return setSubMenuOpen(false);
    }
    return setSubMenuOpen(name);
  };

  const menu = [
    {
      name: "home",
      label: "Home +",
      smList: ["CREATIVE AGENCY", "PERSONAL PORTFOLIO", "DIGITAL AGENCY"],
      icn: <Plus />,
      to: "/",
    },
    {
      label: "About",
      name: "about",
      to: "/about",
    },
    {
      label: "services +",
      name: "services",
      icn: <Plus />,
      smList: ["SERVICES", "SERVICE DETAILS"],
      to: "/",
    },
    {
      label: "portfolio +",
      name: "portfolio",
      smList: ["PORTFOLIO", "PORTFOLIO DETAILS"],
      icn: <Plus />,
      to: "/",
    },
    {
      label: "blog +",
      name: "blog",
      smList: ["Blog", "Blog DETAILS"],
      icn: <Plus />,
      to: "/",
    },
    {
      icn: <Plus />,
      label: "pages +",
      name: "pages",
      smList: ["Team", "Team DETAILS", "404"],
      to: "/",
    },
    {
      name: "contactUs",
      label: "contact us",
      to: "/",
    },
  ];

  return (
    <header className="absolute top-0 left-0 w-full">
      <div
        className={`transition-transform z-50 duration-500 py-5 lg:py-0  ${
          isSticky
            ? "fixed top-0 bg-primary-100 w-full shadow-md animate-fadeDown"
            : ""
        }`}
        // onClick={handleClickOutside}
      >
        <PNContainer>
          <div className="flex justify-between items-center">
            <div className="w-2/12">
              <PNLink>
                <div className="min-w-24 sm:max-w-32 lg:max-w-[150px]">
                  <img src={Logo} alt="Logo" />
                </div>
              </PNLink>
            </div>
            <div
              className="lg:w-9/12 xl:w-8/12 xxl:w-7/12"
              // ref={menuRef}
            >
              <ul
                className={`lg:justify-between lg:flex absolute top-full left-0 bg-primary-100 w-full origin-top lg:static lg:bg-transparent border-y-[1px] duration-500 lg:scale-y-100 z-50 border-y-primary-50 lg:border-0  ${
                  navOpen ? "scale-y-100" : "scale-y-0"
                }`}
              >
                {menu.map((menu, menuIndex) => {
                  return (
                    <>
                      <li
                        key={menuIndex}
                        className={`relative group py-2 lg:py-0 overflow-hidden  lg:overflow-visible h-[40px] lg:h-full transition-[h] duration-500 ${
                          isSubMenuOpen === menu.name ? "animate-slide duration-500" : ""
                        }`}
                      >
                        <PNNavLink to={menu.to}>
                          <PNLink
                            className="uppercase py-0 px-5 lg:py-7 lg:px-0 text-white hover:text-primary-50 hover:cursor-pointer duration-500 flex justify-between items-center"
                            onClick={() => subMenuToggle(menu.name)}
                          >
                            {menu.label}
                            <span className="block lg:hidden">
                              {menu.icn &&
                                (isSubMenuOpen === menu.name ? (
                                  <Minus />
                                ) : (
                                  <Plus />
                                ))}
                            </span>
                          </PNLink>
                        </PNNavLink>
                        {menu.smList && (
                          <>
                            <ul
                              className={`lg:opacity-0 lg:invisible  lg:translate-y-4 lg:group-hover:translate-y-0  lg:group-hover:opacity-100 lg:group-hover:visible lg:absolute top-full left-0 bg-primary-100 lg:py-2.5 rounded-b-lg lg:w-[260px] ps-5 lg:ps-0 lg:border-t-2  border-secondary duration-500`}
                            >
                              {menu.smList.map((smLink, smListIndex) => {
                                return (
                                  <li key={smListIndex}>
                                    <PNLink className="uppercase text-white hover:text-primary-50 hover:cursor-pointer duration-500 py-2.5 px-5">
                                      {smLink}
                                    </PNLink>
                                  </li>
                                );
                              })}
                            </ul>
                          </>
                        )}
                      </li>
                    </>
                  );
                })}
              </ul>
              <span className="block lg:hidden" onClick={menuToggle}>
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
