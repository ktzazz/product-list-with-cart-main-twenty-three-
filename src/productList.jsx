import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Items } from "./ProductsCard";

export const ProductList = () => {
  // Le pedimos al contexto la lista que YA PASÓ por los filtros
  const { filteredProducts } = useContext(CartContext);

  return (
    <div className="product-grid">
      {/* Mapeamos sobre la lista filtrada, no sobre el JSON original */}
      {filteredProducts.map((producto) => (
        <Items key={producto.name} product={producto} />
      ))}

      {filteredProducts.length === 0 && (
        <h3 className="no__results">Oops! No results</h3>
      )}
    </div>
  );
};
