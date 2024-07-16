import React from "react";
import laptop from "../assets/Image/laptop.jpg";
export default function Experts() {
     return(
         <div className="max-w-[1240px] p-2 mx-auto my-10  md:grid grid-cols-2">
            <div className="col-span-1 md:w-[70%]">
                <img src={laptop} alt="" />
            </div>
            <div className="col-span-1 flex flex-col justify-center">
                <h1 className="text-[#00df9a] font-bold my-3">LEARN FROM EXPERTS</h1>
                <p className="my-3 text-justify">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat fuga, labore laudantium 
                    officiis officia molestias, blanditiis magni nam iure accusantium, libero rem itaque 
                    maxime quos rerum sint voluptatum corporis omnis.
                </p>
                <button className="bg-black text-white p-3 rounded my-3 w-[30%]">Get Started</button>
            </div>
         </div>
     )
}