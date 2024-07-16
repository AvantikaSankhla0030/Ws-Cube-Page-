import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

export default function Footer() {
    return (
        <div className="bg-[#2699fb] w-full p-[50px] mx-auto  md:grid grid-cols-4 gap-6">
             <div className="flex flex-col gap-4">
                <h1 className="font-bold text-2xl"> 
                    WsCube Tech 
                </h1>
                <div className="text-white" >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis molestias 
                    vero eaque dolore ad placeat aspernatur quas 
                </div>
                <div className="flex gap-9 text-2xl text-white">
                <FaFacebookSquare />
                <FaInstagram />
                <FaTwitterSquare/>
                <FaGithub/>
                </div>
             </div>
             <div className="my-4 flex flex-col gap-2">
                  <h4 className="font-bold text-lg">Solution</h4>
                  <div className="text-white">Analytics</div>
                  <div className="text-white">Marketing</div>
                  <div className="text-white">Commerce</div>
                  <div className="text-white">Insights</div>
             </div>
             <div className="my-4 flex flex-col gap-2">
                  <h4 className="font-bold text-lg">Support</h4>
                  <div className="text-white">Pricing</div>
                  <div className="text-white">Documentation</div>
                  <div className="text-white">Guides</div>
                  <div className="text-white">API Status</div>
             </div>
             <div className="my-4 flex flex-col gap-2">
                  <h4 className="font-bold text-lg">Company</h4>
                  <div className="text-white">About</div>
                  <div className="text-white">Blog</div>
                  <div className="text-white">Jobs</div>
                  <div className="text-white">Placement</div>
                  <div className="text-white">Careers</div>
             </div>
             
        </div>
    )
}