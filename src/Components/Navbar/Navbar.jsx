import React from "react"
import Logo from "../Navbar/Logo"
import Menu from "../Navbar/Menu"

const Navbar=() =>{
  return(
     <div className="flex w-full items-start justify-between  px-7 py-7">
      <Logo />
      <Menu />
     </div>
  )
}
export default Navbar;