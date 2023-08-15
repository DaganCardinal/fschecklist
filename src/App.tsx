import { ChecklistPage } from "./pages/ChecklistPage";
import { ListDataType } from "./utils/types";
import checklistJSON from "../src/checklists/normal/C208B.json";

const checklistData = checklistJSON as ListDataType;
function App() {
  return <ChecklistPage checklistData={checklistData} />;
}

export default App;
