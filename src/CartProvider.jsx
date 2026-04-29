import { useState } from "react";
import { CartContext } from "./CartContext";
import data from "/data.json";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // estados temporales para lo que el usuario toca en el momento (Checkboxes)
  const [tempCats, setTempCats] = useState([]);
  const [tempIngs, setTempIngs] = useState([]);

  // Mantenemos los estados iniciales como arrays vacíos [] para representar la ausencia de filtros.
  // No usamos la palabra 'All' en el estado porque 'All' es una etiqueta visual para el usuario, pero para el código es más eficiente y seguro trabajar
  // con la longitud del array (length === 0) para decidir si mostrar todos los productos o aplicar las restricciones.
  const [appliedCats, setAppliedCats] = useState([]);
  const [appliedIngs, setAppliedIngs] = useState([]);

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
              : item, //si no son iguales se mantiene sin modificar el elemento item, se le agrega (crea) la propiedad quantity
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
      if (item === 0) return setCart([]);
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

  const clearCart = () => {
    setCart([]);
    window.scrollTo({ top: 0, behavior: "smooth" });
    clearFilters();
  };

  // Usamos map para datos simples y flatMap para datos que pueden ser listas.
  // La combinación de flatMap con la validación Array.isArray nos permite normalizar el JSON, asegurando que todos los ingredientes se traten como una sola lista plana,
  // mientras que Set se encarga de eliminar los nombres duplicados.
  // el spread operator (...) lo que hace es transformar el elemento del Set() a un array.
  // Esto es para los checkboxes
  const uniqueCategories = [...new Set(data.map((item) => item.category))];
  const uniqueIngredients = [
    ...new Set(
      data.flatMap((item) =>
        Array.isArray(item.ingredient) ? item.ingredient : [item.ingredient],
      ),
    ),
  ];

  // Filtramos la data original creando una constante productIngs que normaliza el campo de ingredientes (asegurando que siempre sea un Array).
  // Luego, aplicamos una lógica condicional: 1. si no hay filtros, mostramos todo; de lo contrario, mostramos los productos que coincidan con las categorías
  // seleccionadas O que contengan alguno de los ingredientes marcados usando el método .some().
  const filteredProducts = data.filter((product) => {
    const productIngs = Array.isArray(product.ingredient)
      ? product.ingredient
      : [product.ingredient];

    if (appliedCats.length === 0 && appliedIngs.length === 0) return true;

    const matchesCat = appliedCats.includes(product.category);

    const matchesIng = productIngs.some((ing) => appliedIngs.includes(ing));

    // Si cumple cualquiera de las dos, se muestra.
    return matchesCat || matchesIng;
  });

  // Usamos estados temporales (tempCats) y estados aplicados (appliedCats) para crear un flujo de confirmación.
  // Los estados temporales almacenan las selecciones del usuario en el menú sin afectar la interfaz principal.
  // Solo cuando se ejecuta applyFilters(), los cambios se vuelven 'oficiales', optimizando el rendimiento y mejorando la experiencia de usuario
  //  al evitar filtrados accidentales o constantes. (evita que la pagina recargue cada vez que se selecciona o elimina un filtro sin presionar "aplicar")
  const applyFilters = () => {
    setAppliedCats(tempCats);
    setAppliedIngs(tempIngs);
  };

  // limpia lo seleccionado y aplicado
  const clearFilters = () => {
    setTempCats([]);
    setTempIngs([]);
    setAppliedCats([]);
    setAppliedIngs([]);
  };

  // La función handleFilter es una función polimórfica que gestiona tanto categorías como ingredientes
  // mediante un parámetro type, usamos "cat", este parametro se creó en el mapeo del clic en el componente filter .
  // Utiliza una lógica tipo Toggle: si el elemento ya existe en el estado temporal, lo elimina usando .filter() (desmarcar);
  // si no existe, lo agrega usando el spread operator (marcar).
  // Esto permite que una sola función controle todos los checkboxes del menú.
  const handleFilter = (item, type) => {
    const isCat = type === "cat";
    const list = isCat ? tempCats : tempIngs;
    const setter = isCat ? setTempCats : setTempIngs;

    list.includes(item)
      ? setter(list.filter((i) => i !== item)) // Ya estaba marcado entonces se desmarca
      : setter([...list, item]); // No estaba marcado entonces se marca
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        removeItem,
        clearCart,
        uniqueCategories,
        uniqueIngredients,
        handleFilter,
        filteredProducts,
        tempCats,
        tempIngs,
        applyFilters,
        clearFilters,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
