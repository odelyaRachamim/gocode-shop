import MyContext from "MyContext";
import { useState } from "react";

function Cart() {
  const [productsCart, setProductsCart] = useState(MyContext);
  return "MY CART";
}
export default Cart;
