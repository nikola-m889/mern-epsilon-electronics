import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts as listProducts } from "../redux/actions/productActions";
import Product from "./Product";
import styled from "styled-components";

export default function Products() {
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <StyledProducts>
      <div className="products-container">
        {loading ? (
          <h2>Please wait...</h2>
        ) : error ? (
          <h2>Sorry there was error in loading products...</h2>
        ) : (
          products.map((product) => {
            return (
              <Product
                key={product._id}
                id={product._id}
                model={product.modelName}
                price={product.price}
                info={product.info}
                imgSource={product.imageSource}
                barcode={product.barcode}
                warranty={product.warranty}
                shipping={product.shipping}
                stock={product.inStock}
                features={product.features}
              />
            );
          })
        )}
      </div>
    </StyledProducts>
  );
}

const StyledProducts = styled.div`
  margin: 20px auto !important;
  .products-container {
    margin: 0 auto;
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
  @media (max-width: 1200px) {
    .products-container {
      margin: 0 auto;
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (max-width: 980px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 700px) {
    .products-container {
      grid-template-columns: 1fr;
    }
  }
`;
