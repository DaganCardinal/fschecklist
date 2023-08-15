import { ListSection } from "./ListSection";
import { ListDataType } from "../utils/types";
import { ToggleSwitch } from "flowbite-react";
import { useState } from "react";

export const Checklist = ({
  checklistData,
}: {
  checklistData: ListDataType;
}) => {
  const [allExpanded, setAllExpanded] = useState(false);

  const handleAllExpanded = (isChecked: boolean) => {
    setAllExpanded(isChecked);
  };

  return (
    <>
      <div>
        <ToggleSwitch
          label="Expand All"
          onChange={() => handleAllExpanded}
          checked
        />
      </div>
      <div className="grid grid-flow-row grid-cols-2">
        {Object.keys(checklistData).map((aircraft) => (
          <div key={aircraft} className="space-y-4">
            {Object.keys(checklistData[aircraft]).map((sectionTitle) => (
              <ListSection
                key={sectionTitle}
                title={sectionTitle}
                items={checklistData[aircraft][sectionTitle]}
                allExpanded={allExpanded}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};
