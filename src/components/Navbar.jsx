import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const cartCount = useSelector((state) => state.cart.items.length);

  return (
    <nav className="navbar">
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/cart">
        Cart ({cartCount})
      </NavLink>
    </nav>
  );
};

export default Navbar;
