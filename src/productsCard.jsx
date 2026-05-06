import "./scss/productsCard.scss";
import { BtnCart } from "./addCart";
import { useContext } from "react";
import { CartContext } from "./CartContext";

export const Items = ({ product }) => {
  const { cart } = useContext(CartContext);

  const itemInCart = cart.find((item) => item.name === product.name);
  const quantity = itemInCart ? itemInCart.quantity : 0;

  return (
    <div className="product__card">
      <div className={quantity === 0 ? "pic__cont" : "after"}>
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet={product.image.desktop}
            alt={product.name}
          />
          <source
            media="(min-width: 768px)"
            srcSet={product.image.tablet}
            alt={product.name}
          />
          <img src={product.image.mobile} alt={product.name} />
        </picture>
        <div className="btn__addTo">
          <BtnCart product={product} />
        </div>
      </div>
      <div className="txt__productCard">
        <p className="category">{product.category}</p>
        <h3>{product.name}</h3>
        <p className="price">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};
