import { useState } from "react";
import { ListSectionType } from "../../utils/types";
import { SectionEditor } from "./SectionEditor";
import { Input } from "../Inputs";

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
        <Input
          type="text"
          id="aircraftName"
          name="Aircraft"
          value={aircraft}
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
      <button
        className="flex flex-row border-2 border-gray-200 rounded-md p-2 my-4 w-full text-center justify-center"
        onClick={() =>
          setListData({
            ...listData,
            [`${Object.keys(listData).length + 1} New Section`]: [],
          })
        }
      >
        Add Section
      </button>
      {onSave && (
        <button onClick={() => onSave(aircraft, listData)}>
          Save Checklist
        </button>
      )}
    </div>
  );
};
