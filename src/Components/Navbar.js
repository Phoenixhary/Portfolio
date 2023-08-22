import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
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
        <div onclick={handleClick} className=' md:hidden z-10 cursor-pointer'>
            <FaBars />
        </div>

                          {/* Mobile Menu*/}
             <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 h-screen flex flex-col justify-center items-center bg-slate-900 w-full'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>

                          {/* Social Icons  */}
        <div className='hidden'>

        </div>


        
    </div>
  )
}

export default Navbar;