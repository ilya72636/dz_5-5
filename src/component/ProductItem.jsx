import React from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../store/cartSlice';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItemToCart(product));
  };

  return (
    <div className="product-item">
      <img src={product.picture} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <button onClick={handleAddToCart}>Купить</button>
    </div>
  );
};

export default ProductItem;