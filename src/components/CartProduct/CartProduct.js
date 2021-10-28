import React, { useContext } from "react";
import "../Product/Product.css";
import { useState } from "react";
import Button from "@mui/material/Button";
import Product from "../Product/Product";
import myContext from "../../MyContext";

function CartProduct({ id, title, price, image }) {
  const [cart, setCart] = useContext(myContext);

  const amount = () => {
    return cart.filter((item) => item.id === id)[0]?.amount;
  };
  const addToCart = () => {
    if (cart.filter((item) => item.id === id).length < 1) {
      setCart([
        ...cart,
        {
          id: id,
          title: title,
          price: price,
          image: image,
          amount: 1,
        },
      ]);
    } else {
      setCart(
        cart.map((item) => {
          if (item.id === id) {
            item.amount++;
          }
          return item;
        })
      );
    }
  };
  const removeFromCart = () => {
    if (amount() > 1) {
      setCart(
        cart.map((item) => {
          if (item.id === id) {
            item.amount--;
          }
          return item;
        })
      );
    } else if (amount() === 1) {
      setCart(cart.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="product-card">
      <Product key={id} id={id} title={title} price={price} image={image} />
      {amount()}
      <Button variant="contained" onClick={() => addToCart()}>
        +
      </Button>
      <Button variant="contained" onClick={() => removeFromCart()}>
        -
      </Button>
    </div>
  );
}
export default CartProduct;
