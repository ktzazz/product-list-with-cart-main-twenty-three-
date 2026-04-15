import { useState } from "react";

export const BtnCart = () => {
  const [quantity, setQuantity] = useState(0);

  const handleAddCart = () => {
    setQuantity(1);
  };
  const handlePlus = () => {
    setQuantity(quantity + 1);
  };
  const handleMinus = () => {
    setQuantity(quantity - 1);
  };

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
            <img src="./images/icon-decrement-quantity.svg" />{" "}
          </button>
          <span className="quantity">{quantity}</span>
          <button onClick={handlePlus} className="plus">
            {" "}
            <img src="./images/icon-increment-quantity.svg" />{" "}
          </button>
        </div>
      )}
    </div>
  );
};
