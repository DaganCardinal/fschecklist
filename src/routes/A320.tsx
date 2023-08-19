import { ChecklistPage } from "../pages/ChecklistPage";
import { ListDataType } from "../utils/types";
import checklistJSON from "../checklists/normal/A320.json";

const checklistData = checklistJSON as ListDataType;
export const A320 = () => {
  return (
    <>
      <ChecklistPage
        checklistData={checklistData}
        pageTitle="Airbus A320 | FSChecklist"
        aircraftName="Airbus A320"
        image="bg-airbus320"
      />
    </>
  );
};
