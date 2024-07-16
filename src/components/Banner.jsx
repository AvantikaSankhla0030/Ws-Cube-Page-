import React from "react";
import  {ReactTyped, Typed}  from "react-typed";

export default function Banner() {
     return(
        <div className="bg-[#2699fb] w-full py-[100px]">
            <div className="max-w-[1240px] py-[100px] mx-auto text-center font-bold ">
                <div className=" text-xl md:text-5xl md:p-[24px]">
                    Learn With Us
                </div>
                <div className="text-white text-3xl md:text-[70px] md:p-[24px] ">
                    Grow With Us
                </div>
                <div className="text-[20px] md:text-[50px] md:p-[24px] text-white ">
                    Learn 
                    <ReactTyped
                      className="pl-4"
                      strings={['Web Development', 'Digital Marketing', 'Ethical Hacking']} 
                      typeSpeed={100}
                      backSpeed={50}
                      loop={true}
                      />
                </div>
                <button className="bg-black text-white p-3 rounded">Get Started</button>
            </div>


        </div>
     )
}