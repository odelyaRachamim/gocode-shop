import "./Product.css";
//import MyContext from "MyContext";
import { useState } from "react";

function Product({ title, price, image }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} />
      </div>
      <div className="product-info">
        <h5>{title}</h5>
        <h6>{price}</h6>
        <button
          onClick={() => {
            //setProductsCart
          }}
        >
          {" "}
          Add to cart
        </button>
      </div>
    </div>
  );
}
export default Product;
