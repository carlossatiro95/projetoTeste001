import { useEffect, useState } from "react";
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

      const listUpdated = result.json();

      setListProducts(listProducts);
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

      const productRegistered = result.json();

      setListProducts([...listProducts, productRegistered]);
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
        <div className="produto">
          <div className="info-produto">
            <p>Name: </p>
            <p>Price: </p>
          </div>
          <div className="buttons-action">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
