package com.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity 
@Data
@Table(name="User")
public class userInfo {
	@Column(length=20)
	private String firstName;
	@Column(length=20)
	private String middleName;
	@Column(length=20)
	private String lastName;
	@Column(length=60)
	private String fullName;
	@Id @Column(length=10)
	private String phoneNumber;
	@Column(length=30)
	private  String email;
	@Column(length=20)
	private  String password;
	
	public userInfo() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	public userInfo(String fisrtName, String middleName, String lastName, String fullName, String phoneNumber,
			String email, String password) {
		super();
		this.firstName = firstName;
		this.middleName = middleName;
		this.lastName = lastName;
		this.fullName = fullName;
		this.phoneNumber = phoneNumber;
		this.email = email;
		this.password = password;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFisrtName(String firstName) {
		this.firstName = firstName;
	}
	public String getMiddleName() {
		return middleName;
	}
	public void setMiddleName(String middleName) {
		this.middleName = middleName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public String getPhoneNumber() {
		return phoneNumber;
	}
	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}
	public  String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public  String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	@Override
	public String toString() {
		return "userInfo [fisrtName=" + firstName + ", middleName=" + middleName + ", lastName=" + lastName
				+ ", fullName=" + fullName + ", phoneNumber=" + phoneNumber + ", email=" + email + ", password="
				+ password + "]";
	}
	
	
	

}
