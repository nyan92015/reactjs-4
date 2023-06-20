import React from "react";
import Carousel from "react-material-ui-carousel";
import { product, productsData } from "./productsData";
import "./Products.scss";
const Products = () => {
  const productList = productsData.map((productData: product) => (
    <div className="products__carousel__product" key={productData.id}>
      <img
        className="products__carousel__product__image"
        src={productData.url}
        alt="画像"
      />
      <div className="products__carousel__product__sentence">
        <h3 className="products__carousel__product__sentence__title">
          {productData.title}
        </h3>
        <p className="products__carousel__product__sentence__detail">
          {productData.detail}
        </p>
      </div>
    </div>
  ));
  return (
    <div className="products">
      <h1 className="products__subtitle">techtrainで作ったもの</h1>
      <Carousel
        className="products__carousel"
        interval={6500}
        indicatorIconButtonProps={{
          style: {
            margin: "100%",
          },
        }}
        navButtonsProps={{
          style: {
            color: "rgb(0,0,0,1)",
            background: "rgb(255,255,255,0)",
          },
        }}
      >
        {productList}
      </Carousel>
    </div>
  );
};

export default Products;
