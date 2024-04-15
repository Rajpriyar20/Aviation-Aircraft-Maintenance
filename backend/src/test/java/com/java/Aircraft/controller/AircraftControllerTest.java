package com.java.Aircraft.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.java.Aircraft.model.Aircraft;

@SpringBootTest
public class AircraftControllerTest {

	@Autowired
	private AircraftController aircraftController;
	@Test
	public void aircraftTest() {
				
		Aircraft aircraftObj = new Aircraft( 1, "Boeing", 13412, "The Boeing Company");
	
		Aircraft aircraft = aircraftController.createAircraft(aircraftObj);
		
		assertEquals(13412,aircraft.getSerialNumber());
	}
	
	
}
