import React, { useState } from 'react';
import Selectedcard from './selectedcard';

const CartItems = ({ products, selectBuyItem, setSelectBuyItem, cartCount, setCartCount }) => {

    const handleDeleteSelectedProduct = (product) => {
        const updatedProducts = selectBuyItem.filter(
            (item) => item.id !== product.id
        );
        setSelectBuyItem(updatedProducts);
        setCartCount((prev) => prev - 1);
    };

    const handleCheckout = () => {
       
        setSelectBuyItem([]);
   
        setCartCount(0);
    };

    const totalPrice = selectBuyItem.reduce(
        (total, product) => total + product.price,
        0
    );

    return (
        <div>
            <div className='space-y-5 shadow-sm'>
                {selectBuyItem.length === 0 ? (
                    <div className='h-100 flex items-center justify-center flex-col gap-6'>
                        <h2 className='font-semibold text-3xl'>No product added yet</h2>
                        <p>Go to available tab to add products</p>
                    </div>
                ) : (
                    selectBuyItem.map((product, ind) => (
                        <Selectedcard
                            key={ind}
                            product={product}
                            handleDeleteSelectedProduct={handleDeleteSelectedProduct}
                        />
                    ))
                )}

                <div className='flex justify-between'>
                    <div>Total</div>
                    <div className="font-bold text-[32px]">
                        ${totalPrice.toFixed(2)}
                    </div>
                </div>

                <button
                    onClick={handleCheckout}
                    className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white btn-block"
                >
                    Proceed To Checkout
                </button>
            </div>
        </div>
    );
};

export default CartItems;