package com.ibm.service;

import java.util.List;

import com.ibm.entity.Flight;
import com.ibm.exception.InvalidFlightException;

public interface FlightService {
	int saveFlight(Flight f);
	Flight editFlight(Flight f);
	Flight fetchFlight(int code) throws InvalidFlightException;
	List<Flight> listFlights();
	boolean removeFlight(int code);
	List<Flight> listFlightsByCarrier(String carrier);
	List<Flight> listFlightsByRoute(String source, String destination);
	List<Flight> listFlightsByRoute2(String source, String destination);
}
