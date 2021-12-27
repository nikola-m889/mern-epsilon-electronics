import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductInfo } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";
import "../App.css";
import styled from "styled-components";
import { ButtonStyled } from "../components/ButtonStyled";

export default function ProductInfo({ match, history }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const ProductData = useSelector((state) => state.getProductInfo);
  const { product, loading, error } = ProductData;

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductInfo(match.params.id));
    }
  }, [product, match, dispatch]);

  const cartHandler = () => {
    dispatch(addToCart(product._id, quantity));
    history.push("/cart");
  };

  return (
    <StyledInfo>
      <div className="product-container">
        {loading ? (
          <h2>Please wait...</h2>
        ) : error ? (
          <h2>Sorry there was an error in loading products.</h2>
        ) : (
          <>
            <div className="product-image">
              <h2>{product.modelName}</h2>
              <p>Barcode: {product.barcode}</p>
              <img src={product.imageSource} alt={product.modelName} />
            </div>
            <div className="product-price">
              <h2>${product.price}</h2>
              {product.inStock ? <p>in Stock</p> : <p>out of Stock</p>}
              <p>Product brand: {product.brand}</p>
              <p>Color: {product.color}</p>
              <p>Warranty: {product.warranty}</p>
              <p>Shipps in: {product.shipping}</p>
              <div>
                <select
                  value={quantity}
                  className="select-qty"
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  {[...Array(product.inStock).keys()].map((item) => {
                    return (
                      <option key={item + 1} value={item + 1}>
                        {item + 1}
                      </option>
                    );
                  })}
                </select>
                <ButtonStyled btnBuy onClick={cartHandler}>
                  Add to cart
                </ButtonStyled>
              </div>
            </div>
            <div className="product-features">
              <h3>About this product:</h3>
              <p>{product.info}</p>
              <h3>Product Highlights: </h3>
              <p>{product.features}</p>
              <h3>General Information:</h3>
              <p>Product Brand: {product.brand}</p>
              <p>Product year: {product.year}</p>
              <p>Product weight: {product.weight}</p>
              <p>Manufacturer's warranty: {product.warranty}</p>
            </div>
          </>
        )}
      </div>
    </StyledInfo>
  );
}

const StyledInfo = styled.div`
  .product-container {
    max-width: 1200px;
    margin: 20px auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0px 50px;
  }

  .product-image,
  .product-price,
  .product-features {
    padding: 20px;
  }

  .product-image h2 {
    font-weight: bold;
    font-size: 30px;
    color: var(--bg-primary);
  }

  .product-container img {
    height: 400px;
  }

  select {
    padding: 11px 11px;
    font-size: 14px;
    margin-right: 30px;
  }

  @media (max-width: 980px) {
    .product-container {
      grid-template-columns: 1fr;
      gap: 20px 50px;
    }
    .product-container img {
      height: 100%;
    }
    .product-features h3 {
      padding-top: 10px;
    }
  }
`;
