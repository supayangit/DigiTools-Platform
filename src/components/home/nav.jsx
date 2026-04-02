import React from 'react';

const nav = ({ cartCount, setCartCount, selectedType, setSelectedType }) => {
    return (
        <div>
            <nav className='flex gap-4 w-fit mx-auto'>
                <button
                    onClick={() => setSelectedType("available")}
                    className={`btn px-4 py-3.5 rounded-full text-[16px] border-none
  ${selectedType === "available"
                            ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
                            : "btn-outline btn-primary"
                        }`}
                >
                    Products
                </button>

                <button
                    onClick={() => setSelectedType("cart")}
                    className={`btn px-4 py-3.5 rounded-full text-[16px] border-none
  ${selectedType === "cart"
                            ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
                            : "btn-outline btn-primary"
                        }`}
                >
                    Cart ({cartCount})
                </button>
            </nav>
        </div>
    );
};

export default nav;