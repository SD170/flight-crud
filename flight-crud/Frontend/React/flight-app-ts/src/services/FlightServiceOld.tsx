import Flight from "../models/Flight.model";
export default class FlightService {
  flights: Flight[];
  constructor() {
    this.flights = [];
    this.flightInit();
  }

  flightInit = () => {
    this.flights = [
      { code: 1, carrier: "sd", source: "kolkata", destination: "manchester" },
      { code: 2, carrier: "cr7", source: "turin", destination: "manchester" },
      { code: 3, carrier: "lm10", source: "barcelona", destination: "paris" },
      { code: 4, carrier: "mbappe", source: "monaco", destination: "paris" },
    ];
  };

  saveFlight = (flight: Flight): void => {
    if (flight.code === undefined) {
      flight.code = this.randomIntFromInterval(0, 100);
    }
    this.flights.push(flight);
  };

  editFlight = (flight: Flight): void => {
    this.flights = this.flights.map((fl) => {
      if (fl.code === flight.code) {
        return flight;
      }
      return fl;
    });
  };

  fetchFlight = (code: number): Flight => {
    return this.flights.find((fl) => fl.code === code) as Flight;
  };

  listFlights = (): Flight[] => {
    return this.flights;
  };

  removeFlight = (code: number): boolean => {
    const prevLen: number = this.flights.length;
    this.flights = this.flights.filter((fl) => {
      return fl.code !== code;
    });
    const newLen: number = this.flights.length;
    return prevLen !== newLen;
  };

  listFlightsByCarrier = (carrier: string): Flight[] => {
    return this.flights.filter((fl) => fl.carrier === carrier);
  };

  listFlightsByRoute = (source: string, destination: string): Flight[] => {
    return this.flights.filter(
      (fl) => fl.source === source && fl.destination === destination
    );
  };

  randomIntFromInterval = (min: number, max: number) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
}
