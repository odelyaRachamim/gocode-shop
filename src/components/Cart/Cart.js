//import Products from "../Products/Products";
import { useState } from "react";
import React, { useContext } from "react"; //
import { myContext } from "../../MyContext"; //
import CartProducts from "../CartProducts/CartProducts";

function Cart() {
  //const totalPrice = cart.reduce((cart, product.price) => cart + product.price, 0);
  return (
    <>
      <h1>CART</h1>
      <span>Items in cart: </span>
      {/* <span>Items in cart: {Cart.length/cart.totalPrice}</span> */}
      <br />
      <CartProducts />
      <span>Total price: </span>
      <br />
      {/* <div className="Products">
        {cart.map((product, id) => (
          <div className="Product" key={id}>
            <h3>{product.title}</h3>
            <h4>{product.price}</h4>
            <img src={product.img} alt={product.title}></img>
          </div>
        ))}
      </div> */}
    </>
  );
}
export default Cart;

/* <button onClick={() => removeFromCart(product)}>REMOVE</button>  //BUTTON IN CART */
