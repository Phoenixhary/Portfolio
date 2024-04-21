import React from "react";
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from "react-router-dom";
import Example from "./Example";


const Home = () => {
    return ( 
        <Example>
        <div name="home" className="bg-gradient-to-r from-slate-200 to-sky-600 h-screen w-full flex justify-center">
        
            
            <div className=" px-8 flex flex-col justify-center h-full m-w-[1000px] mx-auto">
                <p className="text-emerald-900 font-serif font-semibold">My name is:</p>
                <h1 className=" text-4xl sm:text-7xl font-bold text-slate-100"> Borokinni Burhan </h1>
                <h2 className="text-4xl sm:text-7xl text-slate-500 font-semibold"> I am a Frontend Developer.</h2>
                <p className="text-slate-500 font-mono max-w-2xl">
                     I am a Junior Frontend Developer seeking to solidify my skills and acquire experience,
                     I specialize in bulding fully responsive React Application for wide range of usage.
                </p>

                <div>
      <button className="text-white font-semibold font-sans border-emerald-700 border-[1px] p-2 rounded-md hover:p-[7px] hover:bg-emerald-800 hover:border-emerald-800 mt-4 flex items-center max-w-fit">     
                <Link to="/work" className="flex items-center"  >
                View Work < HiArrowNarrowRight className="ml-1" />
              </Link>

                 </button>
                </div>
            </div>

        </div>

        </Example>
     );
}
 
export default Home;