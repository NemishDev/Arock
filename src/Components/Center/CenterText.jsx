import React from "react"
import HeroText from "../Center/HeroText"
import SubHeading from "../Center/SubHeading"

const CenterText=() =>{
  return(
     <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]">

      <HeroText />
      <SubHeading />
     </div>
  )
}
export default CenterText;