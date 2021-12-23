import * as actions from "../constants/actionConstants";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: actions.GET_PRODUCTS_REQUEST });

    const { data } = await axios.get("/api/products");

    dispatch({
      type: actions.GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actions.GET_PRODUCTS_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getProductInfo = (id) => async (dispatch) => {
  try {
    dispatch({ type: actions.GET_PRODUCT_INFO_REQUEST });

    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
      type: actions.GET_PRODUCT_INFO_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actions.GET_PRODUCT_INFO_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeProductDetails = () => (dispatch) => {
  dispatch({
    type: actions.GET_PRODUCT_INFO_RESET,
  });
};
