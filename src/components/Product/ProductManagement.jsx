import React, { useState } from "react";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const handleProducts = newProduct =>{
    const newProducts = [...products, newProduct];
    setProducts(newProducts);
  }
  console.log(products);
  return (
    <div>
      <ProductForm handleProducts={handleProducts}></ProductForm>
      <ProductTable products={products}></ProductTable>
    </div>
  );
};

export default ProductManagement;
