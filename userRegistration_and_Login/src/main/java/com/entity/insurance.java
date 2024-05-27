package com.entity;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Data
@Table(name="insurance")
public class insurance {
	@Column(length=20)
	private String fullName;
	
    @Column(length=30)
	private String address;
    
    @Column(length=10)
    @Id
	private String mobileNumber;
    @Column(length=6)
	private String policyNumber;
    @Column(length=10)
	private Date periodStartDate;
    @Column(length=10)
	private Date periodEndDate;
    @Column(length=15)
	private String vehicleNumber;
    @Column(length=10)
	private String vehicleModelNumber;
    @Column(length=10)
	private String vehicleManufacturer;
    @Column(length=5)
	private String yearOfManufacture;
    @Column(length=20)
	private String chassisNumber;
    @Column(length=10)
	private String fuelType;
    @Column(length=10)
	private String bodyType;
    @Column(length=10)
	private String cubicCapacity;
    @Column(length=10)
	private String colour;
    @Column(length=10)
	private String policyReceiptNumber;
    @Column(length=30)
	private String officeAddress;
    @Column(length=10)
	private String officePhoneNumber;
    @Column(length=15)
	private String officeFaxNumber;
    @Column(length=30)
	private String officeEmail;
    @Column(length=10)
	private double insuranceBasicAmount;
    @Column(length=10)
	private double basicTPCoverAmount;
    @Column(length=10)
	private double TPPremiumAmount;
    @Column(length=10)
	private double netPremium;
    @Column(length=10)
	private double serviceTaxOnPremium;
    @Column(length=10)
	private double totalPayable;
    
