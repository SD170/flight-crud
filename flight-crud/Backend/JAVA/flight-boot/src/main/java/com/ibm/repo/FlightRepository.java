package com.ibm.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.ibm.entity.Flight;

public interface FlightRepository extends JpaRepository<Flight, Integer>{
	List<Flight> findAllByCarrier(String carrier);
	List<Flight> findAllBySourceAndDestination(String source, String destination);
	// same as above
	@Query("From Flight WHERE source=:src AND destination=:dest")
	List<Flight> findAllByRoute(String src, String dest);
}
