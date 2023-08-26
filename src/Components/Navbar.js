import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter, FaTwitterSquare} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assests/logo.png'
import {Link} from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false)
 const handleClick = () => setNav(!nav)

  return (
    <div className='flex justify-between items-center bg-slate-900 fixed w-full h-20 text-gray-300 '>
        <div>
            <img className='w-20' src={Logo} alt='Logo Image' />
        </div>

                         {/* Menu*/}
        
            <ul className='hidden md:flex font-serif text-lg'>
                <li>
                <Link to="home" smooth={true} duration={500}>
                 Home
              </Link>
                </li>
                <li>
                <Link to="about" smooth={true} duration={500}>
                 About
              </Link>
                </li>
                <li>
                <Link to="skills" smooth={true} duration={500}>
                 Skills
              </Link>
                </li>
                <li>
                <Link to="work" smooth={true} duration={500}>
                 Work
              </Link>
                </li>
                <li>
                <Link to="contact" smooth={true} duration={500}>
                 Contact
              </Link>
                </li>
            </ul>
      
                        {/* Hamburger menu*/}
        <div onClick={handleClick} className=' md:hidden z-10 mr-2 cursor-pointer'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

                          {/* Mobile Menu*/}
             <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 h-screen flex flex-col justify-center items-center bg-slate-900 w-full'}>
                <li className='py-6 text-4xl'>
                  <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                 Home
              </Link>
              </li>
                <li className='py-6 text-4xl'>
                  <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                 About
              </Link>
                </li>
                <li className='py-6 text-4xl'>
                   <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                 Skills
              </Link>
                
                </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="work" smooth={true} duration={500}>
                 Work
              </Link>
                </li>
                <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                 Contact
              </Link>
                </li>
            </ul>

                          {/* Social Icons  */}
        <div  className=' fixed  lg:flex lg:flex-col lg:top-[35%] lg:left-0 top-16 right-6'>
            <ul className='flex lg:block'>
                <li className='lg:w-[160px] w-18 lg:-ml-28 hover:scale-95 lg:hover:scale-100 lg:hover:-ml-1 duration-500 bg-blue-700 p-1 shadow-md rounded-md font-serif'>
                   <a className=' lg:flex justify-between items-center w-full text-gray-300' href='https://www.linkedin.com/in/burhan-borokinni-559a64221/' target='_blank'>
                     Linkedin <FaLinkedin size={30} className='mx-auto lg:m-0' /> 
                  </a>
                </li>
                
                <li className='lg:w-[160px] w-19 lg:-ml-28 hover:scale-95 lg:hover:scale-100 lg:hover:-ml-1 duration-500 rounded-md bg-sky-700 p-1 shadow-md font-serif'>
                   <a className='lg:flex justify-between items-center w-full text-gray-300' href='https://twitter.com/Phoenixhary' target='_blank'>
                     Twitter <FaTwitter size={30} className='mx-auto lg:m-0' /> 
                  </a>
                </li>

                <li className='lg:w-[160px] w-20 lg:-ml-28 hover:scale-95 lg:hover:scale-100 hover:-ml-0 duration-500 bg-gray-800 p-1 rounded-md shadow-md font-serif'>
                   <a className='lg:flex justify-between items-center w-full text-gray-300' href='https://github.com/Phoenixhary' target='_blank'>
                     Github <FaGithub size={30} className='mx-auto lg:m-0' /> 
                  </a>
                </li>
                
                <li className='lg:w-[160px] w-20 lg:-ml-28 hover:scale-95 lg:hover:scale-100 hover:-ml-1 duration-500 bg-red-800 p-1 rounded-md shadow-md font-serif'>
                   <a className='lg:flex justify-between items-center w-full text-gray-300' href='mailto: borokinniburhan@gmail.com' target='_blank'>
                     Email <HiOutlineMail size={30} className='mx-auto lg:m-0' /> 
                  </a>
                </li>
                
                <li className='lg:w-[160px] w-18 lg:-ml-28 hover:scale-95 lg:hover:scale-100 hover:-ml-1 duration-500 rounded-md bg-green-700 p-1 shadow-md font-serif'>
                   <a className='lg:flex justify-between items-center w-full text-gray-300' href='https://docs.google.com/file/d/12E5jDp-yZs8uPX2pKkX1LZruBVD6_VIS/edit?filetype=msword&pli=1' target='_blank'>
                     Resume <BsFillPersonLinesFill size={30} className='mx-auto lg:m-0' /> 
                  </a>
                </li>
                
                
                
            </ul>

        </div>


        
    </div>
  )
}

export default Navbar;