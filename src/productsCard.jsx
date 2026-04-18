import "./scss/productsCard.scss";
import { BtnCart } from "./addCart";

export const Items = ({ info }) => {
  return (
    <div className="product__grid">
      {info.map((product, index) => (
        <div className="product__card" key={`${product}_${index}`}>
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

          <h3>{product.name}</h3>
          <p>{product.category}</p>
          <p>{product.price}</p>
          <BtnCart product={product} />
        </div>
      ))}
    </div>
  );
};
