import { useEffect, useState } from "react";
import { ListItem } from "./ChecklistItem/ListItem";
import { ListItemType } from "../utils/types";
import { toTitleCase } from "../utils/utilFunctions";

type ListSectionProps = {
  title: string;
  isExpanded?: boolean;
  toggleExpanded: () => void;
  items: ListItemType[];
  index: number;
  onAllChecked: (allChecked: boolean) => void;
};

export const ListSection: React.FC<ListSectionProps> = ({
  title,
  items,
  isExpanded,
  toggleExpanded,
  onAllChecked,
}) => {
  // // //
  // States, variables, and context
  // // //
  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    items.map(() => false)
  );
  const checkedCount = checkedItems.filter((item) => item).length;
  const allChecked = checkedCount === items.length;

  // // //
  // Functions
  // // //
  const handleChecked = (isChecked: boolean, index: number) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = isChecked;
    setCheckedItems(newCheckedItems);
  };

  const checkAllItems = () => {
    if (allChecked) {
      setCheckedItems(items.map(() => false));
      return;
    }
    setCheckedItems(items.map(() => true));
  };

  useEffect(() => {
    if (allChecked) {
      setCheckedItems(items.map(() => true));
      onAllChecked(true);
      return;
    }
    setCheckedItems(items.map(() => false));
  }, [allChecked]);

  return (
    <div className="my-6">
      <div className="flex flex-row w-full justify-center">
        <button
          className={`flex flex-row tracking-wide text-2xl text-center pt-4 font-heading ${
            allChecked && "line-through"
          }`}
          onClick={toggleExpanded}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className={`my-auto me-[0.2rem] ${
              isExpanded && "rotate-90"
            } transition-all duration-300 ease-in-out`}
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
            />
          </svg>
          {toTitleCase(title)}
        </button>
        {!allChecked && (
          <button id="checkAll" onClick={checkAllItems}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="my-auto ms-2 fill-black w-5 h-5 stroke-black dark:stroke-gray-100"
              viewBox="0 -1 16 18"
            >
              <path
                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                fill="none"
                stroke-width="1"
              />
            </svg>
          </button>
        )}
        {allChecked && (
          <button id="uncheckAll" onClick={checkAllItems}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="my-auto ms-2 fill-green-500 w-5 h-5 stroke-green-500"
              viewBox="0 0 16 16"
            >
              <path
                d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"
                fill="none"
                stroke-width="1"
              />
              <path
                d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"
                fill="none"
                stroke-width="1"
              />
            </svg>
          </button>
        )}
      </div>
      {isExpanded && (
        <div className="mx-8 font-body backdrop-blur-sm">
          {items.map((item, index) => (
            <ListItem
              key={index}
              label={item.label}
              value={item.value}
              onChecked={(checked) => handleChecked(checked, index)}
              checked={checkedItems[index]}
            />
          ))}
        </div>
      )}
    </div>
  );
};
