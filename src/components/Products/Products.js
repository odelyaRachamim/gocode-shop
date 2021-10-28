import "./Products.css";

import CartProduct from "../CartProduct/CartProduct";

function Products({ products }) {
  return (
    <section className="Products">
      {products.map((product) => (
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

export default Products;
