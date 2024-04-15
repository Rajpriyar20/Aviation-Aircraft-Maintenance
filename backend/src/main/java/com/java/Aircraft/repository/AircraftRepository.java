package com.java.Aircraft.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.java.Aircraft.model.Aircraft;

@Repository
public interface AircraftRepository extends JpaRepository<Aircraft, Integer>{

}
