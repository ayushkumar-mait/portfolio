import { Tooltip } from "@material-tailwind/react";
import React from "react";



const List = ({icons}) =>{
    return (
    <>
    {icons.map((icon) => {
        return (
            <article key={icon.id}  className="mx-4 overflow-hidden  my-4 w-[100px] h-[100px] xl:w-[150px] xl:h-[150px]  sm:my-2">
            <div className=" ">
            
            <a href={icon.link}  target="_blank">
            <Tooltip content={icon.name}> 
             <img src={icon.image} alt={icon.name} className="cursor-pointer" />
            
            </Tooltip> 
            </a>
            </div>
          </article>
        )
    })}
    </>
    )
}

export default List;