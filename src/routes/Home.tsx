import { Link } from "react-router-dom";
import { Button } from "flowbite-react";

export const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-center mx-auto text-center mt-12 font-body">
        <h1 className="text-3xl font-bold font-heading mb-2">FSChecklist</h1>
        <p className="text-xl mb-8 mx-3">
          A simple checklist web app for flight simulators
        </p>
        <p className="text-xl">Select an aircraft to get started</p>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap md:justify-between md:w-auto max-w-[75%] mx-auto mt-8">
        <Link to="/b737-checklist" className="mx-auto">
          <Button className="my-4 min-w-[9rem]">Boeing 737 NG</Button>
        </Link>
        <Link to="/c208-checklist" className="mx-auto">
          <Button className="my-4 min-w-[9rem]">Cessna 208B</Button>
        </Link>
        <Link to="/a320-checklist" className="mx-auto">
          <Button className="my-4 min-w-[9rem]">Airbus A320</Button>
        </Link>
        <Link to="/c172-checklist" className="mx-auto">
          <Button className="my-4 min-w-[9rem]">Cessna 172</Button>
        </Link>
        <Link to="/crjx-checklist" className="mx-auto">
          <Button className="my-4 min-w-[9rem]">CRJ</Button>
        </Link>
      </div>
    </>
  );
};
