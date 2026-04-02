import React from 'react';

const nav = ({ cartCount, setCartCount, selectedType, setSelectedType }) => {
    return (
        <div>
            <nav className='flex gap-4 w-fit mx-auto'>
                <button className="btn px-4 py-3.5 bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-none text-white text-[16px] rounded-full" onClick={() => setSelectedType("available")}>
                    Products
                </button>
                <button className="btn px-4 py-3.5 btn-outline btn-primary rounded-full text-[16px]" onClick={() => setSelectedType("cart")}>
                    Cart({cartCount})
                </button>
            </nav>
        </div>
    );
};

export default nav;