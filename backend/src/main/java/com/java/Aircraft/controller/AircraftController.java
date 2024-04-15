package com.java.Aircraft.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.java.Aircraft.model.Aircraft;
import com.java.Aircraft.service.AircraftService;

@RestController
@RequestMapping("/aircrafts")
@CrossOrigin(origins = "http://localhost:4200")
public class AircraftController {
    
	@Autowired
	private AircraftService aircraftService;
	
	@GetMapping
	public List<Aircraft> getAllAircrafts(){
		return aircraftService.getAllAircrafts();
	}
	
	@PostMapping
	public Aircraft createAircraft(@RequestBody Aircraft aircraft) {
		return aircraftService.saveAircraft(aircraft);
	}
}
