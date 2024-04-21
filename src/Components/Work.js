import React from "react";
import Workimg from '../assests/workimg.jpg'
import Crowdfund from '../assests/crowdfund.jpg'
import vacation from '../assests/Vacation.jpg'
import Social from '../assests/SocialApp.jpg'
import Cointracker from '../assests/Cointracker.jpg'
import Pad from '../assests/Connectpad.jpg'
import Example from "./Example";

const Work = () => {
    return ( 
        <Example>
    <div name='work' className="bg-gradient-to-r from-slate-200 to-sky-600 text-gray-300 w-full md:h-screen mt-[500px] md:mt-0">

         <div className="w-full h-screen flex flex-col justify-center mx-auto max-w-4xl p-4 pt-10">
            <div className="pb-2 mt-10">
                <p className="text-4xl font-bold border-b-2 inline border-emerald-900 text-slate-500">Work</p>
                <p className="text-slate-500 p-2"> Here are some of my work </p>
            </div>
                                        {/*Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 ">

                        {/* Card - Container */}  {/* Project -1 */}
            <div style={{backgroundImage:`url(${Workimg})` }} className="shadow-md shadow-slate-800 flex justify-center items-center group container  mx-auto rounded-xl content-div">

                                {/* Hover - Container */}
                <div className="opacity-0 group-hover:opacity-100">
                    <span className="text-2xl font-bold text-white tracking-wider">
                        React JS Application
                    </span>

                    <div className=" text-center pt-8">
                        <a href="https://phoenix-image-gallery.netlify.app" target="_blank">
                            <button className="bg-white font-bold text-lg rounded-lg text-center py-2 text-gray-700 px-3"> Demo </button>
                        </a>
                    
                        <a href="https://github.com/Phoenixhary/C-ImageGallery" target="_blank">
                            <button className="bg-white font-bold text-lg rounded-lg text-center py-2 text-gray-700 px-3 mx-2"> Code </button>
                        </a>
                    </div>

                </div>
            </div>
                                            {/* Project -2 */}
            <div style={{backgroundImage:`url(${Social})`, }} className=" shadow-lg shadow-slate-800 flex justify-center items-center group container  mx-auto rounded-xl content-div">

                                {/* Hover - Container */}
                <div className="opacity-0 group-hover:opacity-100">
                    <span className="text-2xl font-bold text-white tracking-wider">
                        React JS Application
                    </span>

                    <div className=" text-center pt-8">
                        <a href="https://web3social.netlify.app/" target="_blank">
                            <button className="bg-white font-bold text-lg rounded-lg text-center py-2 text-gray-700 px-3"> Demo </button>
                        </a>
                    
                        <a href="https://github.com/Phoenixhary/SocialApp" target="_blank">
                            <button className="bg-white font-bold text-lg rounded-lg text-center py-2 text-gray-700 px-3 mx-2"> Code </button>
                        </a>
                    </div>

                </div>
            </div>
                                            {/* Project -3 */}
            <div style={{backgroundImage:`url(${Cointracker})`, }} className=" shadow-lg shadow-slate-800 flex justify-center items-center group container  mx-auto rounded-xl content-div">

                                {/* Hover - Container */}
                <div className="opacity-0 group-hover:opacity-100">
                    <span className="text-2xl font-bold text-white tracking-wider">
                        React JS Application
                    </span>

                    <div className=" text-center pt-8">
                        <a href="https://cointrackker.netlify.app/" target="_blank">
                            <button className="bg-white font-bold text-lg rounded-lg text-center py-2 text-gray-700 px-3"> Demo </button>
                        </a>
                    
                        <a href="https://github.com/Phoenixhary/CoinTrack" target="_blank">
                            <button className="bg-white font-bold text-lg rounded-lg text-center py-2 text-gray-700 px-3 mx-2"> Code </button>
                        </a>
                    </div>

                </div>
            </div>
                                            {/* Project -4 */}
            <div style={{backgroundImage:`url(${Pad})`, }} className=" shadow-lg shadow-slate-800 flex justify-center items-center group container  mx-auto rounded-xl content-div">

                                {/* Hover - Container */}
                <div className="opacity-0 group-hover:opacity-100">
                    <span className="text-2xl font-bold text-white tracking-wider">
                        React JS Application
                    </span>

                    <div className=" text-center pt-8">
                        <a href="https://connectpadd.netlify.app/" target="_blank">
                            <button className="bg-white font-bold text-lg rounded-lg text-center py-2 text-gray-700 px-3"> Demo </button>
                        </a>
                    
                        <a href="https://github.com/Phoenixhary/Connectpad" target="_blank">
                            <button className="bg-white font-bold text-lg rounded-lg text-center py-2 text-gray-700 px-3 mx-2"> Code </button>
                        </a>
                    </div>

                </div>
            </div>
                                             {/* Project -5 */}
            <div style={{backgroundImage:`url(${vacation})` }} className=" shadow-md shadow-slate-800 flex justify-center items-center group container  mx-auto rounded-xl content-div">

                                {/* Hover - Container */}
                <div className="opacity-0 group-hover:opacity-100">
                    <span className="text-2xl font-bold text-white tracking-wider">
                        React JS Application
                    </span>

                    <div className=" text-center pt-8">
                        <a href="https://travel-vacation.netlify.app" target="_blank">
                            <button className="bg-white font-bold text-lg rounded-lg text-center py-2 text-gray-700 px-3"> Demo </button>
                        </a>
                    
                        <a href="https://github.com/Phoenixhary/Travel" target="_blank">
                            <button className="bg-white font-bold text-lg rounded-lg text-center py-2 text-gray-700 px-3 mx-2"> Code </button>
                        </a>
                    </div>

                </div>
            </div>
                                             {/* Project -6 */}
         {/*   <div style={{backgroundImage:`url(${vacation})` }} className=" shadow-md shadow-slate-800 flex justify-center items-center group container  mx-auto rounded-xl content-div">

                                {/* Hover - Container */}
             {/*    <div className="opacity-0 group-hover:opacity-100">
                    <span className="text-2xl font-bold text-white tracking-wider">
                        React JS Application
                    </span>

                    <div className=" text-center pt-8">
                        <a href="https://travel-vacation.netlify.app" target="_blank">
                            <button className="bg-white font-bold text-lg rounded-lg text-center py-2 text-gray-700 px-3"> Demo </button>
                        </a>
                    
                        <a href="https://github.com/Phoenixhary/Travel" target="_blank">
                            <button className="bg-white font-bold text-lg rounded-lg text-center py-2 text-gray-700 px-3 mx-2"> Code </button>
                        </a>
                    </div>

                </div>
            </div>
            */}

    </div>

     </div>

 </div>
 </Example>
     );
}
 
export default Work;