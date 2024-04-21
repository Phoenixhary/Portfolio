import React from "react";
import Example from "./Example";

const About = () => {
    return ( 
        <Example>
        <div name='about' className=" w-full h-screen text-gray-300 bg-gradient-to-r from-slate-200 to-sky-600">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-4xl w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-2 border-emerald-800 text-slate-100">About</p>
                    </div>
                    <div>

                    </div>
                </div>

                <div className=" max-w-5xl px-4 w-full sm:grid grid-cols-2 gap-8">
                    <div className="px-4 sm:text-right text-4xl text-slate-500 font-bold">
                        <p> I am Burhan, nice to meet you, Please take a look around</p>
                    </div>
                    <div className=" px-4 mt-4 text-slate-600 font-semibold text-sans">
                        <p>
                            Technologically savvy, goal oriented and ambitious graduate engineer seeking to advance my career in Software Engineering.
                             A eager and versatile learner also swiftly adopt to changes in learning environment, 
                             devotes time to learning and also possesses good problem solving skills.
                          </p>

                    </div>

                </div>

            </div>
        </div>
        </Example>
     );
}
 
export default About;