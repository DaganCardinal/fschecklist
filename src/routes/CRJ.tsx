import { ChecklistPage } from "../pages/ChecklistPage";
import { ListDataType } from "../utils/types";
import checklistJSON from "../checklists/normal/CRJX.json";

const checklistData = checklistJSON as ListDataType;
export const CRJX = () => {
  return (
    <>
      <ChecklistPage
        checklistData={checklistData}
        pageTitle="CRJ | FSChecklist"
        aircraftName="CRJ"
      />
    </>
  );
};
