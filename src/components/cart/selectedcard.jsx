import React from 'react';
import { AiOutlineDelete } from "react-icons/ai";

const selectedcard = ({product, handleDeleteSelectedProduct}) => {
    return (
        <div>
            <div className='flex items-center gap-6 justify-between p-8 rounded-2xl border'>
                <div className='flex items-center gap-4'>
                    <img className='h-19 w-auto rounded-md'/>
                    <div>
                        <h2 className='flex items-center gap-2.5 font-bold text-3xl'>{product.name}</h2>
                        <p>${product.price}</p>
                    </div>
                </div>


                <button className='btn text-red-400' onClick={() => handleDeleteSelectedProduct(product)}>
                    <AiOutlineDelete />
                </button>
            </div>
        </div>
    );
};

export default selectedcard;