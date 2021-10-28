// import logo from "./logo.svg";
import "./App.css";
import Header from "../Header/Header";
import Products from "../Products/Products";
import ToggleButton from "../ToggleButton/ToggleButton";
import { useState, useEffect } from "react";
import Cart from "../Cart/Cart";
import myContext from "../../MyContext";
import TemporaryDrawer from "../TemporaryDrawer";

function App() {
  const [intialProducts, setIntialProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((intialProducts) => {
        setIntialProducts(intialProducts);
        setFilteredProductsList(intialProducts);
      });
  }, []);

  const [filteredProductsList, setFilteredProductsList] =
    useState(intialProducts);

  const categories = intialProducts
    .map((p) => p.category)
    .filter((value, index, array) => array.indexOf(value) === index);

  const filterProductsList = (selectedValue) => {
    setFilteredProductsList(
      intialProducts.filter((product) => product.category === selectedValue)
    );
  };
  //ex5
  const [cart, setCart] = useState([]);
  return (
    <myContext.Provider value={[cart, setCart]}>
      <div className="App">
        {/* <ToggleButton /> */}
        <TemporaryDrawer />
        <Header categories={categories} filterByCategory={filterProductsList} />
        <Products products={filteredProductsList} set={setCart} />
      </div>
    </myContext.Provider>
  );
}

export default App;

// function ToggleButton() {
//   return <div>ToggleButton </div>;
// }
