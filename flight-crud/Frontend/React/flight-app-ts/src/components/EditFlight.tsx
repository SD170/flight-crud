import React from "react";
import { useState, useEffect } from "react";
import Flight from "../models/Flight.model";

// prop type
type editFlightProp = {
  selectedFlight: Flight;
  onEditFlightSubmit: (
    code: number | undefined,
    carrierInp: string,
    sourceInp: string,
    destinationInp: string
  ) => void; // a function which 3 inputs from addFlight nothing and returns void
};

const EditFlight = ({
  onEditFlightSubmit,
  selectedFlight,
}: editFlightProp): JSX.Element => {
  const [carrierInp, setCarrierInp] = useState<string>("");
  const [sourceInp, setSourceInp] = useState<string>("");
  const [destinationInp, setDestinationInp] = useState<string>("");

  useEffect(() => {
    setCarrierInp(selectedFlight.carrier);
    setSourceInp(selectedFlight.source);
    setDestinationInp(selectedFlight.destination);
  }, [selectedFlight]);

  return (
    <React.Fragment>
      <div className="ui form">
        <div className="three fields">
          <div className="field">
            <label>Carrier</label>
            <input
              type="text"
              placeholder="carrier"
              value={carrierInp}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setCarrierInp(e.target.value);
              }}
            />
          </div>
          <div className="field">
            <label>Source</label>
            <input
              type="text"
              placeholder="source"
              value={sourceInp}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setSourceInp(e.target.value);
              }}
            />
          </div>
          <div className="field">
            <label>Destination</label>
            <input
              type="text"
              placeholder="destination"
              value={destinationInp}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setDestinationInp(e.target.value);
              }}
            />
          </div>
        </div>
        <div
          className="ui submit button"
          onClick={() => {
            onEditFlightSubmit(
              selectedFlight.code,
              carrierInp,
              sourceInp,
              destinationInp
            );
            setCarrierInp("");
            setSourceInp("");
            setDestinationInp("");
          }}
        >
          Edit
        </div>
      </div>
    </React.Fragment>
  );
};

export default EditFlight;
