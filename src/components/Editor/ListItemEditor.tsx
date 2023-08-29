import "../ChecklistItem/ListItem.css";
import { Input } from "../Inputs";
import { ListItemType } from "../../utils/types";

interface ListItemEditorProps {
  listItem: ListItemType;
  id?: string;
  onChange: (updatedListItem: ListItemType) => void;
}

export const ListItemEditor = ({
  listItem,
  onChange,
  id,
}: ListItemEditorProps) => {
  return (
    <>
      <div className="flex flex-row flex-grow flex-wrap checklist-item" id={id}>
        <span className="label">
          <Input
            type="text"
            id="label"
            name="Label"
            value={listItem.label}
            onChange={(e) => onChange({ ...listItem, label: e.target.value })}
            onBlur={() => {}}
          />
        </span>
        <span className="dots"></span>
        <span className="value">
          <Input
            type="text"
            id="value"
            name="Value"
            value={listItem.value}
            onChange={(e) => onChange({ ...listItem, value: e.target.value })}
            onBlur={() => {}}
          />
        </span>
      </div>
    </>
  );
};
