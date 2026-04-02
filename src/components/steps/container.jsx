import React from 'react';
import { FaRegUser } from "react-icons/fa6";
import { BsBoxSeam } from "react-icons/bs";
import { LuRocket } from "react-icons/lu";

const container = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 text-center px-50">

            {/* Step 1 */}
            <div className="flex flex-col gap-6 items-center shadow-sm p-4">

                <div className="w-full lg:w-4/5 flex flex-col gap-4 items-center">
                    <div className="w-full flex items-center justify-end gap-2">
                        <div className="w-8 h-8 rounded-full bg-purple-500 text-white text-xs flex items-center justify-center">
                            01
                        </div>
                    </div>

                    <div className="w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center">
                        <FaRegUser className="text-[60px] text-purple-500" />
                    </div>
                </div>

                <div className="max-w-xs flex flex-col gap-3">
                    <h1 className="text-2xl font-bold">Get Started in 3 Steps</h1>
                    <p className="text-lg">
                        Sign up for free in seconds. No credit card required to get started.
                    </p>
                </div>

            </div>


            {/* Step 2 */}
            <div className="flex flex-col gap-6 items-center shadow-sm p-4">

                <div className="w-full lg:w-4/5 flex flex-col gap-4 items-center">
                    <div className="w-full flex items-center justify-end gap-2">
                        <div className="w-8 h-8 rounded-full bg-purple-500 text-white text-xs flex items-center justify-center">
                            02
                        </div>
                    </div>

                    <div className="w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center">
                        <BsBoxSeam className="text-[60px] text-purple-500" />
                    </div>
                </div>

                <div className="max-w-xs flex flex-col gap-3">
                    <h1 className="text-2xl font-bold">Choose Products</h1>
                    <p className="text-lg">
                        Browse our catalog and select the tools that fit your needs.
                    </p>
                </div>

            </div>


            {/* Step 3 */}
            <div className="flex flex-col gap-6 items-center shadow-sm p-4">

                <div className="w-full lg:w-4/5 flex flex-col gap-4 items-center">
                    <div className="w-full flex items-center justify-end gap-2">
                        <div className="w-8 h-8 rounded-full bg-purple-500 text-white text-xs flex items-center justify-center">
                            03
                        </div>
                    </div>

                    <div className="w-24 h-24 rounded-full bg-purple-100 flex items-center justify-center">
                        <LuRocket className="text-[60px] text-purple-500" />
                    </div>
                </div>

                <div className="max-w-xs flex flex-col gap-3">
                    <h1 className="text-2xl font-bold">Start Creating</h1>
                    <p className="text-lg">
                        Download and start using your premium tools immediately.
                    </p>
                </div>

            </div>

        </div>
    );
};

export default container;