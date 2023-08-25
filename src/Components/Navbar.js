import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter, FaTwitterSquare} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assests/logo.png'
const Navbar = () => {
  const [nav, setNav] = useState(false)
 const handleClick = () => setNav(!nav)

  return (
    <div className='flex justify-between items-center bg-slate-900 fixed w-full h-20 text-gray-300 '>
        <div>
            <img className='w-20' src={Logo} alt='Logo Image' />
        </div>

                         {/* Menu*/}
        
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Contact</li>
            </ul>
      
                        {/* Hamburger menu*/}
        <div onClick={handleClick} className=' md:hidden z-10 mr-2 cursor-pointer'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

                          {/* Mobile Menu*/}
             <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 h-screen flex flex-col justify-center items-center bg-slate-900 w-full'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>

                          {/* Social Icons  */}
        <div  className='hidden fixed lg:flex flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] -ml-28 hover:-ml-1 duration-500 bg-blue-700 p-1 shadow-md rounded-md font-serif'>
                   <a className='flex justify-between items-center w-full text-gray-300' href='/'>
                     Linkedin <FaLinkedin size={30} /> 
                  </a>
                </li>
                
                <li className='w-[160px] -ml-28 hover:-ml-1 duration-500 rounded-md bg-sky-700 p-1 shadow-md font-serif'>
                   <a className='flex justify-between items-center w-full text-gray-300' href='https://twitter.com/Phoenixhary' target='_blank'>
                     Twitter <FaTwitter size={30} /> 
                  </a>
                </li>

                <li className='w-[160px] -ml-28 hover:-ml-0 duration-500 bg-gray-800 p-1 rounded-md shadow-md font-serif'>
                   <a className='flex justify-between items-center w-full text-gray-300' href='https://github.com/Phoenixhary' target='_blank'>
                     Github <FaGithub size={30} /> 
                  </a>
                </li>
                
                <li className='w-[160px] -ml-28 hover:-ml-1 duration-500 bg-red-800 p-1 rounded-md shadow-md font-serif'>
                   <a className='flex justify-between items-center w-full text-gray-300' href='mailto: borokinniburhan@gmail.com' target='_blank'>
                     Email <HiOutlineMail size={30} /> 
                  </a>
                </li>
                
                <li className='w-[160px] -ml-28 hover:-ml-1 duration-500 rounded-md bg-green-700 p-1 shadow-md font-serif'>
                   <a className='flex justify-between items-center w-full text-gray-300' href='/'>
                     Resume <BsFillPersonLinesFill size={30} /> 
                  </a>
                </li>
                
                
                
            </ul>

        </div>


        
    </div>
  )
}

export default Navbar;