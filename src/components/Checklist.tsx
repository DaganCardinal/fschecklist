import { ListSection } from "./ListSection";
import { ListDataType } from "../utils/types";
import { useContext, useState, useEffect } from "react";
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
  // // //
  // Context, variables, states
  // // //
  const { allExpanded, setAllExpanded } = useContext(AppContext)!;

  const totalSections = Object.values(checklistData).reduce(
    (total, aircraft) => total + Object.keys(aircraft).length,
    0
  );

  const [expandedSections, setExpandedSections] = useState(() =>
    new Array(totalSections).fill(false)
  );

  // // //
  // Functions
  // // //
  useEffect(() => {
    if (allExpanded) {
      setExpandedSections(new Array(totalSections).fill(true));
      setAllExpanded(true);
    } else {
      setExpandedSections(
        new Array(totalSections).fill(false).map((_, index) => index === 0)
      );
      setAllExpanded(false);
    }
  }, [allExpanded, setAllExpanded]);

  const toggleExpanded = (index: number) => {
    setExpandedSections((prev) => {
      const newExpanded = [...prev];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  const handleAllChecked = (allChecked: boolean, sectionIndex: number) => {
    if (allChecked) {
      setExpandedSections((prev) => {
        const newExpanded = [...prev];
        newExpanded[sectionIndex] = false;
        if (sectionIndex < newExpanded.length - 1) {
          newExpanded[sectionIndex + 1] = true;
        }
        return newExpanded;
      });
    }
  };

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
          {Object.keys(checklistData).map((aircraft, aircraftIndex) => (
            <div key={aircraft} className="space-y-4">
              {Object.keys(checklistData[aircraft]).map(
                (sectionTitle, sectionIndex) => (
                  <ListSection
                    key={sectionTitle}
                    title={sectionTitle}
                    items={checklistData[aircraft][sectionTitle]}
                    isExpanded={
                      expandedSections[
                        aircraftIndex *
                          Object.keys(checklistData[aircraft]).length +
                          sectionIndex
                      ]
                    }
                    index={sectionIndex}
                    toggleExpanded={() =>
                      toggleExpanded(
                        aircraftIndex *
                          Object.keys(checklistData[aircraft]).length +
                          sectionIndex
                      )
                    }
                    onAllChecked={(allChecked) =>
                      handleAllChecked(allChecked, sectionIndex)
                    }
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
