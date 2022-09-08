import React from 'react';
import {Link} from 'react-scroll'
function  Navbar(){

    return (
        <nav className='bg-DarkBlur flex items-center justify-center overflow-hidden sticky top-0 transition-colors shadow-2xl'>

<Link  to="hero" smooth={true} offset={-70} duration={500} className='text-white  p-6 hover:bg-white hover:text-DarkBlur cursor-pointer text-xl  transition ease-out hover:ease-in font-sanf font-noraml '>
                <div spy={true} >Home</div>
                </Link>



                 <Link  to="skills" smooth={true} offset={-70} duration={500} className='text-white  p-6 hover:bg-white hover:text-DarkBlur cursor-pointer text-xl  transition ease-out hover:ease-in font-sanf font-noraml '>
                <div to="contact" spy={true} >Skills</div>
                </Link>


                 <Link  to="project" smooth={true} offset={-70} duration={500} className='text-white  p-6 hover:bg-white hover:text-DarkBlur cursor-pointer text-xl  transition ease-out hover:ease-in font-sanf font-noraml '>
                <div to="contact" spy={true} >Project</div>
                </Link>





                <Link  to="contact" smooth={true} offset={-70} duration={500} className='text-white  p-6 hover:bg-white hover:text-DarkBlur cursor-pointer text-xl  transition ease-out hover:ease-in font-sanf font-noraml '>
                <div to="contact" spy={true} >Contact</div>
                </Link>




        </nav>
    )
}

export default Navbar;