import { useState } from "react";
import "./ListItem.css";
import { toTitleCase } from "../../utils/utilFunctions";

export type ListItemProps = {
  label: string;
  value: string;
  subtext?: string;
  onChecked?: (checked: boolean) => void;
};

export const ListItem = ({
  label,
  value,
  subtext,
  onChecked,
}: ListItemProps) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChecked = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    if (onChecked) onChecked(newCheckedState);
  };

  return (
    <button
      className="checklist-item px-2 py-[0.2rem]  even:bg-gray-200 odd:bg-transparent rounded-lg w-full mx-10"
      onClick={handleChecked}
    >
      <span className={`label ${isChecked && "line-through"}`}>
        {toTitleCase(label)}
      </span>
      <span className="dots"></span>
      <span className={`value ${isChecked && "line-through"}`}>
        {value.toUpperCase()}
      </span>
      {subtext && <span className="subtext">{subtext}</span>}
    </button>
  );
};
