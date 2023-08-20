import { useState, useEffect } from "react";
import { Checklist } from "../components/Checklist";
import { usePageTitle } from "../hooks/hooks";
import "../index.css";

interface ChecklistPageProps {
  checklistData: any;
  pageTitle: string;
  aircraftName: string;
  image?: string;
}

export const ChecklistPage = ({
  checklistData,
  pageTitle,
  aircraftName,
  image,
}: ChecklistPageProps) => {
  usePageTitle(pageTitle);
  const [hasImage, setHasImage] = useState(false);

  useEffect(() => {
    if (image) {
      setHasImage(true);
    }
  }, [image]);

  return (
    <>
      <div
        className={`relative ${image} md:bg-contain bg-no-repeat md:bg-repeat md:bg-left-top  bg-center bg-cover`}
      >
        <Checklist
          checklistData={checklistData}
          title={aircraftName}
          hasImage={hasImage}
        />
      </div>
    </>
  );
};
