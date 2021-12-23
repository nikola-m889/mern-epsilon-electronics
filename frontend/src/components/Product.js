import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { addToCart } from "../redux/actions/cartActions";
import { useDispatch } from "react-redux";

export default function Product({
  id,
  imgSource,
  model,
  price,
  barcode,
  warranty,
  shipping,
  stock,
  features,
}) {
  const dispatch = useDispatch();

  const cartHandler = () => {
    dispatch(addToCart(id, 1));
  };
  return (
    <StyledProduct>
      <img src={imgSource} alt={model} />
      <p className="model-name">{model}</p>
      <p className="model-barcode">{barcode}</p>
      <p className="model-price">${price}</p>
      {stock > 0 ? (
        <p className="stock-green">In stock</p>
      ) : (
        <p className="stock-red">Out of stock.</p>
      )}

      <div className="model-links">
        <Link to={`/product/${id}`} className="model-link-btn info">
          <i className="fas fa-question"></i> More Info
        </Link>
        <Link to="/cart" className="model-link-btn cart" onClick={cartHandler}>
          <i className="fas fa-cart-plus"></i> Add to Cart
        </Link>
      </div>
      <ul className="model-features">
        {features.map((item) => {
          return <li>- {item.substring(0, 30)}...</li>;
        })}
      </ul>
      <p className="model-warranty">Warranty: {warranty}.</p>
      <p className="model-shipping">
        <i className="fas fa-truck"></i> Free DPD Delivery, shipping in:{" "}
        {shipping}.
      </p>
    </StyledProduct>
  );
}

const StyledProduct = styled.div`
  width: auto;
  max-width: 300px;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px #a4a6a4;
  border-radius: 5px;
  img {
    height: 180px;
    border-radius: 5px;
  }
  p {
    margin: 0;
    color: #444;
  }
  .model-name {
    font-weight: bold;
    font-size: 17px;
    margin: 0;
  }
  .model-price {
    font-size: 26px;
    font-weight: bold;
  }
  .stock-green,
  .stock-red {
    font-size: 12px;
    color: green;
  }
  .stock-red {
    color: red;
  }
  .model-links {
    margin: 4px 0;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
  }
  .model-links .model-link-btn {
    padding: 7px 18px;
    border: none;
    cursor: pointer;
    font-size: 12px;
    font-weight: bold;
    transition: var(--mainTransition);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .model-links .model-link-btn i {
    margin-right: 7px;
  }
  .cart {
    color: var(--bg-primary);
    background: var(--bg-secondary);
  }
  .cart:hover {
    color: var(--bg-secondary);
    background: var(--bg-primary);
  }
  .info {
    color: var(--bg-secondary);
    background: var(--bg-primary);
  }
  .info:hover {
    color: var(--bg-primary);
    background: var(--bg-secondary);
  }
  .model-features {
    height: 100px;
    overflow: hidden;
    font-size: 12px;
    color: black;
  }
  .model-shipping {
    font-size: 12px;
    font-weight: bold;
  }
  .model-shipping i {
    font-size: 16px;
    margin-right: 3px;
  }
  @media (max-width: 780px) {
    .model-links .model-link-btn {
      padding: 7px 22px;
    }
  }
`;
