import React, { useState } from "react";
import { ReactComponent as HomeIcon } from "../assets/home.svg";
import { ReactComponent as AboutIcon } from "../assets/about.svg";
import { ReactComponent as ContactIcon } from "../assets/contact.svg";
import { ReactComponent as ServiceIcon } from "../assets/service.svg";
import { ReactComponent as ArrowIcon } from "../assets/arrow.svg";
import { ReactComponent as BellIcon } from "../assets/bell.svg";

const Navigation = () => {
  return (
    <nav className="nav-menu flex">
      <a href="#" className="font-14 active">
        Home
      </a>
      <a href="#" className="font-14">
        About
      </a>
      <a href="#" className="font-14">
        Services
      </a>
      <a href="#" className="font-14">
        Contact
      </a>
    </nav>
  );
};

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const subMenu = (menuId) => {
    setOpenMenu(openMenu === menuId ? null : menuId);
  };

  return (
    <div className="hamburger-menu">
      <button className="hamburger-button" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <nav className={`nav-links ${isOpen ? "open" : ""}`}>
        <ul className="flex flex-column">
          <li>
            <a className="flex align-center font-14" href="#home">
              <HomeIcon className="icon" />
              Home
            </a>
          </li>
          <li>
            <a
              className="flex align-center font-14"
              onClick={() => subMenu("menu1")}
            >
              <AboutIcon className="icon" />
              About
              <ArrowIcon className="arrow-icon" />
            </a>
            <ul className={`sub-menu ${openMenu === "menu1" ? "open" : ""}`}>
              <li className="sub-menu-item">Team</li>
              <li className="sub-menu-item">Managing Team</li>
              <li className="sub-menu-item">Head Office Branch</li>
            </ul>
          </li>
          <li>
            <a className="flex align-center font-14" href="#services">
              <ServiceIcon className="icon" />
              Services
            </a>
          </li>
          <li>
            <a className="flex align-center font-14" href="#contact">
              <ContactIcon className="icon" />
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const Header = () => {
  return (
    <header className="header flex align-center justify-between">
      <SideMenu />
      <Navigation />
      <span className="bell-button">
        <BellIcon />
      </span>
    </header>
  );
};

export default Header;
