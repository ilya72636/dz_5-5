
import React, { useEffect, useState } from 'react';
import ProductItem from './ProductItem';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    import('../data/products.json').then(res => setProducts(res.default));
  }, []);

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductItem key={product._id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
