import { useContext, useState } from "react";
import { CartContext } from "./CartContext";

export const Confirmation = ({ total }) => {
  const { cart, clearCart } = useContext(CartContext);

  const [btnConfirm, setBtnConfirm] = useState(false);

  return (
    <div className="btn__confirm">
      {!btnConfirm ? (
        <button onClick={() => setBtnConfirm(true)}>Confirm</button>
      ) : (
        <div className="confirm__container">
          <img src="/images/icon-order-confirmed.svg" alt="order_confirmed" />
          <h2 className="confirm__title">Order Confirmed</h2>
          <p className="confirm__txt">We hope you enjoy your food!</p>
          <div className="confirm__products">
            {cart.map((item, index) => (
              <div className="confirm__div" key={`${item.name}-${index}`}>
                <img src={item.image.thumbnail} alt={item.name} />

                <div className="confirm__items">
                  <h4>{item.name}</h4>
                  <span className="confirm__qty">{item.quantity}x</span>
                  <span className="confirm__price">
                    @{""}
                    {item.price}
                  </span>
                </div>
                <p className="confirm__total">{item.price * item.quantity}</p>
              </div>
            ))}
            <div className="order__pay">
              <span className="pay__txt">Order Total</span>
              <span className="pay__total">${total}</span>
            </div>
          </div>
          <button
            onClick={() => {
              setBtnConfirm(false);
              clearCart();
            }}
          >
            Start New Order
          </button>
        </div>
      )}
    </div>
  );
};
