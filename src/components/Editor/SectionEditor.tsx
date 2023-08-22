import { HeaderInput } from "../Inputs";
import { ListItemEditor } from "./ListItemEditor";
import { ListItemType } from "../../utils/types";
import { EditorButton } from "../Buttons";

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
      <div className="my-4">
        <HeaderInput
          type="text"
          id="sectionTitle"
          name="Section Title"
          value={sectionTitle}
          textSize="text-xl"
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
        <EditorButton
          label="Add Line Item"
          onClick={() =>
            onChange(sectionTitle, [
              ...listItems,
              { label: "", value: "", subtext: "" },
            ])
          }
          borderType="border-dashed"
        />
      </div>
    </>
  );
};
