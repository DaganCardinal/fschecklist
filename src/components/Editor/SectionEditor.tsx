import { HeaderInput } from "../Inputs";
import { ListItemEditor } from "./ListItemEditor";
import { ListItemType } from "../../utils/types";
import { EditorButton, DeleteButton } from "../Buttons";
import { motion, AnimatePresence } from "framer-motion";
import { generateId } from "../../utils/utilFunctions";

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
        <AnimatePresence>
          {listItems.map((listItem, index) => (
            <motion.div
              layout
              key={listItem.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.1 } }}
              transition={{
                duration: 0.2,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                  type: "spring",
                  damping: 10,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
            >
              <div className="flex flex-row w-full group">
                <ListItemEditor
                  key={listItem.id}
                  listItem={listItem}
                  onChange={(updatedlistItem) =>
                    onChange(
                      sectionTitle,
                      listItems.map((li, i) =>
                        i === index ? updatedlistItem : li
                      )
                    )
                  }
                />
                <div className="right-0 translate-x-10 absolute">
                  <DeleteButton
                    onClick={() => {
                      const updatedListItems = listItems.filter(
                        (item) => item.id !== listItem.id
                      );
                      onChange(sectionTitle, updatedListItems);
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        <div className="">
          <EditorButton
            label="Add Line Item"
            onClick={() =>
              onChange(sectionTitle, [
                ...listItems,
                { label: "", value: "", subtext: "", id: generateId() },
              ])
            }
            borderType="border-dashed"
          />
        </div>
      </div>
    </>
  );
};
