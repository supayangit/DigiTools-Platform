import React, { useState } from 'react';
import Header from './header';
import Container from './container';

const home = ({products, cartCount, setCartCount}) => {
    const [selectBuyItem, setSelectBuyItem] = useState([]);
    const [selectedType, setSelectedType] = useState("available");

    return (
        <div className='px-50 py-10 space-y-4'>
            <Header cartCount={cartCount} setCartCount={setCartCount} selectedType={selectedType} setSelectedType={setSelectedType}></Header>
            <Container products={products} selectBuyItem={selectBuyItem} setSelectBuyItem={setSelectBuyItem} cartCount={cartCount} setCartCount={setCartCount} selectedType={selectedType} setSelectedType={setSelectedType}></Container>
        </div>
    );
};


export default home;