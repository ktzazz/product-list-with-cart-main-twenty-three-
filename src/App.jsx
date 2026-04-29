import "./scss/App.scss";
import { ProductList } from "./productList";
import { Cart } from "./cart";
import { Filter } from "./filter";
import CartProvider from "./CartProvider";

function App() {
  return (
    <CartProvider>
      <div className="dessert_filter__cont">
        <h1>Desserts</h1>
        <Filter />
      </div>
      <div className="product_list__cont">
        <ProductList />
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
    </CartProvider>
  );
}

export default App;
