import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const itemCount = useSelector(state => state.cart.items.length);

  return (
    <nav className="navbar">
      <h1>Магазин</h1>
      <div>
        Корзина: {itemCount} товаров
      </div>
    </nav>
  );
};

export default Navbar;