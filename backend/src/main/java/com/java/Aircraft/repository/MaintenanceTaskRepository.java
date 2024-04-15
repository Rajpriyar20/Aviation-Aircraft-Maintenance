package com.java.Aircraft.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.java.Aircraft.model.MaintenanceTask;

@Repository
public interface MaintenanceTaskRepository extends JpaRepository<MaintenanceTask, Integer>{
     List<MaintenanceTask> findByAircraftId(int aircraftId);
}