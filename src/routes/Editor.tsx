import { ChecklistEditor } from "../components/Editor/ChecklistEditor";
import { ListSectionType } from "../utils/types";

export const Editor = () => {
  const checkValidity = (aircraft: string, listData: ListSectionType) => {
    for (const sectionId in listData) {
      const sectionData = listData[sectionId];
      const { sectionTitle, listItems } = sectionData;

      if (!sectionTitle) {
        return false;
      }

      if (!listItems.length) {
        return false;
      }

      for (const listItem of listItems) {
        if (!listItem.label || !listItem.value) {
          return false;
        }
      }
    }

    return true;
  };

  const handleSave = (aircraft: string, listData: ListSectionType) => {
    if (!checkValidity(aircraft, listData)) {
      console.log("Please ensure all fields are filled out");
      return;
    }

    const checklistJSON = {
      [aircraft]: listData,
    };
    console.log(checklistJSON);
  };

  return (
    <>
      <div className="flex flex-row justify-center text-center mt-6">
        <div className="rounded-lg p-2 bg-red-600 dark:bg-red-500 flex flex-col justify-center text-center text-gray-100">
          <h1 className="font-heading tracking-wide text-3xl font-semibold text-center mb-4">
            WARNING!
          </h1>
          <p className="font-body text-lg">
            This section is still under development, checklists are NOT SAVED at
            this time
          </p>
        </div>
      </div>
      <ChecklistEditor onSave={handleSave} />
    </>
  );
};
