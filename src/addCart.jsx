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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="2"
              fill=""
              viewBox="0 0 10 2"
              alt="minus"
            >
              <path d="M0 .375h10v1.25H0V.375Z" />
            </svg>{" "}
          </button>
          <span className="quantity">{quantity}</span>
          <button onClick={handleAddCart} className="plus">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill=""
              viewBox="0 0 10 10"
              alt="plus"
            >
              <path d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z" />
            </svg>{" "}
          </button>
        </div>
      )}
    </div>
  );
};
