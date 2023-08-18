import "./ListItem.css";
import { toTitleCase } from "../../utils/utilFunctions";

export type ListItemProps = {
  label: string;
  value: string;
  subtext?: string;
  onChecked?: (checked: boolean) => void;
  checked?: boolean;
};

export const ListItem = ({
  label,
  value,
  subtext,
  onChecked,
  checked = false,
}: ListItemProps) => {
  const handleChecked = () => {
    const newCheckedState = !checked;
    if (onChecked) onChecked(newCheckedState);
  };

  return (
    <button
      className={`flex flex-row flex-wrap checklist-item px-2 py-[0.2rem] even:bg-gray-200 dark:even:bg-gray-700  odd:bg-transparent rounded-lg w-full mx-10 text-lg ${
        checked && "line-through"
      }`}
      onClick={handleChecked}
    >
      <span className={`label ${checked && "line-through"}`}>
        {toTitleCase(label)}
      </span>
      <span className="dots"></span>
      <span className={`value ${checked && "line-through"}`}>
        {value.toUpperCase()}
      </span>
      {subtext && <span className="subtext">{subtext}</span>}
    </button>
  );
};
