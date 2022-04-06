import React from "react";
import FlightService from "../services/FlightService";
import Flight from "../models/Flight.model";
import AddFlight from "./AddFlight";
import FlightDetails from "./FlightDetails";
import SearchFlights from "./SearchFlights";

type listFlightState = {
  flightListState: Flight[];
  addFlightState: Flight;
  showAddFlightModal: boolean;
  showFlightDetail: boolean;
  showSearchFlights: boolean;
  selectedFlight?: Flight;
};

// type addFlightProp = {
//   onAddFlightSubmit: (
//     carrierInp: string,
//     sourceInp: string,
//     destinationInp: string
//   ) => void; // a function which 3 inputs from addFlight nothing and returns void
// };

class listFlights extends React.Component<any, listFlightState> {
  private flightService: FlightService;
  constructor(props: any) {
    super(props);
    this.flightService = new FlightService();
    this.state = {
      flightListState: [],
      addFlightState: {
        code: undefined,
        carrier: "",
        source: "",
        destination: "",
      },
      showAddFlightModal: false,
      showFlightDetail: false,
      showSearchFlights: false,
      selectedFlight: undefined,
    };
  }
  onAddFlightSubmit = (
    carrierInp: string,
    sourceInp: string,
    destinationInp: string
  ) => {
    // console.log(carrierInp, sourceInp, destinationInp);
    this.setState(
      {
        addFlightState: {
          carrier: carrierInp,
          source: sourceInp,
          destination: destinationInp,
        },
      },
      async () => {
        await this.flightService.saveFlight(this.state.addFlightState);
        await this.updateFlightList();
      }
    );
  };
  onEditFlightSubmit = (
    code: number | undefined,
    carrierInp: string,
    sourceInp: string,
    destinationInp: string
  ) => {
    // console.log(carrierInp, sourceInp, destinationInp);
    this.setState(
      {
        addFlightState: {
          code: code,
          carrier: carrierInp,
          source: sourceInp,
          destination: destinationInp,
        },
      },
      async () => {
        await this.flightService.editFlight(this.state.addFlightState);
        await this.updateFlightList();
        this.resetFields();
      }
    );
  };

  // update flight list
  updateFlightList = async () => {
    const newList = (await this.flightService.listFlights()) as Flight[];
    this.setState({ flightListState: newList });
  };

  openShowAddFlightModal = () => {
    this.resetModals();
    this.setState({ showAddFlightModal: true });
  };
  closeShowAddFlightModal = () => {
    this.setState({ showAddFlightModal: false });
  };

  resetFields = () => {
    this.setState({
      addFlightState:{
        code:undefined,
        carrier:"",
        source:"",
        destination:""
      }
    })
  }

  resetModals = () => {
    this.setState({
      showFlightDetail: false,
      showAddFlightModal: false,
      showSearchFlights: false,
    });
  };

  setFlightListState = (newFlightList: Flight[]) => {
    this.setState({
      flightListState: newFlightList,
    });
  };

  async componentDidMount() {
    await this.updateFlightList();
  }

  render() {
    const flightList: JSX.Element[] = this.state.flightListState.map((fl) => {
      // console.log(fl);
      return (
        <li
          key={fl.code}
          onClick={() => {
            this.setState(
              {
                selectedFlight: fl,
              },
              () => {
                // console.log("object", fl);
                this.resetModals();
                this.setState({ showFlightDetail: true });
              }
            );
          }}
        >
          {fl.code}: {fl.carrier}
        </li>
      );
    });
    return (
      <React.Fragment>
        <h1>List of flights</h1>
        <ul>{flightList}</ul>
        <button
          onClick={() => {
            this.resetModals();
            this.setState({ showAddFlightModal: true });
          }}
          className="ui submit button"
        >
          Add flight
        </button>
        <button
          onClick={() => {
            this.resetModals();
            this.setState({ showSearchFlights: true });
          }}
          className="ui submit button"
        >
          Search flight
        </button>
        {this.state.showAddFlightModal && (
          <React.Fragment>
            <AddFlight onAddFlightSubmit={this.onAddFlightSubmit} />
            <button
              onClick={() => {
                this.setState({ showAddFlightModal: false });
              }}
              className="ui submit button"
            >
              Close
            </button>
          </React.Fragment>
        )}
        {this.state.showSearchFlights && (
          <React.Fragment>
            <SearchFlights
              flightService={this.flightService}
              setFlightListState={this.setFlightListState}
            />
            <button
              onClick={() => {
                this.setState({ showSearchFlights: false });
              }}
              className="ui submit button"
            >
              Close
            </button>
          </React.Fragment>
        )}
        {this.state.showFlightDetail && (
          <React.Fragment>
            <FlightDetails
              selectedFlight={this.state.selectedFlight as Flight}
              onEditFlightSubmit={this.onEditFlightSubmit}
              updateFlightList={this.updateFlightList}
              flightService={this.flightService}
            />
            <button
              onClick={() => {
                this.setState({ showFlightDetail: false });
              }}
              className="ui submit button"
            >
              Close
            </button>
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}
export default listFlights;
