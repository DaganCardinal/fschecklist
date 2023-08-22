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
      <ChecklistEditor onSave={handleSave} />
    </>
  );
};
