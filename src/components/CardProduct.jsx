import { useState } from "react";

function cardProduct({ product, deleteProduct, editProduct }) {
  const [editing, setEditing] = useState(false);

  const [productEdited, setProductEdited] = useState({
    name: product.name,
    price: product.price,
  });

  function saveEdition() {
    editProduct(product.id, productEdited);
    setEditing(false);
  }

  return (
    <div className="produto">
      {editing ? (
        <div className="input-product">
          <input
            type="text"
            value={productEdited.name}
            onChange={(e) =>
              setProductEdited({ ...productEdited, name: e.target.value })
            }
          />
          <input
            type="number"
            value={productEdited.price}
            onChange={(e) =>
              setProductEdited({ ...productEdited, price: e.target.value })
            }
          />
        </div>
      ) : (
        <div className="info-produto">
          <p>
            Name: <span>{product.name}</span>
          </p>
          <p>
            Price: <span>{product.price}</span>
          </p>
        </div>
      )}

      <div className="buttons-action">
        {editing ? (
          <button onClick={saveEdition}>Save</button>
        ) : (
          <button onClick={() => setEditing(true)}>Edit</button>
        )}

        <button onClick={() => deleteProduct(product.id)}>Delete</button>
      </div>
    </div>
  );
}
export default cardProduct;
