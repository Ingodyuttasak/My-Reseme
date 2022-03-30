import React from "react";
import {FaBars} from 'react-icons/fa'
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLink,
  NavBtn,
  NavBtnLink
} from "./NavbarElement";

const Navbar = ({toggle}) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">Yuttasak</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLink to='about'>About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='resume'>Resume</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='skills'>Skills</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='project'>My Project</NavLink>
            </NavItem>
          </NavMenu>
          <NavBtn>
          <NavBtnLink to ='downloadcv'>Donwload Cv</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
