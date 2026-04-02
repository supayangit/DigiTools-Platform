import React from 'react';

const stats = () => {
    return (
        <div className='flex justify-between items-center h-10 px-50 py-30 bg-linear-to-r  from-[#4F39F6] to-[#9514FA] text-white'>
            <div>
                <h1 className='text-[60px] font-extrabold'>50K+</h1>
                <h3 className='text-[24px]'>Active Users</h3>
            </div>
             <hr className="h-27 w-0.5 bg-gray-400 border-0"></hr>
            <div>
                <h1 className='text-[60px] font-extrabold'>200+</h1>
                <h3 className='text-[24px]'>Premium Tools</h3>
            </div>
             <hr className="h-27 w-0.5 bg-gray-400 border-0"></hr>
            <div>
                <h1 className='text-[60px] font-extrabold'>4.9</h1>
                <h3 className='text-[24px]'>Rating</h3>
            </div>
        </div>
    );
};

export default stats;