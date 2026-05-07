import "./scss/confirmation.scss";
import { useEffect } from "react";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";

export const Confirmation = ({ total }) => {
  const { cart, clearCart } = useContext(CartContext);

  const [btnConfirm, setBtnConfirm] = useState(false);

  useEffect(() => {
    if (btnConfirm) {
      document.body.classList.add("no_scroll");
    } else {
      document.body.classList.remove("no_scroll");
    }

    // Por si el componente se desmonta de golpe
    return () => document.body.classList.remove("no_scroll");
  }, [btnConfirm]); // Se ejecuta cada vez que btnConfirm cambie

  return (
    <div className="btn__confirm">
      {!btnConfirm ? (
        <button className="cnfrm__btn" onClick={() => setBtnConfirm(true)}>
          Confirm Order
        </button>
      ) : (
        <>
          <button className="cnfrm__btn">Confirm Order</button>
          <div className="overlay"></div>
          <div className="confirm__container">
            <img
              className="confirm__img"
              src="/images/icon-order-confirmed.svg"
              alt="order_confirmed"
            />
            <h2 className="confirm__title">Order Confirmed</h2>
            <p className="confirm__txt">We hope you enjoy your food!</p>
            <div className="confirm__products">
              {cart.map((item, index) => (
                <div className="confirm__div" key={`${item.name}-${index}`}>
                  <img
                    className="map__img"
                    src={item.image.thumbnail}
                    alt={item.name}
                  />

                  <div className="confirm__items">
                    <h4 className="name__elipsis">{item.name}</h4>
                    <div className="span__order">
                      <span className="confirm__qty">{item.quantity}x</span>
                      <span className="confirm__price">
                        <span className="at"> @ </span>
                        {""} ${item.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <p className="confirm__total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              ))}
              <div className="order__pay">
                <span className="pay__txt">Order Total</span>
                <span className="pay__total">${total.toFixed(2)}</span>
              </div>
            </div>
            <button
              className="cnfrm__btn"
              onClick={() => {
                setBtnConfirm(false);
                clearCart();
              }}
            >
              Start New Order
            </button>
          </div>
        </>
      )}
    </div>
  );
};
