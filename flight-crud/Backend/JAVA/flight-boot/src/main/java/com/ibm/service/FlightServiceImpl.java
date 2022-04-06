package com.ibm.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ibm.entity.Flight;
import com.ibm.exception.InvalidFlightException;
import com.ibm.repo.FlightRepository;

@Service
public class FlightServiceImpl implements FlightService {
	
	@Autowired
	private FlightRepository repo;
	
	@Override
	public int saveFlight(Flight f) {
		repo.save(f);
		return f.getCode();
	}

	@Override
	public Flight fetchFlight(int code) throws InvalidFlightException{
		return repo.findById(code).get();
	}

	@Override
	public List<Flight> listFlights() {
		return repo.findAll();
	}

	@Override
	public boolean removeFlight(int code) {
		repo.deleteById(code);
		return true;
	}

	@Override
	public List<Flight> listFlightsByCarrier(String carrier) {
		return repo.findAllByCarrier(carrier);
	}

	@Override
	public List<Flight> listFlightsByRoute(String source, String destination) {
		return repo.findAllBySourceAndDestination(source, destination);
	}

	@Override
	public List<Flight> listFlightsByRoute2(String source, String destination) {
		return repo.findAllByRoute(source, destination);
	}

	@Override
	public Flight editFlight(Flight f) {
		return repo.save(f);
	}

}
