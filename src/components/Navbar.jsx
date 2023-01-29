import React from 'react'
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
       <nav>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link-active" : "link")}
      >
        Home 
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "link-active" : "link")}
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "link-active" : "link")}
      >
        Contact
      </NavLink>
    </nav>
    </div>
  )
}
