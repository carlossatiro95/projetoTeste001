import { useEffect, useState } from "react";
import CardProduct from "./components/CardProduct";
import "./App.css";

function App() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
  });

  const [listProducts, setListProducts] = useState([]);

  async function searchProducts() {
    try {
      const result = await fetch("http://localhost:3000/products", {
        method: "GET",
      });

      const listUpdated = await result.json();

      setListProducts(listUpdated);
    } catch (error) {}
  }

  useEffect(() => {
    searchProducts();
  }, []);

  async function sendForm(e) {
    e.preventDefault();

    try {
      const result = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(product),
      });

      const productRegistered = await result.json();

      setListProducts([...listProducts, productRegistered]);
    } catch (error) {}
  }

  async function deleteProduct(idProduct) {
    try {
      await fetch(`http://localhost:3000/products/${idProduct}`, {
        method: "DELETE",
      });

      setListProducts(
        listProducts.filter((productFilter) => productFilter.id !== idProduct),
      );
    } catch (error) {}
  }

  async function deleteAll() {
    try {
      await Promise.all(
        listProducts.map((productMap) =>
          fetch(`http://localhost:3000/products/${productMap.id}`, {
            method: "DELETE",
          }),
        ),
      );

      setListProducts([]);
    } catch (error) {}
  }
  return (
    <div className="container">
      <div className="box-form">
        <form onSubmit={sendForm}>
          <h1>Registration Product</h1>
          <input
            type="text"
            placeholder="Name"
            value={product.name}
            onChange={(e) => setProduct({ ...product, name: e.target.value })}
          />
          <input
            type="number"
            placeholder="Price"
            value={product.price}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
          />
          <button className="button-submit">Register</button>
        </form>
      </div>
      <div className="box-produtos">
        {listProducts.map((productMap) => (
          <CardProduct
            key={productMap.id}
            product={productMap}
            deleteProduct={deleteProduct}
          />
        ))}
      </div>
      {listProducts.length > 0 && (
        <button className="delete-all" onClick={deleteAll}>
          Delete-All
        </button>
      )}
    </div>
  );
}

export default App;
