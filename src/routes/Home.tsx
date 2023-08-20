import { Link } from "react-router-dom";
import { Button } from "flowbite-react";

export const Home = () => {
  return (
    <>
      <div className="flex flex-col justify-center mx-auto text-center mt-12 font-body">
        <h1 className="text-3xl font-bold font-heading mb-2">FSChecklist</h1>
        <p className="text-xl mb-8">
          A simple checklist web app for flight simulators
        </p>
        <p className="text-xl">Select an aircraft to get started</p>
      </div>
      <div className="flex flex-row flex-wrap justify-between w-1/2 mx-auto mt-8">
        <Link to="/b737-checklist">
          <Button className="my-4">Boeing 737 NG</Button>
        </Link>
        <Link to="/c208-checklist">
          <Button className="my-4">Cessna 208B</Button>
        </Link>
        <Link to="/a320-checklist">
          <Button className="my-4">Airbus A320</Button>
        </Link>
        <Link to="/c172-checklist">
          <Button className="my-4">Cessna 172</Button>
        </Link>
        <Link to="/crjx-checklist">
          <Button className="my-4">CRJ</Button>
        </Link>
      </div>
    </>
  );
};
