import { useState } from "react";
import { ListSectionType } from "../../utils/types";
import { SectionEditor } from "./SectionEditor";
import { HeaderInput } from "../Inputs";
import { EditorButton, SaveButton, DeleteButton } from "../Buttons";
import { generateId } from "../../utils/utilFunctions";
import { motion, AnimatePresence } from "framer-motion";

interface ChecklistBuilderProps {
  initialListData?: ListSectionType;
  onSave?: (aircraft: string, listData: ListSectionType) => void;
}

export const ChecklistEditor = ({
  initialListData = {},
  onSave,
}: ChecklistBuilderProps) => {
  const [aircraft, setAircraft] = useState<string>("");
  const [listData, setListData] = useState<ListSectionType>(initialListData);

  return (
    <div className="flex flex-col justify-cetner mx-auto w-1/2 relative mt-8">
      <div className="relative mb-8">
        <HeaderInput
          type="text"
          id="aircraftName"
          name="Aircraft Name"
          value={aircraft}
          textSize="text-2xl"
          onChange={(e) => setAircraft(e.target.value)}
        />
      </div>
      <AnimatePresence>
        {Object.entries(listData).map(([sectionId, sectionData], index) => (
          <motion.div
            layout
            key={sectionId}
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
            <div className="flex flex-col relative">
              <SectionEditor
                key={sectionId}
                id={sectionId}
                sectionTitle={sectionData.sectionTitle}
                listItems={sectionData.listItems}
                onChange={(updatedTitle, updatedLineItems) => {
                  setListData({
                    ...listData,
                    [sectionId]: {
                      sectionTitle: updatedTitle,
                      listItems: updatedLineItems,
                    },
                  });
                }}
              />
              <div className="absolute right-0 top-0 translate-x-10">
                <DeleteButton
                  onClick={() => {
                    const updatedListData = { ...listData };
                    delete updatedListData[sectionId];
                    setListData(updatedListData);
                  }}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
      <EditorButton
        label="Add Section"
        onClick={() => {
          setListData({
            ...listData,
            [generateId()]: {
              sectionTitle: "",
              listItems: [],
            },
          });
        }}
        borderType="border-solid"
      />

      {onSave && (
        <SaveButton
          onClick={() => onSave(aircraft, listData)}
          label="Save Checklist"
        />
      )}
    </div>
  );
};
