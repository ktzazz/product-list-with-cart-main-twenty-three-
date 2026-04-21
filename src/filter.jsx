import { useContext } from "react";
import { CartContext } from "./CartContext";

export const Filter = () => {
  const { categories, setActiveCat, activeCat } = useContext(CartContext);

  return (
    <div className="filters">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActiveCat(cat)}
          className={activeCat === cat ? "active" : ""}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};
