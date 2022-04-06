import React from "react";
import Flight from "../models/Flight.model";
import EditFlight from "../components/EditFlight";
import FlightService from "../services/FlightService";
import { useEffect, useState } from "react";

type FlightDetailsProp = {
  selectedFlight: Flight;
  onEditFlightSubmit: (
    code: number | undefined,
    carrierInp: string,
    sourceInp: string,
    destinationInp: string
  ) => void;
  updateFlightList:()=>void,
  flightService:FlightService
};

const FlightDetails = ({
  selectedFlight,
  onEditFlightSubmit,
  updateFlightList,
  flightService
}: FlightDetailsProp): JSX.Element => {
//   const [flightService, setFlightService] = useState<FlightService>();
//   useEffect(() => {
//     setFlightService(new FlightService());
//   }, []);
    // const flightService = new FlightService();

  return (
    <React.Fragment>
      <EditFlight
        selectedFlight={selectedFlight}
        onEditFlightSubmit={onEditFlightSubmit}
      />
      <div
        className="ui submit button"
        onClick={async () => {
          if (selectedFlight.code) {
            await flightService.removeFlight(selectedFlight.code);
            await updateFlightList();
            // console.log(selectedFlight.code);
          }
        }}
      >
        Delete
      </div>
    </React.Fragment>
  );
};

export default FlightDetails;
