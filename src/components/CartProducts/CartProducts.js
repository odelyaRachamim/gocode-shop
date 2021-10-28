import "../Products/Products.css";
import CartProduct from "../CartProduct/CartProduct";
import myContext from "../../MyContext";
import React, { useContext } from "react";

function CartProducts({ products }) {
  const [cart, setCart] = useContext(myContext);
  return (
    <section className="Products">
      {cart?.map((product) => (
        <CartProduct
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
        />
      ))}
    </section>
  );
}

export default CartProducts;
