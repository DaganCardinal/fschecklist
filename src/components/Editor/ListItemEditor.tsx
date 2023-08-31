import "../ChecklistItem/ListItem.css";
import { Input } from "../Inputs";
import { ListItemType } from "../../utils/types";
import { forwardRef } from "react";

interface ListItemEditorProps {
  listItem: ListItemType;
  id?: string;
  onChange: (updatedListItem: ListItemType) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export const ListItemEditor = forwardRef<HTMLInputElement, ListItemEditorProps>(
  ({ listItem, onChange, id, onKeyPress }, ref) => {
    return (
      <>
        <div
          className="flex flex-row flex-grow flex-wrap checklist-item"
          id={id}
        >
          <span className="label">
            <Input
              type="text"
              id="label"
              name="Label"
              value={listItem.label}
              onChange={(e) => onChange({ ...listItem, label: e.target.value })}
              onBlur={() => {}}
              ref={ref}
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
              onKeyPress={onKeyPress}
            />
          </span>
        </div>
      </>
    );
  }
);
