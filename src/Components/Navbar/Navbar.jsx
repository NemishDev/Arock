import React from "react"
import Logo from "../Navbar/Logo"
import Menu from "../Navbar/Menu"

const Navbar=() =>{
  return(
     <div className="flex w-full items-center justify-between  px-6 py-6">
      <Logo />
      <Menu />
     </div>
  )
}
export default Navbar;