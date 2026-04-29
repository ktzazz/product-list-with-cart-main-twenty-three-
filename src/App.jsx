import "./scss/App.scss";
import { ProductList } from "./productList";
import { Cart } from "./cart";
import { Filter } from "./filter";
import CartProvider from "./CartProvider";

function App() {
  return (
    <CartProvider>
      <h1>Desserts</h1>
      <Filter />
      <ProductList />
      <Cart />
    </CartProvider>
  );
}

export default App;
