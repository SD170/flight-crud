import React from "react";
import { useState } from "react";

// prop type
type addFlightProp = {
  onAddFlightSubmit: (
    carrierInp: string,
    sourceInp: string,
    destinationInp: string
  ) => void; // a function which 3 inputs from addFlight nothing and returns void
};

const AddFlight = ({ onAddFlightSubmit }: addFlightProp): JSX.Element => {
  const [carrierInp, setCarrierInp] = useState<string>("");
  const [sourceInp, setSourceInp] = useState<string>("");
  const [destnationInp, setDestinationInp] = useState<string>("");

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
              value={destnationInp}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setDestinationInp(e.target.value);
              }}
            />
          </div>
        </div>
        <div
          className="ui submit button"
          onClick={() => {
            onAddFlightSubmit(carrierInp, sourceInp, destnationInp);
            setCarrierInp("");
            setSourceInp("");
            setDestinationInp("");
          }}
        >
          Add
        </div>
      </div>
    </React.Fragment>
  );
};

export default AddFlight;
