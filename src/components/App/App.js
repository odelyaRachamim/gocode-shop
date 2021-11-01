// import logo from "./logo.svg";
//import ToggleButton from "../ToggleButton/ToggleButton";
import "./App.css";
import Header from "../Header/Header";
import Products from "../Products/Products";
import { useState, useEffect } from "react";
import myContext from "../../MyContext";
import TemporaryDrawer from "../TemporaryDrawer";
import RangeSlider from "../../RangeSlider";

function App() {
  const [intialProducts, setIntialProducts] = useState([]);
  const [filteredProductsList, setFilteredProductsList] =
    useState(intialProducts);
  const [filterByPriceProductList, setfilterByPriceProductList] =
    useState(filteredProductsList); //
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        return res.json();
      })
      .then((intialProducts) => {
        setIntialProducts(intialProducts);
        setFilteredProductsList(intialProducts);
        setfilterByPriceProductList(intialProducts);
      });
  }, []);

  const categories = intialProducts
    .map((p) => p.category)
    .filter((value, index, array) => array.indexOf(value) === index);

  const filterProductListByCategory = (selectedValue) => {
    setFilteredProductsList(
      intialProducts.filter((product) => product.category === selectedValue)
    );
    setfilterByPriceProductList(
      intialProducts.filter((product) => product.category === selectedValue)
    );
  };
  const filterProductListByPrice = ([minPrice, maxPrice]) => {
    setfilterByPriceProductList(
      filteredProductsList.filter(
        (product) => product.price > minPrice && product.price < maxPrice
      )
    );
  };

  return (
    <myContext.Provider value={[cart, setCart]}>
      <div className="App">
        {/* <ToggleButton /> */}
        <TemporaryDrawer />
        <RangeSlider
          filterByPrice={filterProductListByPrice}
          products={intialProducts}
        />
        <Header
          categories={categories}
          filterByCategory={filterProductListByCategory}
        />
        <Products products={filterByPriceProductList} set={setCart} />
      </div>
    </myContext.Provider>
  );
}

export default App;

// function ToggleButton() {
//   return <div>ToggleButton </div>;
// }
