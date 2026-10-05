import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="box-form">
        <form>
          <h1>Cadastro de Produtos</h1>
          <input type="text" name="" id="" />
          <input type="number" name="" id="" />
          <button className="button-submit">Cadastrar</button>
        </form>
      </div>
      <div className="box-produtos">
        <div className="produto">
          <div className="info-produto">
            <p>Nome: </p>
            <p>Preço: </p>
          </div>
          <div className="buttons-action">
            <button>Editar</button>
            <button>Excluir</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
