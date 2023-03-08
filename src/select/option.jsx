import { useContext } from "react";
import { SelectContext } from "./select";

export function Option({ value, children }) {
  const { selectedValue, select, selectedSymbol } = useContext(SelectContext);
  const selected = selectedValue === value;
  return (
    <li
      role="option"
      aria-selected={selected}
      className="option"
      onClick={() => select(value)}
    >
      {children}
      {selected && <span className="option-selected">{selectedSymbol}</span>}
    </li>
  );
}
