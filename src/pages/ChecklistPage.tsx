import { Checklist } from "../components/Checklist";

interface ChecklistPageProps {
  checklistData: any;
}

export const ChecklistPage = ({ checklistData }: ChecklistPageProps) => {
  return (
    <>
      <div className="">
        <Checklist checklistData={checklistData} />
      </div>
    </>
  );
};
