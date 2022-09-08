import React from "react";
import photo from '../img/arun.jpg'
const hero  =  ( ) => {

    return (
           
           
           <div id="hero" className="container mx-auto text-white   md:max-h-[80vh] overflow-hidden xl:text-2xl text-sm text-DarkBlue   flex flex-wrap  items-center md:w-screen h-[50vh] lg:h-screen  ">
              
                <div className="flex w-full overflow-hidden md:w-1/2     justify-center">
                    <div className="sm:ml-12"> 
                        <h1 className=" underline  text-2xl xl:text-4xl underline-offset-8 decoration-2">
                            Hi 👋 My name is Arun Kumar
                        </h1>
                            <h2 className=" text-xl flex m-3 xl:text-3xl justify-start">blockchain Devloper</h2>
                            <h2 className=" font-bold m-3  ">I am a blockchain developer looking for  awesome projects to contribute <br/> and have fun.😊😊</h2>
                                <ul className="list-disc">
                                    <li className=" ml-12">🌍 I'm based in India</li>
                                    <li className=" ml-12">✉️ You can contact me at arun02580@gmail.com</li>
                                    <li className=" ml-12">🤝 I'm open to collaborating on web3</li>
                                    <li className=" ml-12">⚡ I'm secretly Spiderman..... but don't tell anyone</li>
                                </ul>
                    </div>
                </div>
                <div className="flex w-full overflow-hidden md:w-1/2 justify-center  items-center  ">
                        <div className="flex rounded-full shadow-sm justify-center  items-center w-96 h-96   overflow-hidden  ">
                            <img className="bg-center  " src={photo} alt={photo}/>
                        </div>
                </div>
               
           </div>
           
    )

    
}

export default hero;