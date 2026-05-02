import "./scss/btnFilter.scss";
import { useContext } from "react";
import { CartContext } from "./CartContext";

import { FilterIcon } from "./filterIcon";

export const BtnFilter = () => {
  const { buttonFilter, filterDefault } = useContext(CartContext);

  return (
    <>
      {!buttonFilter ? (
        <button className="btn__off" onClick={() => filterDefault()}>
          <FilterIcon color="#C73B0F" />
        </button>
      ) : (
        <>
          <button className="btn__on" onClick={() => filterDefault()}>
            <FilterIcon color="#694e45" />
          </button>
        </>
      )}
    </>
  );
};
