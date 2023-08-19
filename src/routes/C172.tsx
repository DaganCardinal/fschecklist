import { ChecklistPage } from "../pages/ChecklistPage";
import { ListDataType } from "../utils/types";
import checklistJSON from "../checklists/normal/C172.json";

const checklistData = checklistJSON as ListDataType;
export const C172 = () => {
  return (
    <>
      <ChecklistPage
        checklistData={checklistData}
        pageTitle="Cessna 172 | FSChecklist"
        aircraftName="Cessna 172"
        image="bg-cessna172"
      />
    </>
  );
};
