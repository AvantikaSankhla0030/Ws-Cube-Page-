import React from "react";
import single from "../assets/Image/single.png"
import double from "../assets/Image/double.png"
import triple from "../assets/Image/triple.png"
export default function Plans() {
    return(
        <div className="max-w-[1100px] mx-auto py-[100px] px-2 md:grid grid-cols-3 gap-6"> 
            <div className="max-w-[1100px] py-8 shadow-xl my-4 hover:scale-105 duration-[400ms] 
            flex flex-col text-justify gap-4">
                <img className="w-[60px] h-[60px] mx-auto" src={single} alt="" />
                <h2 className="mx-auto font-bold text-lg">Web development</h2>
                <div className="mx-auto font-bold text-2xl">$ 149</div>
                <div className="mx-auto ">Lorem Ipsum is Simply</div>
                <div className="mx-auto ">Lorem Ipsum is Simply <br/> dummy text of the printing</div>
                <div className="mx-auto ">Lorem Ipsum is Simply dummy </div>
                <button className="bg-[#55efc4] text-sm font-bold text-black mx-auto
                 p-3 rounded w-[160px]">
                    Start Trial
                </button>
            </div>
            <div className="max-w-[1100px] py-8 bg-gray-100 shadow-xl my-4 hover:scale-105 
            duration-[400ms] flex flex-col text-justify gap-4">
                 <img className="w-[60px] h-[60px] mx-auto" src={double} alt="" />
                <h2 className="mx-auto font-bold text-lg">Digital Marketing</h2>
                <div className="mx-auto font-bold text-2xl">$ 149</div>
                <div className="mx-auto ">Lorem Ipsum is Simply</div>
                <div className="mx-auto ">Lorem Ipsum is Simply <br/> dummy text of the printing</div>
                <div className="mx-auto ">Lorem Ipsum is Simply dummy </div>
                <button className="bg-black text-sm font-bold text-[#55efc4] mx-auto 
                p-3 rounded w-[160px]">
                    Start Trial
                </button>
            </div>
            <div className="max-w-[1100px] shadow-xl my-4 hover:scale-105 
            duration-[400ms] flex flex-col text-justify gap-4">
                  <img className="w-[60px] h-[60px] mx-auto" src={triple} alt="" />
                <h2 className="mx-auto font-bold text-lg">App development</h2>
                <div className="mx-auto font-bold text-2xl">$ 149</div>
                <div className="mx-auto ">Lorem Ipsum is Simply</div>
                <div className="mx-auto ">Lorem Ipsum is Simply <br/> dummy text of the printing</div>
                <div className="mx-auto ">Lorem Ipsum is Simply dummy </div>
                <button className="bg-[#55efc4] text-sm font-bold text-black mx-auto 
                p-3 rounded w-[160px]">
                    Start Trial
                </button>
            </div>
             
        </div>
    )
}