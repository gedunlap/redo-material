import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnA } from './NavbarElements'

const Navbar = ({toggle}) => {
  return (
    <>
        <Nav>
          <NavLink to="/">
            <img className='logo' src="https://i.imgur.com/hKIE2K1.jpg" alt="logo" />
          </NavLink>
          <Bars onClick={toggle} />
          <NavMenu>
            <NavLink to="/about">
              About
            </NavLink>
            <NavLink to="/gallery">
              Gallery
            </NavLink>
            <NavLink to="/contact">
              Contact
            </NavLink>
          </NavMenu>
          <NavBtn>
            <NavBtnA>
              <a href="https://www.fresha.com/a/material-tampa-2502-north-howard-avenue-tjr5uxjo/booking?menu=true" target="_blank" style={{textDecoration:"none", color:"black"}}>APPOINTMENTS</a>
            </NavBtnA>
          </NavBtn>
        </Nav>
    </>
  )
}

export default Navbar