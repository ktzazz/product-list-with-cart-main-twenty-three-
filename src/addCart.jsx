import "./scss/addCart.scss";
import { useContext } from "react";
import { CartContext } from "./CartContext";

export const BtnCart = ({ product }) => {
  const { addToCart, removeFromCart, cart } = useContext(CartContext);

  const itemInCart = cart.find((item) => item.name === product.name);
  const quantity = itemInCart ? itemInCart.quantity : 0;

  const handleAddCart = () => addToCart(product);
  const handleMinus = () => removeFromCart(product.name);

  return (
    <div className="btn__cart">
      {quantity === 0 ? (
        <button onClick={handleAddCart} className="add__ToCart">
          <img src="./images/icon-add-to-cart.svg" alt="cart_icon" /> Add to
          Cart
        </button>
      ) : (
        <div className="btn__quantity">
          <button onClick={handleMinus} className="minus">
            {" "}
            <img
              src="./images/icon-decrement-quantity.svg"
              alt="icon_minus"
            />{" "}
          </button>
          <span className="quantity">{quantity}</span>
          <button onClick={handleAddCart} className="plus">
            {" "}
            <img
              src="./images/icon-increment-quantity.svg"
              alt="icon_plus"
            />{" "}
          </button>
        </div>
      )}
    </div>
  );
};
