package com.java.Aircraft.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.java.Aircraft.model.MaintenanceTask;
import com.java.Aircraft.service.MaintenanceTaskService;

@RestController
@RequestMapping("/tasks")
@CrossOrigin(origins = "*")
public class MaintenaceTaskController {

	@Autowired
	private MaintenanceTaskService maintenanceTaskService;
	
	@PostMapping
	public MaintenanceTask saveMaintenanceTask(@RequestBody MaintenanceTask task) {
		return maintenanceTaskService.saveTasks(task);
	}
	
	@GetMapping
	public List<MaintenanceTask> getAllTasks(){
		return maintenanceTaskService.getAllTasks();
	}
	
	@GetMapping("/{aircraft_id}")
	public List<MaintenanceTask> getMaintenanceTasks(@PathVariable("aircraft_id") int id){
		return maintenanceTaskService.getTasksById(id);
	}
	
	@GetMapping("/taskId/{id}")
	public Optional<MaintenanceTask> getMaintenanceTask(@PathVariable("id") int id) {
		return maintenanceTaskService.getTaskById(id);
	}
}
