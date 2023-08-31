import { HeaderInput } from "../Inputs";
import { ListItemEditor } from "./ListItemEditor";
import { ListItemType } from "../../utils/types";
import { EditorButton, DeleteButton } from "../Buttons";
import { motion, AnimatePresence } from "framer-motion";
import { generateId } from "../../utils/utilFunctions";
import { useRef, useEffect } from "react";

interface SectionEditorProps {
  sectionTitle: string;
  id?: string;
  listItems: ListItemType[];
  onChange: (sectionTitle: string, updatedlistItems: ListItemType[]) => void;
}

export const SectionEditor = ({
  sectionTitle,
  listItems,
  id,
  onChange,
}: SectionEditorProps) => {
  return (
    <>
      <div id={id} className="group">
        <div className="my-4">
          <HeaderInput
            type="text"
            id="sectionTitle"
            name="Section Title"
            value={sectionTitle}
            textSize="text-xl"
            onChange={(e) => onChange(e.target.value, listItems)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                onChange(sectionTitle, [
                  ...listItems,
                  { label: "", value: "", subtext: "", id: generateId() },
                ]);
              }
            }}
          />
        </div>
        <div className="">
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
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        onChange(sectionTitle, [
                          ...listItems,
                          {
                            label: "",
                            value: "",
                            subtext: "",
                            id: generateId(),
                          },
                        ]);
                      }
                    }}
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
          <div className="group-focus-within:block hidden">
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
      </div>
    </>
  );
};
