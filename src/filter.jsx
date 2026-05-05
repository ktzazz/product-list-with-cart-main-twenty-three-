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
    appliedCats,
    appliedIngs,
  } = useContext(CartContext);

  return (
    <div className="filter__container">
      <div className="categories__cont">
        <h3 className="filter__h3">Categories</h3>
        <div className="filter__op">
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
              className={tempCats.includes(cat) ? "active" : ""}
              onClick={() => {
                handleFilter(cat, "cat");
                tempCats.includes(cat);
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="ingredients__cont">
        <h3 className="filter__h3">Ingredients</h3>
        <div className="filter__op">
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
              className={tempIngs.includes(ing) ? "active" : ""}
              onClick={() => {
                handleFilter(ing, "ing");
                tempIngs.includes(ing);
              }}
            >
              {ing}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-actions">
        <button onClick={applyFilters} className="btn-apply">
          Apply Filters
        </button>
        <button
          onClick={clearFilters}
          className={
            appliedCats.length === 0 && appliedIngs.length === 0
              ? "dis"
              : "btn-clear"
          }
        >
          Clear All
        </button>
      </div>
    </div>
  );
};
