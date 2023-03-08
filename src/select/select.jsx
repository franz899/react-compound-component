import { createContext, useState } from "react";
import "./select.css";

export const SelectContext = createContext(null);
export function Select({ children, defaultText, selectedSymbol }) {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedValue, setSelectedValue] = useState();
  const select = (value) => {
    setSelectedValue(value);
    toggleShowOptions();
  };

  function toggleShowOptions() {
    setShowOptions(!showOptions);
  }

  return (
    <SelectContext.Provider value={{ selectedValue, select, selectedSymbol }}>
      <button className="select-button" onClick={toggleShowOptions}>
        {selectedValue || defaultText}
      </button>
      {showOptions && <ul className="select">{children}</ul>}
    </SelectContext.Provider>
  );
}
