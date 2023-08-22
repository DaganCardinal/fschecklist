import { Input } from "../Inputs";
import { ListItemEditor } from "./ListItemEditor";
import { ListItemType } from "../../utils/types";

interface SectionEditorProps {
  sectionTitle: string;
  listItems: ListItemType[];
  onChange: (sectionTitle: string, updatedlistItems: ListItemType[]) => void;
}

export const SectionEditor = ({
  sectionTitle,
  listItems,
  onChange,
}: SectionEditorProps) => {
  return (
    <>
      <div>
        <Input
          type="text"
          id="sectionTitle"
          name="Section Title"
          value={sectionTitle}
          onChange={(e) => onChange(e.target.value, listItems)}
        />
      </div>
      <div>
        {listItems.map((listItem, index) => (
          <ListItemEditor
            key={index}
            listItem={listItem}
            onChange={(updatedlistItem) =>
              onChange(
                sectionTitle,
                listItems.map((li, i) => (i === index ? updatedlistItem : li))
              )
            }
          />
        ))}
        <button
          className="flex flex-row border-2 border-gray-200 border-dashed rounded-md p-2 my-4 w-full text-center justify-center"
          onClick={() =>
            onChange(sectionTitle, [
              ...listItems,
              { label: "", value: "", subtext: "" },
            ])
          }
        >
          Add Line Item
        </button>
      </div>
    </>
  );
};
