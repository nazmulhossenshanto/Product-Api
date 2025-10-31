import React from 'react';

const ProductTable = ({ products }) => {
  return (
    <div>
      {products.map((p, index) => (
        <div key={index} className="border p-4">
          <h1>{p.name}</h1>
          <p>{p.email}</p>
          <p>{p.password}</p>
        </div>
      ))}
    </div>
  );
};
export default ProductTable;