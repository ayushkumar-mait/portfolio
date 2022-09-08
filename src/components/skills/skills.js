import React, { useState } from "react";
import data from "./data";
import List from './icons'
const Skills = () => {


    const [icons, setIcons] = useState(data)
    return (

        <div id="skills" className="   flex-col mb-12 z-10  slide-top overflow-hidden flex-wrap  md:min-h-[80vh]  min-h-screen mx-auto justify-center ">
            <div className="my-12">
                <h1 className="py-12 underline-offset-8 underline ml-12  text-white text-4xl">Skills</h1>
            </div>
          <div className="flex md:items-center justify-center  ">  
            <div className="flex sm:items-center items-center justify-center     lg:text-3xl  flex-wrap w-[80vw]">
                <List icons={icons}/>
            </div>
          </div>
        </div>
        
    )
}
export default Skills