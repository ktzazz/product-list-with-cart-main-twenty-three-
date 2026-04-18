import { useContext } from "react";
import { CartContext } from "./CartContext";

export const Cart = () => {
  const { cart, removeItem } = useContext(CartContext);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const orderTotal = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <div className="cart__container">
      <h2 className="cart__title">Your Cart ({totalItems})</h2>

      {cart.length === 0 ? (
        <div className="cart__empty">
          <img src="/images/illustration-empty-cart.svg" alt="cart_empty" />
          <h3>Your added items will appear here</h3>
        </div>
      ) : (
        <div className="cart__items">
          {cart.map((item, index) => (
            <div key={`${item.name}_${index}`} className="cart__item">
              <h4>{item.name}</h4>
              <div className="item__num">
                <span className="item__qty">{item.quantity}x</span>
                <span className="item__price">
                  @{""}
                  {item.price}
                </span>
                <span className="item__total">
                  {item.price * item.quantity}
                </span>
              </div>
              <button onClick={() => removeItem(item.name)}>
                <img src="/images/icon-remove-item.svg" alt="icon_delete" />
              </button>
            </div>
          ))}
          <div className="cart__total">
            <span className="total__title">Order Total </span>
            <span className="total__price">${orderTotal.toFixed(2)}</span>
          </div>

          <div className="cart__note">
            <img
              src="/images/icon-carbon-neutral.svg"
              alt="icon_carbon_neutral"
            />
            <span className="note">This is a </span>
            <span className="note__bold"> carbon-neutral </span>
            <span className="note">delivery</span>
          </div>

          <button className="btn__checkout">Confirm Order</button>
        </div>
      )}
    </div>
  );
};
