import "./scss/App.scss";
import { useState, useEffect } from "react";
import { Items } from "./ProductsCard";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/data.json");
      const data = await response.json();
      setProducts(data);
    };

    getData();
  }, []);

  return (
    <>
      <h1>Desserts</h1>
      <div className="products">
        <Items info={products} />
      </div>
      <div className="cart">etiqueta para el carrito</div>
    </>
  );
}

export default App;
