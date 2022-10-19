import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from "./NavbarElements";

import logo from "./T-Logo.png";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
        <NavMenu>
          <img src={logo} alt="Logo" width="24px" height="24px" />
          <NavLink to="/liveboard" activeStyle>
            Liveboard
          </NavLink>
          <NavLink to="/search" activeStyle>
            Search
          </NavLink>
        </NavMenu>

        <NavBtn>
          <NavBtnLink to="/freetrial">Free Trial</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
