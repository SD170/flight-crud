import Flight from "../models/Flight.model";
const API = "http://localhost:8900";
export default class FlightService {
  flights: Flight[];
  constructor() {
    this.flights = [];
    this.flightInit();
  }

  flightInit = async () => {
    const rawData = await fetch(`${API}/list`, {
      method: "GET",
    });
    const data = (await rawData.json()) as Flight[];
    console.log(data);
    this.flights = data;
  };

  saveFlight = async (flight: Flight): Promise<void> => {
    const rawData = await fetch(`${API}/add`, {
      method: "POST",
      body: JSON.stringify(flight),
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const data = (await rawData.text()) as string;
    console.log(data);
  };

  editFlight = async (flight: Flight): Promise<void> => {
    const rawData = await fetch(`${API}/edit`, {
      method: "POST",
      body: JSON.stringify(flight),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = (await rawData.json()) as Flight;
    console.log(data);
  };

  fetchFlight = (code: number): Flight => {
    return this.flights.find((fl) => fl.code === code) as Flight;
  };

  listFlights = async (): Promise<Flight[]> => {
    const rawData = await fetch(`${API}/list`, {
      method: "GET",
    });
    const data = (await rawData.json()) as Flight[];
    this.flights = data;
    return this.flights;
  };

  removeFlight = async (code: number): Promise<boolean> => {
    const rawData = await fetch(`${API}/delete/${code}`, {
      method: "DELETE",
    });
    const data = (await rawData.json()) as boolean;
    return data;
  };

  listFlightsByCarrier = async (carrier: string): Promise<Flight[]> => {
    const rawData = await fetch(`${API}/listbycarrier?carrier=${carrier}`, {
      method: "GET",
    });
    const data = (await rawData.json()) as Flight[];
    return data;
  };

  listFlightsByRoute = async (
    source: string,
    destination: string
  ): Promise<Flight[]> => {
    const rawData = await fetch(
      `${API}/listbyroute2?source=${source}&destination=${destination}`,
      {
        method: "GET",
      }
    );
    const data = (await rawData.json()) as Flight[];
    return data;
  };

  randomIntFromInterval = (min: number, max: number) => {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
}
