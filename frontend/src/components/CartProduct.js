import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function CartProduct({
  item,
  addToCartHandler,
  removeFromCartHandler,
}) {
  return (
    <CartProductStyled>
      {/* column 1 */}
      <div className="cart-product-image">
        <img src={item.imageUrl} alt={item.name} />
      </div>

      {/* column 2 */}
      <div className="cart-product-name">
        <Link to={`/product/${item.product}`}>
          <div className="model-name">{item.name}</div>
        </Link>
        <div className="cart-product-options">
          <select
            value={item.qty}
            onChange={(e) => addToCartHandler(item.product, e.target.value)}
          >
            {[...Array(item.countInStock).keys()].map((item) => (
              <option key={item + 1} value={item + 1}>
                {item + 1}
              </option>
            ))}
          </select>
          <button
            type="button"
            className="cart-product-remove"
            onClick={() => removeFromCartHandler(item.product)}
          >
            remove
          </button>
        </div>
      </div>

      {/* column 3 */}
      <div className="cart-product-stock">
        <p>Availability:</p>
        <p>{item.countInStock > 0 ? "In stock" : "Out of Stock"}</p>
        <p className="stock-info">Usually delivered within 2-3 working days</p>
      </div>

      {/* column 4 */}
      <div className="cart-product-price">
        <p>Price: </p> <p>${item.price}</p>
      </div>

      {/* column 5 */}
      <div className="cart-product-subtotal">
        <p>Subtotal:</p>
        <p>${item.price}</p>
      </div>
    </CartProductStyled>
  );
}

const CartProductStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 3fr 3fr 1fr 1fr;
  gap: 10px;
  padding: 15px;
  margin-bottom: 20px;
  font-size: 16px;
  .cart-product-name {
    display: flex;
    justify-content: center;
    /*align-items: center;*/
    margin-left: 20px;
    flex-direction: column;
  }

  .model-name {
    margin-top: -10px;
    margin-bottom: 10px;
  }

  .cart-product-options {
    display: flex;
    flex-direction: row;
  }

  .cart-product-options select {
    padding: 0 7px;
    margin-right: 20px;
  }

  .cart-product-options button {
    padding: 0 20px;
    background: none;
    border: 2px solid var(--bg-secondary);
    border-radius: 5px;
    cursor: pointer;
  }

  .cart-product-stock .stock-info {
    font-size: 11px;
    color: rgb(104, 104, 104);
  }

  p {
    margin: 3px 0;
  }
`;