	public insurance() {
		super();
		// TODO Auto-generated constructor stub
	}
	public insurance(String fullName, String address, String mobileNumber, String policyNumber, Date periodStartDate,
			Date periodEndDate, String vehicleNumber, String vehicleModelNumber, String vehicleManufacturer,
			String yearOfManufacture, String chassisNumber, String fuelType, String bodyType, String cubicCapacity,
			String colour, String policyReceiptNumber, String officeAddress, String officePhoneNumber,
			String officeFaxNumber, String officeEmail, double insuranceBasicAmount, double basicTPCoverAmount,
			double tPPremiumAmount, double netPremium, double serviceTaxOnPremium, double totalPayable) {
		super();
		this.fullName = fullName;
		this.address = address;
		this.mobileNumber = mobileNumber;
		this.policyNumber = policyNumber;
		this.periodStartDate = periodStartDate;
		this.periodEndDate = periodEndDate;
		this.vehicleNumber = vehicleNumber;
		this.vehicleModelNumber = vehicleModelNumber;
		this.vehicleManufacturer = vehicleManufacturer;
		this.yearOfManufacture = yearOfManufacture;
		this.chassisNumber = chassisNumber;
		this.fuelType = fuelType;
		this.bodyType = bodyType;
		this.cubicCapacity = cubicCapacity;
		this.colour = colour;
		this.policyReceiptNumber = policyReceiptNumber;
		this.officeAddress = officeAddress;
		this.officePhoneNumber = officePhoneNumber;
		this.officeFaxNumber = officeFaxNumber;
		this.officeEmail = officeEmail;
		this.insuranceBasicAmount = insuranceBasicAmount;
		this.basicTPCoverAmount = basicTPCoverAmount;
		TPPremiumAmount = tPPremiumAmount;
		this.netPremium = netPremium;
		this.serviceTaxOnPremium = serviceTaxOnPremium;
		this.totalPayable = totalPayable;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(String mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public String getPolicyNumber() {
		return policyNumber;
	}
	public void setPolicyNumber(String policyNumber) {
		this.policyNumber = policyNumber;
	}
	public Date getPeriodStartDate() {
		return periodStartDate;
	}
	public void setPeriodStartDate(Date periodStartDate) {
		this.periodStartDate = periodStartDate;
	}
	public Date getPeriodEndDate() {
		return periodEndDate;
	}
	public void setPeriodEndDate(Date periodEndDate) {
		this.periodEndDate = periodEndDate;
	}
	public String getVehicleNumber() {
		return vehicleNumber;
	}
	public void setVehicleNumber(String vehicleNumber) {
		this.vehicleNumber = vehicleNumber;
	}
	public String getVehicleModelNumber() {
		return vehicleModelNumber;
	}
	public void setVehicleModelNumber(String vehicleModelNumber) {
		this.vehicleModelNumber = vehicleModelNumber;
	}
	public String getVehicleManufacturer() {
		return vehicleManufacturer;
	}
	public void setVehicleManufacturer(String vehicleManufacturer) {
		this.vehicleManufacturer = vehicleManufacturer;
	}
	public String getYearOfManufacture() {
		return yearOfManufacture;
	}
	public void setYearOfManufacture(String yearOfManufacture) {
		this.yearOfManufacture = yearOfManufacture;
	}
	public String getChassisNumber() {
		return chassisNumber;
	}
	public void setChassisNumber(String chassisNumber) {
		this.chassisNumber = chassisNumber;
	}
	public String getFuelType() {
		return fuelType;
	}
	public void setFuelType(String fuelType) {
		this.fuelType = fuelType;
	}
	public String getBodyType() {
		return bodyType;
	}
	public void setBodyType(String bodyType) {
		this.bodyType = bodyType;
	}
	public String getCubicCapacity() {
		return cubicCapacity;
	}
	public void setCubicCapacity(String cubicCapacity) {
		this.cubicCapacity = cubicCapacity;
	}
	public String getColour() {
		return colour;
	}
	public void setColour(String colour) {
		this.colour = colour;
	}
	public String getPolicyReceiptNumber() {
		return policyReceiptNumber;
	}
	public void setPolicyReceiptNumber(String policyReceiptNumber) {
		this.policyReceiptNumber = policyReceiptNumber;
	}
	public String getOfficeAddress() {
		return officeAddress;
	}
	public void setOfficeAddress(String officeAddress) {
		this.officeAddress = officeAddress;
	}
	public String getOfficePhoneNumber() {
		return officePhoneNumber;
	}
	public void setOfficePhoneNumber(String officePhoneNumber) {
		this.officePhoneNumber = officePhoneNumber;
	}
	public String getOfficeFaxNumber() {
		return officeFaxNumber;
	}
	public void setOfficeFaxNumber(String officeFaxNumber) {
		this.officeFaxNumber = officeFaxNumber;
	}
	public String getOfficeEmail() {
		return officeEmail;
	}
	public void setOfficeEmail(String officeEmail) {
		this.officeEmail = officeEmail;
	}
	public double getInsuranceBasicAmount() {
		return insuranceBasicAmount;
	}
	public void setInsuranceBasicAmount(double insuranceBasicAmount) {
		this.insuranceBasicAmount = insuranceBasicAmount;
	}
	public double getBasicTPCoverAmount() {
		return basicTPCoverAmount;
	}
	public void setBasicTPCoverAmount(double basicTPCoverAmount) {
		this.basicTPCoverAmount = basicTPCoverAmount;
	}
	public double getTPPremiumAmount() {
		return TPPremiumAmount;
	}
	public void setTPPremiumAmount(double tPPremiumAmount) {
		TPPremiumAmount = tPPremiumAmount;
	}
	public double getNetPremium() {
		return netPremium;
	}
	public void setNetPremium(double netPremium) {
		this.netPremium = netPremium;
	}
	public double getServiceTaxOnPremium() {
		return serviceTaxOnPremium;
	}
	public void setServiceTaxOnPremium(double serviceTaxOnPremium) {
		this.serviceTaxOnPremium = serviceTaxOnPremium;
	}
	public double getTotalPayable() {
		return totalPayable;
	}
	public void setTotalPayable(double totalPayable) {
		this.totalPayable = totalPayable;
	}
	@Override
	public String toString() {
		return "insurance [fullName=" + fullName + ", address=" + address + ", mobileNumber=" + mobileNumber
				+ ", policyNumber=" + policyNumber + ", periodStartDate=" + periodStartDate + ", periodEndDate="
				+ periodEndDate + ", vehicleNumber=" + vehicleNumber + ", vehicleModelNumber=" + vehicleModelNumber
				+ ", vehicleManufacturer=" + vehicleManufacturer + ", yearOfManufacture=" + yearOfManufacture
				+ ", chassisNumber=" + chassisNumber + ", fuelType=" + fuelType + ", bodyType=" + bodyType
				+ ", cubicCapacity=" + cubicCapacity + ", colour=" + colour + ", policyReceiptNumber="
				+ policyReceiptNumber + ", officeAddress=" + officeAddress + ", officePhoneNumber=" + officePhoneNumber
				+ ", officeFaxNumber=" + officeFaxNumber + ", officeEmail=" + officeEmail + ", insuranceBasicAmount="
				+ insuranceBasicAmount + ", basicTPCoverAmount=" + basicTPCoverAmount + ", TPPremiumAmount="
				+ TPPremiumAmount + ", netPremium=" + netPremium + ", serviceTaxOnPremium=" + serviceTaxOnPremium
				+ ", totalPayable=" + totalPayable + "]";
	}
	
	
	

}
