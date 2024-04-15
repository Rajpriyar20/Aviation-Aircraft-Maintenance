package com.java.Aircraft.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java.Aircraft.model.Aircraft;
import com.java.Aircraft.repository.AircraftRepository;

@Service
public class AircraftService {

	@Autowired
	private AircraftRepository aircraftRepository;

	public List<Aircraft> getAllAircrafts() {
		return aircraftRepository.findAll();
	}

	public Aircraft saveAircraft(Aircraft aircraft) {
		return aircraftRepository.save(aircraft);
	}


}
