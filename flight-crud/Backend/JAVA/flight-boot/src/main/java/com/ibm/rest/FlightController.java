package com.ibm.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.ibm.entity.Flight;
import com.ibm.exception.InvalidFlightException;
import com.ibm.service.FlightService;

@CrossOrigin
@RestController
public class FlightController {
	@Autowired
	private FlightService service;
	@PostMapping(path = "/add", consumes = "application/json")
	public String saveFlight(@RequestBody Flight f) {
		int code = service.saveFlight(f);
		return "Flight saved, code: " + code;
	}
	@GetMapping(path = "/get/{code}", produces = "application/json")
	public Flight fetchFlight(@PathVariable int code) {
		try {
			return service.fetchFlight(code);
		} catch (InvalidFlightException e) {
			e.printStackTrace();
			throw new ResponseStatusException(HttpStatus.NOT_FOUND);
		}
	}
	@GetMapping(path = "/list", produces = "application/json")
	public List<Flight> listFlight() {
		return service.listFlights();
	}
	@DeleteMapping(path = "/delete/{code}", produces = "application/json")
	public boolean removeFlight(@PathVariable int code) {
		return service.removeFlight(code);
	}
	@GetMapping(path = "/listbycarrier", produces = "application/json")
	public List<Flight> listFlightsByCarrier(@RequestParam String carrier) {
		return service.listFlightsByCarrier(carrier);
	}
	@GetMapping(path = "/listbyroute", produces = "application/json")
	public List<Flight> listFlightsByRoute(@RequestParam String source, @RequestParam String destination) {
		return service.listFlightsByRoute(source, destination);
	}
	@GetMapping(path = "/listbyroute2", produces = "application/json")
	public List<Flight> listFlightsByRoute2(@RequestParam String source, @RequestParam String destination) {
		return service.listFlightsByRoute2(source, destination);
	}
	@PostMapping(path = "/edit", produces = "application/json")
	public Flight editFlight(@RequestBody Flight f) {
		return service.editFlight(f);
	}

}
