import React from 'react'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Work from './Components/Work';
import Contact from './Components/Contact';
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return ( 
    <>    
    <Navbar />
    <div className='hidden md:block'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/skills' element={<Skills/>} />
        <Route path='/work' element={<Work/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      </div>
      <div className='md:hidden bg-gradient-to-r from-slate-200 to-sky-600'>
            <Home/>
            <About/>
            <Skills/>
            <Work/>
            <Contact/>
      </div>
    </>
   );
}
 
export default App;
