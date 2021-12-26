import React from "react";
import styled from "styled-components";
import image1 from "../images/slider1.jpg";
import image2 from "../images/slider2.jpg";
import image3 from "../images/slider3.jpg";

export default function Carousel() {
  return (
    <StyledCarousel>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={image1}
              className="d-block w-100"
              alt="Electronics Promo 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src={image2}
              className="d-block w-100"
              alt="Electronics Promo 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src={image3}
              className="d-block w-100"
              alt="Electronics Promo 3"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </StyledCarousel>
  );
}

const StyledCarousel = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  .carousel-inner .carousel-item {
    height: 440px;
    background-color: rgb(219, 219, 219);
  }
  .carousel-item img {
    position: absolute;
    object-fit: cover;
    display: table;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    max-width: 100%;
    height: auto;
    min-height: 440px;
  }
  @media (max-width: 600px) {
    .carousel-inner .carousel-item {
      height: 260px;
    }
    .carousel-item img {
      min-height: 260px;
      max-width: 100%;
    }
  }@media (max-width: 414px) {
    .carousel-inner .carousel-item {
      height: 220px;
    }

    .carousel-item img {
      min-height: 220px;
      max-width: 100%;
    }
  }
`;
