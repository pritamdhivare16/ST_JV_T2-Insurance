import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { noNumbersValidator, noSpecialChValidator } from './customValidator';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrl: './insurance.component.css'
})
export class InsuranceComponent implements OnInit {
  insuranceForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private http: HttpClient) { }


    ngOnInit(): void {
      this.insuranceForm = this.formBuilder.group({
        fullName: ['', [Validators.required,noNumbersValidator()]],
        address:['',Validators.required],
        mobileNumber:['',[Validators.required, Validators.maxLength(10),Validators.pattern("^[0-9]{10}$")]],
        policyNumber: ['', Validators.required],//auto-generate
        periodStartDate:['',Validators.required],
        periodEndDate: ['',Validators.required],
        vehicleNumber:['',[Validators.required,Validators.maxLength(10),Validators.pattern("^[A-Za-z0-9]{10}$")]],
        vehicleModelNumber:['',Validators.required],
        vehicleManufacturer:['',Validators.required],
        yearOfManufacture:['',Validators.required],
        chassisNumber:['',Validators.required],
        fuelType:['',Validators.required],
        bodyType:['',Validators.required],
        cubicCapacity:['',Validators.required],
        colour:['',Validators.required],
        policyReceiptNumber:['',Validators.required],
       
        officeAddress:['',Validators.required],
        officePhoneNumber:['',[Validators.required,Validators.maxLength(10),Validators.pattern("0-9")]],
        officeFaxNumber:['',Validators.required],
        officeEmail:['',[Validators.required,Validators.email]],
       
        insuranceBasicAmount:['',Validators.required],
        basicTPCoverAmount:['',Validators.required],
        TPPremiumAmount:['',Validators.required],
        netPremium:['',Validators.required],
        serviceTaxOnPremium:['',Validators.required],
        totalPayable:['',Validators.required]



      });

      this.insuranceForm.get('fullName')?.valueChanges
      .subscribe (value => {
        if (value) {
          this.generatePolicyNumber();
        }
      });
    }

    
  
    generatePolicyNumber(): void {
      if(this.insuranceForm){
      const min = 100000; // Minimum policy number value
      const max = 999999; // Maximum policy number value
      const policyNumber = Math.floor(Math.random() * (max - min + 1)) + min+"";
      this.insuranceForm.patchValue({policyNumber: policyNumber});
      }
    }



  lstOfInsurance: any = [];

  backEndUrl : string = "http://localhost:8080/"

  onSubmit(): void {
    
    this.http.post(this.backEndUrl+ "insurance/addInsuranceInfo", this.insuranceForm.value)
    .subscribe(
      data => {
        alert("Data added successfully")
        this.insuranceForm.reset();
       
      },
      error => {
        alert("Error in adding Data")
        console.log(error)
      }
    )

    alert('Insurance data submitted'); // For debugging
    // Redirect to report page after successful submission
    this.router.navigate(['/report']); 
  
  }
}
