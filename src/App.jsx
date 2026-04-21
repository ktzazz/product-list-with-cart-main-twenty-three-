import "./scss/App.scss";
import { useState, useEffect } from "react";
import { Items } from "./ProductsCard";
import { Cart } from "./cart";
import { Filter } from "./filter";
import CartProvider from "./CartProvider";

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
    <CartProvider>
      <h1>Desserts</h1>
      <Filter />
      <div className="products">
        <Items info={products} />
      </div>
      <Cart />
    </CartProvider>
  );
}

export default App;
