import { Button, CardHeader } from "@material-tailwind/react";
import React from "react";
import {GoMail} from 'react-icons/go'
import {GrInstagram} from 'react-icons/gr'
import {BsTwitter} from 'react-icons/bs'

const contact = () => {

    return (
        <>
            <div id="contact" className="h-screen overflow-hidden  flex items-center ">
                <div className="container   mx-auto  flex-cols w-full">
                    <span className="text-white flex justify-center ">Get In Touch </span>
                    <h1 className="text-white text-2xl  text-center">Contact Me</h1>

                    <div className="flex justify-evenly">
                        <div className="">

                            <div className="max-w-sm my-3 px-3 bg-indigo-500   rounded-3xl pt-0    shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <div className="p-5 text-white text-center">
                                   <GoMail className="text-white m-2 text-2xl text-center mx-auto"/>
                                   <h1 className="">Email</h1>
                                   <a className="">arun02580@gmail.com</a>
                                   <h1 className="mt-3 cursor-pointer">Send a massage</h1>
                                </div>
                            </div>

                            <div className="max-w-sm my-3 bg-indigo-500   rounded-3xl pt-0    shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <div className="p-5 text-white text-center">
                                   <GrInstagram className="text-white m-2 text-2xl text-center mx-auto"/>
                                   <h1 className="">Instagram</h1>
                                   <a className="">arun01_kumar</a>
                                   <h1 className="mt-3 cursor-pointer">Send a massage</h1>
                                </div>
                            </div>

                            <div className="max-w-sm my-3 bg-indigo-500   rounded-3xl pt-0    shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <div className="p-5 text-white text-center">
                                   <BsTwitter className="text-white m-2 text-2xl text-center mx-auto"/>
                                   <h1 className="">Twitter</h1>
                                   <a className="">@Arun_Eth</a>
                                   <h1 className="mt-3 cursor-pointer"><a href="https://twitter.com/Arun_eth" target="_blanck">Send a massage</a></h1>
                                </div>
                            </div>
                        </div>
                        <div className="w-[30vw]">
                            <div className="m-7 "><input className="shadow h-20 appearance-none border text-white border-deep-purple-50 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent" id="username" type="text" placeholder="Your Full Name" ></input></div>
                            <div className="m-7"><input className="shadow h-[3.3rem] text-white border-deep-purple-50 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-transparent" id="username" type="text" placeholder="Your Email" ></input></div>
                            <div className="m-7"><textarea id="message" rows="4" className="block p-2.5 w-full text-sm border-deep-purple-50 text-white text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-transparent" placeholder="Leave a comment..."></textarea></div>
                           
                            
                           <div className="m-7"><Button>Send Massage</Button></div> 
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default contact; 