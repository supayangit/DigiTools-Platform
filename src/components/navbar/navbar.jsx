import React from 'react';

const navbar = ({ cartCount, setCartCount }) => {
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm px-50 fixed top-0 left-0 right-0 z-10">
                <div className="navbar-start">
                    <h1 className="btn btn-ghost text-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA]
           bg-clip-text text-transparent font-bold">DigiTools</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end flex gap-4">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
                        {cartCount > 0 && (
                            <span className="badge badge-sm indicator-item bg-red-500 rounded-full">
                                {cartCount}
                            </span>
                        )}
                        
                    </div>
                    <a className="btn border-none bg-transparent hover:bg-base-300">Login</a>
                    <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-none text-white rounded-full">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default navbar;