package com.ibm.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "flight_boot")
public class Flight {
	@Id
	@GeneratedValue
	@Column(name = "flight_id")
	private int code;
	@Column(name = "flight_carrier", length = 15)
	private String carrier;
	@Column(name = "flight_source", length = 15)
	private String source;
	@Column(name = "flight_destination", length = 15)
	private String destination;
	
	public Flight() {
	}

	public Flight(int code, String carrier, String source, String destination) {
		this.code = code;
		this.carrier = carrier;
		this.source = source;
		this.destination = destination;
	}

	public int getCode() {
		return code;
	}

	public void setCode(int code) {
		this.code = code;
	}

	public String getCarrier() {
		return carrier;
	}

	public void setCarrier(String carrier) {
		this.carrier = carrier;
	}

	public String getSource() {
		return source;
	}

	public void setSource(String source) {
		this.source = source;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	@Override
	public String toString() {
		return "Flight [code=" + code + ", carrier=" + carrier + ", source=" + source + ", destination=" + destination
				+ "]";
	}
	
	

}
