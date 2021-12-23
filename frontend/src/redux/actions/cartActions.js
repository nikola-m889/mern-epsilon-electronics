import * as actions from "../constants/actionConstants";
import axios from "axios";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: actions.ADDING_TO_CART,
    payload: {
      product: data._id,
      name: data.modelName,
      imageUrl: data.imageSource,
      price: data.price,
      countInStock: data.inStock,
      qty,
    },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actions.CART_REMOVE,
    payload: id,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
