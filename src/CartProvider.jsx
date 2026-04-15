import { useState } from "react";
import { CartContext } from "./CartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    //el parámetro dentro de la funcion addToCart se llama product
    setCart((prevItem) => {
      //el elemento dentro de la funcion setCart se llama prevItem (se hace otra funcion para que react detecte que tiene que actualizar la pantalla)
      const exists = prevItem.find((item) => item.name === product.name); //exists ejecuta que se busque un item con el dato name, luego se compara con el name dentro del elemento product para ver que sean iguales
      if (exists) {
        // si son iguales hace un mapeo de cada elemento, en donde el elemento item se modifica agregando un quantity + 1
        return prevItem.map(
          (
            item, //se hace el mapeo porque la lista de name se tiene que hacer de nuevo para hacer la modificación
          ) =>
            item.name === product.name
              ? { ...item, quantity: item.quantity + 1 }
              : item, //si no son iguales se mantiene sin modificar el elemento item
        );
      }
      return [...prevItem, { ...product, quantity: 1 }]; // si !exists devuelve el elemento prevItem con el elemento product teniendo quantity 1
    });
  };

  const removeFromCart = (name) => {
    setCart((prev) => {
      const item = prev.find((i) => i.name === name);
      if (!item) return prev;
      if (item.quantity === 1) return prev.filter((i) => i.name !== name);
      return prev.map((i) =>
        i.name === name ? { ...i, quantity: i.quantity - 1 } : i,
      );
    });
  };

  const removeItem = (name) => {
    setCart((prev) => prev.filter((item) => item.name !== name));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
