import React, { useContext } from "react";
import "./Product.css";
import myContext from "../../MyContext";

function Product({ title, price, image, product }) {
  const [cart, setCart] = useContext(myContext);

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} />
      </div>
      <div className="product-info">
        <h5>{title}</h5>
        <h6>{price}</h6>
      </div>
    </div>
  );
}
export default Product;
