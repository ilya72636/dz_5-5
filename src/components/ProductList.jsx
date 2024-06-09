import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { setProducts } from '../store/productsSlice';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => response.json())
      .then(data => dispatch(setProducts(data.products)));
  }, [dispatch]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {products.map(product => (
        <div key={product.id} className="max-w-xs w-full border rounded-lg shadow-md p-4 bg-white">
          <img src={product.thumbnail} alt={product.title} className="w-full h-32 object-cover rounded-md mb-4"/>
          <h3 className="text-lg font-bold mb-2">{product.title}</h3>
          <p className="text-sm text-gray-600 mb-4 line-clamp-2">{product.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">${product.price}</span>
            <button
              onClick={() => dispatch(addToCart(product))}
              className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600 transition"
            >
              Купить
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
