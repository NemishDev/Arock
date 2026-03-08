import React from "react"
import Navbar from "./Components/Navbar/Navbar"
import CenterText from "../src/Components/Center/CenterText"

const App=() =>{
  return(
     <div className="h-screen w-full bg-cover bg-center bg-[url(https://images.prismic.io/arock-website-2023/d4147892-cb03-4582-af32-326bb109803f_AROCK-_1502.jpg?fm=webp&q=100&fit=crop)]">

      <Navbar />
      <CenterText />
     </div>
  )
}
export default App;
