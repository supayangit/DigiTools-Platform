import React from 'react';

const ready = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-50 py-15'>
            <div className="hero flex flex-col gap-4 items-center text-center justify-center">
                <h1 className="text-[24px] lg:text-[48px] font-bold text-white">Ready to Transform Your Workflow?</h1>
                <p className="text-[18px] text-white">
                    Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.
                </p>
                <nav className='flex flex-col lg:flex-row gap-4 w-fit mx-auto'>
                    <button className="btn px-4 py-3.5 bg-white-500 text-[16px] text-purple rounded-full">Explore Products</button>
                    <button className="btn px-4 py-3.5 btn-outline border-white btn-primary rounded-full text-[16px] text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]">View Pricing</button>
                </nav>
                <p className="text-[18px] text-white">
                    14-day free trial • No credit card required • Cancel anytime
                </p>
            </div>
        </div>
    );
};

export default ready;