import Product from "../Product/Product";
import "./Products.css";

function Products({ products }) {
  return (
    <section className="Products">
      {products.map((product) => (
        <Product
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

export default Products;
//-----------------------------
// useEffect(()=>{
//   fetch("https://fakestoreapi.com/products").then((res) =>
//   console.log(res));
// },[]);
