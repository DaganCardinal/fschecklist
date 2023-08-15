import { ChecklistPage } from "../pages/ChecklistPage";
import { ListDataType } from "../utils/types";
import checklistJSON from "../checklists/normal/B73X.json";

const checklistData = checklistJSON as ListDataType;
export const B73XNG = () => {
  return (
    <>
      <ChecklistPage
        checklistData={checklistData}
        pageTitle="Boeing 737 NG | FSChecklist"
        aircraftName="Boeing 737-X NG"
      />
    </>
  );
};
