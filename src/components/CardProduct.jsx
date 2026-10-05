function cardProduct({ product, deleteProduct }) {
  return (
    <div className="produto">
      <div className="info-produto">
        <p>
          Name: <span>{product.name}</span>
        </p>
        <p>
          Price: <span>{product.price}</span>
        </p>
      </div>
      <div className="buttons-action">
        <button>Edit</button>
        <button onClick={() => deleteProduct(product.id)}>Delete</button>
      </div>
    </div>
  );
}
export default cardProduct;
