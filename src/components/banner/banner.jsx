import React from 'react';

const banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse gap-15">
                    <img
                        src="/src/assets/banner.png"
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>

                        <div className="bg-base-300 rounded-full px-4 py-2 w-fit text-[16px] text-[#9514FA]">New: AI-Powered Tools Available</div>
                        <h1 className="text-[72px] font-bold">Supercharge Your Digital Workflow</h1>
                        <p className="py-6 text-[18px]">
                            Access premium AI tools, design assets, templates, and productivity
                            software—all in one place. Start creating faster today.
                            Explore Products
                        </p>
                        <div className='flex gap-4'>
                            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-none text-white rounded-full">Explore Products</button>
                            <button className="btn btn-outline btn-primary rounded-full">Watch Demo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default banner;