import React from 'react';
import Nav from './nav';

const header = ({cartCount, setCartCount, selectedType, setSelectedType}) => {
    return (
        <div>
            <div className="hero px-70 flex flex-col gap-4 items-center text-center justify-center">
                    <h1 className="text-[48px] font-bold">Premium Digital Tools</h1>
                    <p className="text-[18px]">
                        Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
                    </p>
                    <Nav cartCount={cartCount} setCartCount={setCartCount} selectedType={selectedType} setSelectedType={setSelectedType}></Nav>
            </div>
        </div>
    );
};

export default header;