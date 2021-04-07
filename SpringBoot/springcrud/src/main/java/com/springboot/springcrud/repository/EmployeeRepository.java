package com.springboot.springcrud.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springboot.springcrud.entity.EmployeeModel;

@Repository	
public interface EmployeeRepository extends JpaRepository <EmployeeModel, Long>{
	

}
