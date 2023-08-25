import React from "react";
import {HiArrowNarrowRight} from 'react-icons/hi'


const Home = () => {
    return ( 
        <div className="bg-slate-900 h-screen w-full flex justify-center">

            
            <div className=" px-8 flex flex-col justify-center h-full m-w-[1000px] mx-auto">
                <p className="text-emerald-800 font-serif font-semibold">My name is:</p>
                <h1 className="text-red-700 text-4xl sm:text-7xl font-bold text-slate-100"> Borokinni Burhan </h1>
                <h2 className="text-4xl sm:text-7xl text-slate-500 font-semibold"> I am a Frontend Developer.</h2>
                <p className="text-gray-400 font-sans max-w-2xl">
                     I am a Junior Frontend Developer seeking to solidify my skills and acquire experience
                     I am a Junior Frontend Developer seeking to solidify my skills and acquire experience
                </p>

                <div>
                <button className="text-white border-2 p-2 rounded-sm hover:p-[7px] hover:bg-emerald-800 hover:border-emerald-800 mt-4 flex items-center max-w-fit"> 
                View Work < HiArrowNarrowRight className="ml-1" /> </button>
                </div>
            </div>

        </div>
     );
}
 
export default Home;