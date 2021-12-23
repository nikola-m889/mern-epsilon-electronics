import * as actions from "../constants/actionConstants";

export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actions.GET_PRODUCTS_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case actions.GET_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case actions.GET_PRODUCTS_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getProductInfoReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case actions.GET_PRODUCT_INFO_REQUEST:
      return {
        loading: true,
      };
    case actions.GET_PRODUCT_INFO_SUCCESS:
      return {
        loading: false,
        product: action.payload,
      };
    case actions.GET_PRODUCT_INFO_ERROR:
      return {
        loading: false,
        error: action.payload,
      };
    case actions.GET_PRODUCT_INFO_RESET:
      return {
        product: {},
      };
    default:
      return state;
  }
};
