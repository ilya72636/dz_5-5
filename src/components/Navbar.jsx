import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartCount = useSelector((state) => state.cart.length);

  return (
    <nav className="navbar">
      <span>My Store</span>
      <span>Cart: {cartCount}</span>
    </nav>
  );
};

export default Navbar;
