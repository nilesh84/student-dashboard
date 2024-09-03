import React from "react";
import Navigation from "./Navigation";
import SideMenu from "./SideMenu";
import SwitchTheme from "./SwitchTheme";
import { ReactComponent as BellIcon } from "../assets/bell.svg";
import { ReactComponent as DefaultUserIcon } from "../assets/default-user.svg";

const RightContainer = () => {
  return (
    <div className="flex">
      <span className="bell-button m-r-10">
        <DefaultUserIcon />
      </span>
      <span className="bell-button">
        <BellIcon />
      </span>
    </div>
  );
};

const Header = () => {
  return (
    <header className="header flex align-center justify-between">
      <SideMenu />
      <Navigation />
      <RightContainer />
      <SwitchTheme />
    </header>
  );
};

export default Header;
