import { useEffect, useState } from "react";
import { ListItem } from "./ChecklistItem/ListItem";
import { ListItemType } from "../utils/types";
import { toTitleCase } from "../utils/utilFunctions";

type ListSectionProps = {
  title: string;
  allExpanded?: boolean;
  items: ListItemType[];
};

export const ListSection: React.FC<ListSectionProps> = ({
  title,
  items,
  allExpanded,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    items.map(() => false)
  );

  const handleChecked = (isChecked: boolean, index: number) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = isChecked;
    setCheckedItems(newCheckedItems);
  };

  useEffect(() => {
    setIsExpanded(allExpanded ?? false);
  }, [allExpanded]);

  const checkedCount = checkedItems.filter((item) => item).length;
  const allChecked = checkedCount === items.length;

  return (
    <div className="my-6">
      <div className="flex flex-row w-full justify-center">
        <button
          className={`font-semibold tracking-wider text-xl text-center pt-4 ${
            allChecked && "line-through"
          }`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {toTitleCase(title)}
        </button>
      </div>
      {isExpanded && (
        <div className="mx-8">
          {items.map((item, index) => (
            <ListItem
              key={index}
              label={item.label}
              value={item.value}
              onChecked={(checked) => handleChecked(checked, index)}
              defaultChecked={checkedItems[index]}
            />
          ))}
        </div>
      )}
    </div>
  );
};
