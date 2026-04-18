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
          //no lleva key porque solo esta transformando datos en una función no esta creando html/jsx
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
    //funcion nueva con el parametro name
    setCart((prev) => {
      //crea otra funcion dentro porque va a modificar los valores originales
      const item = prev.find((article) => article.name === name); //item ejecuta que se busque un article con el dato name, luego se compara con el name dentro del parametro name para ver que sean iguales
      if (!item) return prev; //si !item devuelve el elemento prev tal cual o sea la lista sin modificaciones.   ¿Existe en el carrito? Si no, ignora el clic.
      if (item.quantity === 1)
        return prev.filter((article) => article.name !== name); // El .filter() dice: "Déjame pasar a todos los artículos cuyo nombre sea DIFERENTE (!==) al que quiero quitar".   ¿Solo queda 1? Usa .filter() para sacarlo de la bolsa definitivamente.
      return prev.map(
        (
          article, // else... si item, a la quantity del elemento article se le va a restar 1, si no regresa el elemento article tal cual.   ¿Hay muchos? Usa .map() y el spread operator (...) para restarle uno a la copia.
        ) =>
          article.name === name
            ? { ...article, quantity: article.quantity - 1 }
            : article,
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
