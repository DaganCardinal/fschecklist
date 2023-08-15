import { ChecklistPage } from "../pages/ChecklistPage";
import { ListDataType } from "../utils/types";
import checklistJSON from "../checklists/normal/C208B.json";

const checklistData = checklistJSON as ListDataType;
export const C208B = () => {
  return (
    <>
      <ChecklistPage
        checklistData={checklistData}
        pageTitle="Cessna 208B | FSChecklist"
        aircraftName="Cessna 208B Grand Caravan"
      />
    </>
  );
};
