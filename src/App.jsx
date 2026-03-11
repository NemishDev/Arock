import React from "react"

import LoadParent from "./Components/Loading/LoadParent"
import Home from "./Components/LandindPage/Home";
import MenuPage from "./Menu/MenuPage";

const App=() =>{
  return(
    <div className="h-screen bg-[#111] overflow-hidden ">
     {/* <MenuPage />  */}
    <LoadParent />
     <Home />
    </div>
  )
}
export default App;
