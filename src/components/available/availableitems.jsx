import React from 'react';
import ProductCard from '../home/productcard'

const availableitems = ({products, selectBuyItem, setSelectBuyItem, cartCount, setCartCount}) => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} selectBuyItem={selectBuyItem} setSelectBuyItem={setSelectBuyItem} cartCount={cartCount} setCartCount={setCartCount} />
            ))}
        </div>
    );
};

export default availableitems;