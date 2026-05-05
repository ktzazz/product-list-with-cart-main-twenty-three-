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
        <h3 className="filter__h3">Categories</h3>
        {uniqueCategories.map((cat) => (
          /*  <label key={cat}>
            <input
              type="checkbox"
              checked={tempCats.includes(cat)}
              onChange={() => handleFilter(cat, "cat")}
            />{" "}
            {cat}
          </label> */
          <button
            key={cat}
            onClick={() => handleFilter(cat, "cat")(tempCats.includes(cat))}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="ingredients__cont">
        <h3 className="filter__h3">Ingredients</h3>
        {uniqueIngredients.map((ing) => (
          /*    <label key={ing}>
            <input
              type="checkbox"
              checked={tempIngs.includes(ing)}
              onChange={() => handleFilter(ing, "ing")}
            />{" "}
            {ing}
          </label> */
          <button
            key={ing}
            onClick={() => handleFilter(ing, "ing")(tempIngs.includes(ing))}
          >
            {ing}
          </button>
        ))}
      </div>

      <div className="filter-actions">
        <button onClick={applyFilters} className="btn-apply">
          Apply Filters
        </button>
        <button onClick={clearFilters} className="btn-clear">
          Clear All
        </button>
      </div>
    </div>
  );
};
