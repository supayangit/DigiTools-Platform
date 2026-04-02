import React from 'react';

const stats = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0 px-6 lg:px-20 py-10 lg:py-16 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-center lg:text-left">

            <div>
                <h1 className="text-3xl sm:text-4xl lg:text-[60px] font-extrabold">50K+</h1>
                <h3 className="text-base sm:text-lg lg:text-[24px]">Active Users</h3>
            </div>

            <hr className="hidden lg:block h-20 w-0.5 bg-gray-400 border-0" />

            <div>
                <h1 className="text-3xl sm:text-4xl lg:text-[60px] font-extrabold">200+</h1>
                <h3 className="text-base sm:text-lg lg:text-[24px]">Premium Tools</h3>
            </div>

            <hr className="hidden lg:block h-20 w-0.5 bg-gray-400 border-0" />

            <div>
                <h1 className="text-3xl sm:text-4xl lg:text-[60px] font-extrabold">4.9</h1>
                <h3 className="text-base sm:text-lg lg:text-[24px]">Rating</h3>
            </div>

        </div>
    );
};

export default stats;