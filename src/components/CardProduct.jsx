function cardProduct({ product }) {
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
        <button>Delete</button>
      </div>
    </div>
  );
}
export default cardProduct;
