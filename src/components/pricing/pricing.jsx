import React from 'react';
import Container from './container';

const pricing = ({pricings}) => {
    return (
        <div className='px-5 md:px-50 py-15 space-y-4'>
             <div className="hero flex flex-col gap-4 items-center text-center justify-center">
                <h1 className="text-[24px] md:text-[48px] font-bold">Simple, Transparent Pricing</h1>
                <p className="text-[16px]">
                    Choose the plan that fits your needs. Upgrade or downgrade anytime.
                </p>
            </div>

            <Container pricings={pricings}></Container>
        </div>
    );
};

export default pricing;