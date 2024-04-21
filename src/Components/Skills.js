import React from "react";
import HTML from '../assests/html.png'
import CSS from '../assests/css.png'
import Javascript from '../assests/javascript.png'
import Tailwind from '../assests/tailwind.png'
import Github from '../assests/github.png'
import Reaxt from '../assests/react.png'
import Mui from '../assests/Mui.png'
import Example from "./Example";

const Skills = () => {
    return ( 
                <Example>
                <div name='skills' className="bg-gradient-to-r from-slate-200 to-sky-600 text-gray-300 w-full h-screen pl-4">
                    <div className="flex flex-col justify-center w-full h-full max-w-4xl mx-auto">
                        <div>
                        <p className="text-4xl font-bold border-b-2 border-emerald-900 inline text-slate-500">Skills</p>
                        <p className="py-4 text-slate-500 font-semibold"> Here are the technical skills i can work with</p>
                        </div>

                  <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-5 py-8 text-center font-serif">

                                             {/* Grid skills - Container */}
                                             
                            <div className="shadow-sm shadow-slate-700 duration-700 pt-2 bg-slate-800 hover:bg-slate-800 hover:scale-90">
                                <img className="w-20 mx-auto " src={Mui} alt="MUI" />
                                <p className="my-3">Material UI</p>
                            </div>
                            
                            <div className="shadow-sm shadow-slate-700 bg-slate-800 duration-700 pt-2 hover:bg-slate-800 hover:scale-90">
                                <img className="w-20 mx-auto " src={CSS} alt="CSS" />
                                <p className="my-3"> CSS</p>
                            </div>
        
                            <div className="shadow-sm shadow-slate-700 duration-700 pt-2 bg-slate-800 hover:bg-slate-800 hover:scale-90">
                                <img className="w-20 mx-auto " src={Github} alt="Github" />
                                <p className="my-3"> Github </p>
                            </div>
        
                            <div className="shadow-sm shadow-slate-700 duration-700 pt-2 bg-slate-800 hover:bg-slate-800 hover:scale-90">
                                <img className="w-20 mx-auto " src={Tailwind} alt="Html" />
                                <p className="my-3"> Tailwind</p>
                            </div>
        
                            <div className="shadow-sm shadow-slate-700 bg-slate-800 duration-700 pt-2 hover:bg-slate-800 hover:scale-90">
                                <img className="w-20 mx-auto " src={Javascript} alt="Html" />
                                <p className="my-3">Javascript</p>
                            </div>
        
                            <div className="shadow-sm shadow-slate-700 duration-700 pt-2 bg-slate-800 hover:bg-slate-800 hover:scale-90">
                                <img className="w-20 mx-auto " src={Reaxt} alt="React" />
                                <p className="my-3"> React</p>
                            </div>
        
                    </div>

                    </div>

                </div>
            </Example>
    );                 
 }

export default Skills;


