import React from 'react';
import Container from './container';

const steps = () => {
    return (
        <div className='space-y-6 pb-15'>
            <div className="hero px-5 md:px-70 flex flex-col gap-4 items-center text-center justify-center">
                <h1 className="text-[24px] md:text-[48px] font-bold">Get Started in 3 Steps</h1>
                <p className="text-[15px] md:text-[18px]">
                    Start using premium digital tools in minutes, not hours.
                </p>
            </div>
            <Container></Container>
        </div>
    );
};

export default steps;