import { ListSection } from "./ListSection";
import { ListDataType } from "../utils/types";
import { useContext } from "react";
import { AppContext } from "./ContextProvider";

export const Checklist = ({
  checklistData,
  title,
  hasImage,
}: {
  checklistData: ListDataType;
  title: string;
  hasImage?: boolean;
}) => {
  const { allExpanded } = useContext(AppContext)!;

  return (
    <>
      <div
        className={`${
          hasImage ? "dark:backdrop-invert" : "dark:backdrop-invert-0"
        }`}
      >
        <div className="pt-8">
          <h1 className="text-2xl tracking-wide font-bold text-center">
            {title}
          </h1>
        </div>
        <div className="flex flex-col mx-auto lg:min-w-[1/2]  justify-center lg:w-1/2 md:w-2/3 pb-12">
          {Object.keys(checklistData).map((aircraft) => (
            <div key={aircraft} className="space-y-4">
              {Object.keys(checklistData[aircraft]).map(
                (sectionTitle, index) => (
                  <ListSection
                    key={sectionTitle}
                    title={sectionTitle}
                    items={checklistData[aircraft][sectionTitle]}
                    allExpanded={allExpanded}
                    index={index}
                  />
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
