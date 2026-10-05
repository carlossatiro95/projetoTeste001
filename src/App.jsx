import { useState } from "react";
import "./App.css";

function App() {
  const [product, setProduct] = useState({
    name: "",
    price: "",
  });

  async function sendForm(e) {
    e.preventDefault();

    try {
      const result = await fetch("", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(product),
      });

      const productRegistered = result.json();
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
