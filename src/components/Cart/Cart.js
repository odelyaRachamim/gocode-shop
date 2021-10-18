import MyContext from "MyContext";
import { useState } from "react";

function Cart() {
  const [productsCart, setProductsCart] = useState(MyContext);
  return "my cart";
}
export default Cart;
