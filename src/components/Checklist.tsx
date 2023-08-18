import { ListSection } from "./ListSection";
import { ListDataType } from "../utils/types";
import { useContext } from "react";
import { AppContext } from "./ContextProvider";

export const Checklist = ({
  checklistData,
  title,
}: {
  checklistData: ListDataType;
  title: string;
}) => {
  const { allExpanded } = useContext(AppContext)!;

  return (
    <>
      <div>
        <h1 className="text-2xl tracking-wide font-bold text-center">
          {title}
        </h1>
      </div>
      <div className="flex flex-col mx-auto justify-center lg:w-1/2 md:w-2/3">
        {Object.keys(checklistData).map((aircraft) => (
          <div key={aircraft} className="space-y-4">
            {Object.keys(checklistData[aircraft]).map((sectionTitle, index) => (
              <ListSection
                key={sectionTitle}
                title={sectionTitle}
                items={checklistData[aircraft][sectionTitle]}
                allExpanded={allExpanded}
                index={index}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};
