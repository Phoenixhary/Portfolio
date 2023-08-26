import React from "react";

const Contact = () => {
    return ( 
        <div name="contact" className="text-gray-300 w-full h-full bg-slate-900 flex justify-center items-center p-4">
            <form action="https://getform.io/f/2a0c42f4-7d86-4862-b986-cf0a4b1de2cc" method="POST" className="flex flex-col w-full max-w-xl">
                <div className="pb-8 mt-24">
                   <p className="text-4xl font-bold border-b-2 border-emerald-800 inline">Contact</p>
                   <p className="py-4 font-serif text-lg">Submit Form or send me an Email to borokinniburhan@gmail.com</p>
                </div>
                <input className="rounded-sm text-black p-2" type="text" placeholder="Name" name="name" required/>
                <input className="py-2 my-4 rounded-sm p-2 text-black" type="email" placeholder="Email" name="Email" required/>
                <textarea className="p-2 text-black rounded-sm focus:border-white" name="message" rows="10" placeholder="Message" required></textarea>
                <button className="mx-auto my-7 rounded-lg hover:px-3 text-white border-2 hover:bg-emerald-800 font-mono px-4 py-2 flex items-center justify-center">
                    Submit</button>

            </form>

        </div>
     );
}
 
export default Contact;