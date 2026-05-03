import "./scss/filter.scss";
import { useContext } from "react";
import { CartContext } from "./CartContext";

export const Filter = () => {
  const {
    uniqueCategories,
    uniqueIngredients,
    handleFilter,
    tempCats,
    tempIngs,
    applyFilters,
    clearFilters,
  } = useContext(CartContext);

  return (
    <div className="filter__container">
      <div className="categories__cont">
        <h3 className="filter__h3">Categorías</h3>
        {uniqueCategories.map((cat) => (
          <label key={cat}>
            <input
              type="checkbox"
              checked={tempCats.includes(cat)}
              onChange={() => handleFilter(cat, "cat")}
            />{" "}
            {cat}
          </label>
        ))}
      </div>

      <div className="ingredients__cont">
        <h3 className="filter__h3">Ingredientes</h3>
        {uniqueIngredients.map((ing) => (
          <label key={ing}>
            <input
              type="checkbox"
              checked={tempIngs.includes(ing)}
              onChange={() => handleFilter(ing, "ing")}
            />{" "}
            {ing}
          </label>
        ))}
      </div>

      <div className="filter-actions">
        <button onClick={applyFilters} className="btn-apply">
          Apply
        </button>
        <button onClick={clearFilters} className="btn-clear">
          Clean All
        </button>
      </div>
    </div>
  );
};
