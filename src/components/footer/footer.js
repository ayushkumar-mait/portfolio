import React from "react";
import {FaTwitterSquare, FaInstagramSquare, FaGithubSquare } from 'react-icons/fa'

const Footer = () =>{

    return (
        
        <div className="p-12 bg-arun overflow-hidden  flex-col justify-center  ">
            <h1 className="text-4xl text-center  p-2 bg-transparent">Arun Kumar </h1>
           <div className="flex justify-center"> 
           <FaTwitterSquare className="text-4xl cursor-pointer  "/>
            <FaInstagramSquare  className="text-4xl cursor-pointer "/>
            <FaGithubSquare  className="text-4xl cursor-pointer "/>
            </div>
        </div>
      
    )
}

export default Footer;