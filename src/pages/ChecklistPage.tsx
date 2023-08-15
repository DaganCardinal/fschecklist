import { Checklist } from "../components/Checklist";
import { usePageTitle } from "../hooks/hooks";

interface ChecklistPageProps {
  checklistData: any;
  pageTitle: string;
  aircraftName: string;
}

export const ChecklistPage = ({
  checklistData,
  pageTitle,
  aircraftName,
}: ChecklistPageProps) => {
  usePageTitle(pageTitle);

  return (
    <>
      <div className="">
        <Checklist checklistData={checklistData} title={aircraftName} />
      </div>
    </>
  );
};
