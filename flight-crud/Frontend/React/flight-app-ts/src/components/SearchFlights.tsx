import React from "react";
import Flight from "../models/Flight.model";
import FlightService from "../services/FlightService";

interface SearchFlightsProps {
  setFlightListState: (newFlightList: Flight[]) => void;
  flightService: FlightService;
}

type SearchFlightsState = {
  carrierInp: string;
  sourceInp: string;
  destinationInp: string;
};
class SearchFlights extends React.Component<
  SearchFlightsProps,
  SearchFlightsState
> {
  state: SearchFlightsState = {
    carrierInp: "",
    sourceInp: "",
    destinationInp: "",
  };

  render() {
    return (
      <React.Fragment>
        <div className="ui form">
          <div className="one field">
            <div className="field">
              <label>Carrier</label>
              <input
                type="text"
                placeholder="carrier"
                value={this.state.carrierInp}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  this.setState({ carrierInp: e.target.value });
                }}
              />
            </div>
            <div
              className="ui submit button"
              onClick={async () => {
                const newFlightList =
                  await this.props.flightService.listFlightsByCarrier(
                    this.state.carrierInp
                  );
                this.props.setFlightListState(newFlightList);
                // this.props.flightService.listFlightsByCarrier(
                //   this.state.carrierInp
                // );
              }}
            >
              Search carrier
            </div>
          </div>
          <div className="two fields">
            <div className="field">
              <label>Source</label>
              <input
                type="text"
                placeholder="source"
                value={this.state.sourceInp}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  this.setState({ sourceInp: e.target.value });
                }}
              />
            </div>
            <div className="field">
              <label>Destination</label>
              <input
                type="text"
                placeholder="destination"
                value={this.state.destinationInp}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  this.setState({ destinationInp: e.target.value });
                }}
              />
            </div>
          </div>
          <div
            className="ui submit button"
            onClick={async () => {
              const newFlightList = await this.props.flightService.listFlightsByRoute(
                this.state.sourceInp,
                this.state.destinationInp
              );
              this.props.setFlightListState(newFlightList);
            }}
          >
            Search Route
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchFlights;
