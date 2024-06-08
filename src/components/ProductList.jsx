import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, setProducts } from '../store/actions/cartActions';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((response) => response.json())
      .then((data) => {
        dispatch(setProducts(data.products));
      });
  }, [dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product product-card">
          <h3>{product.title}</h3>
          <p>Price: ${product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Buy</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
