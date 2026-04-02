import React from 'react';
import { IoRadioButtonOnOutline } from "react-icons/io5";
import { CiPlay1 } from "react-icons/ci";

const banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen pt-5 md:pt-20">
                <div className="hero-content flex-col lg:flex-row-reverse gap-8 lg:gap-15 px-4 lg:px-0">

                    
                    <div>
                        <img src="/banner.png" className="w-full max-w-xs sm:max-w-sm lg:max-w-md rounded-lg shadow-2xl" />
                    </div>

                    <div className="text-center lg:text-left">

                        <div className="flex gap-2 bg-base-300 rounded-full px-4 py-2 w-fit text-sm lg:text-[16px] text-[#9514FA] items-center mx-auto lg:mx-0">
                            <div><IoRadioButtonOnOutline /></div>
                            <div>New: AI-Powered Tools Available</div>
                        </div>

                        <h1 className="text-3xl sm:text-4xl lg:text-[72px] font-bold mt-4 leading-tight">
                            Supercharge Your Digital Workflow
                        </h1>

                        <p className="py-4 lg:py-6 text-base lg:text-[18px]">
                            Access premium AI tools, design assets, templates, and productivity
                            software—all in one place. Start creating faster today.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start">
                            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-none text-white rounded-full w-full sm:w-auto">
                                Explore Products
                            </button>
                            <button className="btn btn-outline btn-primary rounded-full w-full sm:w-auto">
                                <CiPlay1 /> Watch Demo
                            </button>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default banner;