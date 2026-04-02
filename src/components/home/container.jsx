import React from 'react';
import Availableitmes from '../available/availableitems';
import Cartitems from '../cart/cartitems';

const Container = ({ products, selectBuyItem, setSelectBuyItem, cartCount, setCartCount, selectedType, setSelectedType }) => {
  console.log(products)
  return (
    <div className="">
      {
        selectedType === "available" ? (
          <Availableitmes products={products} selectBuyItem={selectBuyItem} setSelectBuyItem={setSelectBuyItem} cartCount={cartCount} setCartCount={setCartCount} selectedType={selectedType} setSelectedType={setSelectedType}></Availableitmes>
        ) : (
          <Cartitems products={products} selectBuyItem={selectBuyItem} setSelectBuyItem={setSelectBuyItem} cartCount={cartCount} setCartCount={setCartCount} selectedType={selectedType} setSelectedType={setSelectedType}></Cartitems>
        )
      }
    </div>
  );
};

export default Container;