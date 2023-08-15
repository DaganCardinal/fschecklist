import { Link } from "react-router-dom";
import { Button } from "flowbite-react";

export const LandingPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center mx-auto text-center mt-12">
        <h1 className="text-4xl font-bold">FSChecklist</h1>
        <p className="text-xl">A simple checklist app for flight simulators</p>
        <p className="text-xl">Select an aircraft to get started</p>
      </div>
      <div className="flex flex-row justify-between w-1/2 mx-auto mt-8">
        <Link to="/737">
          <Button>Boeing 737 NG</Button>
        </Link>
        <Link to="/208">
          <Button>Cessna 208B</Button>
        </Link>
      </div>
    </>
  );
};
