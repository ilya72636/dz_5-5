export const ADD_TO_CART = 'ADD_TO_CART';
export const SET_PRODUCTS = 'SET_PRODUCTS';

export const addToCart = (productId) => ({
  type: ADD_TO_CART,
  payload: productId,
});

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});
