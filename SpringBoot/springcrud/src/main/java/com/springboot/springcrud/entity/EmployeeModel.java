package com.springboot.springcrud.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="employee")
public class EmployeeModel {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@Column(name = "first_name", nullable = false)
    private String firstName;
	
	@Column(name = "last_name", nullable = false)
    private String lastName;
	
	@Column(name = "email_address", nullable = false)
    private String emailId;
 
    public EmployeeModel() {
  
    }
    // source > Generate Constructor using fields
	public EmployeeModel(long id, String firstName, String lastName, String emailId) {
	
		this.firstName = firstName;
		this.lastName = lastName;
		this.emailId = emailId;
	}

	// source > Generate getter and setter
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	
	// source > overide/implement method (toString)
	@Override
	public String toString() {
		// TODO Auto-generated method stub
	//eturn super.toString();
		 return "EmployeeModel [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", emailId=" + emailId
			       + "]";
	}
    
	
    
}
