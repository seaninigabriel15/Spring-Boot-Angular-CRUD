package com.springboot.springcrud.controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import java.util.HashMap;
import java.util.List;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;


import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.springcrud.entity.EmployeeModel;
import com.springboot.springcrud.exception.ResourceNotFoundException;
import com.springboot.springcrud.repository.EmployeeRepository;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class EmployeeController {
	
	 @Autowired
	//injected
	    private EmployeeRepository employeeRepository;
	
	//get all user
	 @GetMapping("/employees")
	    public List<EmployeeModel> getAllEmployees() {
	        return employeeRepository.findAll();
	    }
	//get user by ID
	 @GetMapping("/employees/{id}")
	    public ResponseEntity<EmployeeModel> getEmployeeById(@PathVariable(value = "id") Long employeeId)
	        throws ResourceNotFoundException {
	        EmployeeModel employee = employeeRepository.findById(employeeId)
	          .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + employeeId));
	        return ResponseEntity.ok().body(employee);
	    }
	 
	 
	 @PostMapping("/employees")
	    public EmployeeModel createEmployee( @RequestBody EmployeeModel employee) {
	        return employeeRepository.save(employee);
	    }
	 
	 @PutMapping("/employees/{id}")
	    public EmployeeModel updateEmployee(@RequestBody EmployeeModel employeeDetails, @PathVariable(value = "id") Long employeeId) {
	       
	        EmployeeModel employee = employeeRepository.findById(employeeId)
	        .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + employeeId));

	        employee.setEmailId(employeeDetails.getEmailId());
	        employee.setLastName(employeeDetails.getLastName());
	        employee.setFirstName(employeeDetails.getFirstName());
	        //final EmployeeModel updatedEmployee = employeeRepository.save(employee);
	        return this.employeeRepository.save(employee);
	    }

	    @DeleteMapping("/employees/{id}")
	    public Map<String, Boolean> deleteEmployee(@PathVariable(value = "id") Long employeeId)
	         throws ResourceNotFoundException {
	        EmployeeModel employee = employeeRepository.findById(employeeId)
	       .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + employeeId));

	        employeeRepository.delete(employee);
	        Map<String, Boolean> response = new HashMap<>();
	        response.put("deleted", Boolean.TRUE);
	        return response;
	    }
	 

}
