import { ChecklistEditor } from "../components/Editor/ChecklistEditor";
import { ListSectionType } from "../utils/types";

export const Editor = () => {
  const handleSave = (aircraft: string, listData: ListSectionType) => {
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
