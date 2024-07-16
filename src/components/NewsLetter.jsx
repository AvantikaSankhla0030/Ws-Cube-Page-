import React from "react";

export default function NewsLetter(){
     return(
        <div className="bg-[#2699fb] p-4">
             <div className="max-w-[1100px] mx-auto md:flex justify-between py-[50px]">
               <div className="m-2">
                <h1 className="text-[20px] md:text-[35px] font-bold text-white">Want To Learn Latest I.T Skills ?</h1>
                <span className="text-white">
                    Sign up to our newsletter and stay up to date.
                </span>
               </div>
               <div className="m-2">
                <input type="text" className=" p-3 mb-2 text-slate-300 focus:outline-none" placeholder="Enter Email"/>
                <button className="bg-black text-white p-3 rounded">Get Started</button>
                <br/>
                <p className="text-white">
                    we care bout the protection of your data . Read our <br/> <a href="" className="text-black"> 
                        Privacy Policy.</a>
                    
                </p>
               </div>
             </div>
        </div>
     )
}