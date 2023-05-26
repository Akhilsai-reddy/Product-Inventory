import React, { createContext, useEffect, useState } from "react";
import ProductApi from "../Data/ProductApi";

export const productContext = createContext();

const ProductContext = (props) => {
  const [Products, setProducts] = useState([]);
  useEffect(() => {
    ProductApi.getAllProducts((data) => setProducts(data));
  }, []);

  const newProduct = (item) => {
    const newData = [...Products, item];
    setProducts(newData);
  };

  const handleDeleteProduct=(id)=>{
    setProducts(Products.filter((item) => item.id !== id))
  }
  
  const handleDeleteProducts=(ids)=>{
    ids.forEach(id => handleDeleteProduct(id,()=>{}));
  }
 
  return (
    <productContext.Provider
      value={{
        ...Products,
        Products,
        getSearchedData: (products) => setProducts(products),
        addProduct: (product) => newProduct(product),
        deleteProduct: (id) =>handleDeleteProduct(id),
        deleteProducts:(ids)=>handleDeleteProducts(ids)
      }}
    >
      {props.children}
    </productContext.Provider>
  );
};
export default ProductContext;
