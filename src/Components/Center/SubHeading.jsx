import React from "react"
import 'remixicon/fonts/remixicon.css'

const SubHeading=() =>{
  return(
     <div className="flex justify-between items-center ">
      <div className="flex  items-start gap-4">
        <i className="ri-play-mini-fill px-4 py-3 boreder-2 rounded-full"></i>
        <h3 className="uppercase">Play <br /> the film</h3>
      </div>
      <div className="flex gap-40   font-[a4]">
        <h3 className="uppercase">Creater <br /> curator</h3>
        <h3 className="uppercase">New York <br /> Los Angles</h3>
      </div>
     </div>
  )
}
export default SubHeading;