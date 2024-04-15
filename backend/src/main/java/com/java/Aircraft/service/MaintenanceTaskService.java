package com.java.Aircraft.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.java.Aircraft.model.MaintenanceTask;
import com.java.Aircraft.repository.MaintenanceTaskRepository;

@Service
public class MaintenanceTaskService {  
	
	@Autowired
	private MaintenanceTaskRepository maintenanceTaskRepository;
	
	public MaintenanceTask saveTasks(MaintenanceTask task) {
		return maintenanceTaskRepository.save(task);
	}
	
	public List<MaintenanceTask> getAllTasks(){
		return maintenanceTaskRepository.findAll();
	}
	
	public List<MaintenanceTask> getTasksById(int aircraftId){
		return maintenanceTaskRepository.findByAircraftId(aircraftId);
	}
	
	public Optional<MaintenanceTask> getTaskById(int id) {
		return maintenanceTaskRepository.findById(id);
	}
	
}
