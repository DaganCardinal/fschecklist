import { useState } from "react";
import { ListSectionType } from "../../utils/types";
import { SectionEditor } from "./SectionEditor";
import { HeaderInput } from "../Inputs";
import { EditorButton, SaveButton } from "../Buttons";

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
      {Object.keys(listData).map((sectionTitle, index) => (
        <SectionEditor
          key={index}
          sectionTitle={sectionTitle}
          listItems={listData[sectionTitle]}
          onChange={(updatedTitle, updatedLineItems) => {
            const updatedListData = { ...listData };
            delete updatedListData[sectionTitle];
            updatedListData[updatedTitle] = updatedLineItems;
            setListData(updatedListData);
          }}
        />
      ))}
      <EditorButton
        label="Add Section"
        onClick={() =>
          setListData({
            ...listData,
            [``]: [],
          })
        }
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
