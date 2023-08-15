import { useState } from "react";
import { Input } from "./Inputs";

export const FlightDetails = () => {
  const [flightDetailsData, setFlightDetailsData] = useState({
    flightNumber: "",
    origin: "",
    destination: "",
  });

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFlightDetailsData({ ...flightDetailsData, [id]: value });
  };

  return (
    <>
      <div>
        <form className="flex flex-row justify-between mx-12">
          <Input
            type="text"
            id="flightNumber"
            name="Flight Number"
            value={flightDetailsData.flightNumber}
            onBlur={handleInput}
            onChange={handleInput}
          />
          <Input
            type="text"
            id="origin"
            name="Origin"
            value={flightDetailsData.origin}
            onBlur={handleInput}
            onChange={handleInput}
          />
          <Input
            type="text"
            id="destination"
            name="Destination"
            value={flightDetailsData.destination}
            onBlur={handleInput}
            onChange={handleInput}
          />
        </form>
      </div>
    </>
  );
};
