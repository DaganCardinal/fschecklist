import { ListSection } from "./ListSection";
import { ListDataType } from "../utils/types";
import { ToggleSwitch } from "flowbite-react";
import { useState, useEffect } from "react";

export const Checklist = ({
  checklistData,
  title,
}: {
  checklistData: ListDataType;
  title: string;
}) => {
  const [allExpanded, setAllExpanded] = useState(false);
  const allExpandedFromLocalStorage = localStorage.getItem("allExpanded");

  useEffect(() => {
    if (allExpandedFromLocalStorage) {
      setAllExpanded(allExpandedFromLocalStorage === "true");
    }
  }, []);

  const handleAllExpanded = (isChecked: boolean) => {
    setAllExpanded(isChecked);
    localStorage.setItem("allExpanded", isChecked.toString());
  };

  return (
    <>
      <div className="flex flex-row mx-10 mt-8">
        <ToggleSwitch
          label="Expand All"
          onChange={(e) => handleAllExpanded(e)}
          checked={allExpanded}
        />
      </div>
      <div>
        <h1 className="text-2xl tracking-wide font-bold text-center">
          {title}
        </h1>
      </div>
      <div className="flex flex-col mx-auto justify-center w-1/2">
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
