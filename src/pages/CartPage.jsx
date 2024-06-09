import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../store/cartSlice';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Корзина</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Ваша корзина пуста</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {cartItems.map(item => (
            <div key={item.id} className="max-w-xs w-full border rounded-lg shadow-md p-4 bg-white flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-sm text-gray-600">Количество: {item.quantity}</p>
              </div>
              <button
                onClick={() => dispatch(removeFromCart(item))}
                className="bg-red-500 text-white px-2 py-1 rounded-md hover:bg-red-600 transition"
              >
                Удалить
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
