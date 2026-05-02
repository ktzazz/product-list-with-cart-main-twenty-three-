import "./scss/App.scss";
import { ProductList } from "./productList";
import { Cart } from "./cart";
import { Filter } from "./filter";
import { BtnFilter } from "./btnFilter";
import { useContext } from "react";
import { CartContext } from "./CartContext";

function App() {
  const { buttonFilter } = useContext(CartContext);

  return (
    <>
      <div className="block__a">
        <div className="dessert_filter__cont">
          <h1>Desserts</h1>
          <BtnFilter />
        </div>
        <div className={`block  ${!buttonFilter ? "" : " on"}`}>
          <Filter />
        </div>
        <div className="product_list__cont">
          <ProductList />
        </div>
      </div>

      <div className="cartMain__cont">
        <Cart />
      </div>
      <footer className="attribution">
        {" "}
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.frontendmentor.io/profile/ktzazz">Katia Aragón</a>.
      </footer>
    </>
  );
}

export default App;
