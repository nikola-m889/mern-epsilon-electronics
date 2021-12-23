import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";
import styled from "styled-components";
import CartProduct from "../components/CartProduct";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const addToCartHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const cartSubTotal = () => {
    let subTotal = 0;
    cartItems.map((item) => (subTotal += item.price));
    return subTotal;
  };

  const cartTotal = () => {
    const subTotal = cartSubTotal();
    const tax = subTotal * 0.1;
    return subTotal + tax;
  };

  const tax = () => {
    const subTotal = cartSubTotal();
    const tax = subTotal * 0.1;
    return tax;
  };
  return (
    <CartStyled>
      <div className="cart-products">
        {cartItems.length === 0 ? (
          <h2>Your cart is currently empty</h2>
        ) : (
          cartItems.map((item) => (
            <CartProduct
              item={item}
              addToCartHandler={addToCartHandler}
              removeFromCartHandler={removeFromCartHandler}
            />
          ))
        )}
      </div>
      <div className="cart-calculation">
        <h4>Summary</h4>
        <div className="price-container">
          <div className="price-section">
            <p>Subtotal</p>
            <p>${cartSubTotal().toFixed(2)}</p>
          </div>
          <div className="price-section">
            <p>Delivery</p>
            <p>$0</p>
          </div>
          <div className="price-section">
            <p>Tax</p>
            <p>${tax().toFixed(2)} (10%)</p>
          </div>
          <div className="price-section">
            <p>Total (with taxes)</p>
            <p id="price">${cartTotal().toFixed(2)}</p>
          </div>
        </div>
      </div>
    </CartStyled>
  );
}

const CartStyled = styled.div`
  max-width: 1200px;
  margin: 30px auto;
  padding-bottom: 50px;
  display: grid;
  justify-content: space-between;
  align-items: center;
  grid-template-columns: 2fr 1fr;
  .cart-products h2 {
    text-align: center;
  }
  .cart-calculation {
    padding: 15px;
    background-color: rgb(241, 240, 240);
    align-self: flex-start;
  }
  .cart-calculation h4 {
    font-size: 19px;
    text-align: right;
    padding-bottom: 6px;
  }
  .cart-calculation p {
    color: #444;
  }
  .price-section {
    display: flex;
    justify-content: space-between;
    font-size: 17px;
  }
  .price-container .price-section #price {
    color: black;
    font-weight: bolder;
  }
  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    .cart-calculation {
      width: 100%;
    }
  }
`;
