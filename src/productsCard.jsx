export const Items = ({ info }) => {
  return (
    <div className="product__grid">
      {info.map((product) => (
        <div className="product__card" key={product}>
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
        </div>
      ))}
    </div>
  );
};
