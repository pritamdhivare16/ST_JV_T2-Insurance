
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // For redirection
import { confirmPasswordValidator, noNumbersValidator } from './customValidator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  
  styleUrls: ['./registration.component.css'],
})



export class RegistrationComponent {
  registrationForm!: FormGroup; // Ensure it's initialized
  fullName!: string; // To store auto-generated full name
 

  
  constructor(private formBuilder: FormBuilder,private router: Router,private http: HttpClient) {
    this.getUserInfo();
  }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', [Validators.required,noNumbersValidator()]],
      middleName: ['', [Validators.required,noNumbersValidator()]],
      lastName: ['', [Validators.required,noNumbersValidator()]],
      fullName: [''], // Will be auto-generated
      phoneNumber: ['', [Validators.required, Validators.maxLength(10),Validators.pattern("^[0-9]{10}$")]], // 10-digit phone number
      email: ['', [Validators.required, Validators.email]], 
      password: [
        '', [Validators.required,Validators.minLength(6) ],
      ],
      confirmPassword: ['', [Validators.required]], 
      photo: ['', [Validators.required ]]
    },{ validators: confirmPasswordValidator('password', 'confirmPassword') });

    // Auto-generate full name when first, middle, or last name changes
    this.registrationForm.get('firstName')?.valueChanges.subscribe(() => {
      this.updateFullName();
    });
    this.registrationForm.get('middleName')?.valueChanges.subscribe(() => {
      this.updateFullName();
    });
    this.registrationForm.get('lastName')?.valueChanges.subscribe(() => {
      this.updateFullName();
    });
  }

  // Update full name based on first, middle, and last name
  private updateFullName(): void {
    const firstName = this.registrationForm.get('firstName')?.value || '';
    const middleName = this.registrationForm.get('middleName')?.value || '';
    const lastName = this.registrationForm.get('lastName')?.value || '';
    this.registrationForm.get('fullName')?.setValue(`${firstName} ${middleName} ${lastName}`.trim());
  }

  // Custom validator for matching passwords
  matchPasswordValidator(control: FormControl): { [key: string]: any } | null {
    if (!this.registrationForm) {
      return null; // Return early if 'registrationForm' is not initialized
    }

    const password = this.registrationForm.get('password')?.value;
    const confirmPassword = control.value;

    return password === password ? null : { mismatchedPasswords: true };
  }

  // Custom validator for file type (JPEG, JPG, PNG)
  // fileTypeValidator(control: FormControl): { [key: string]: any } | null {
  //   const file = control.value;
  //   const allowedTypes = ['image/jpeg', 'image/png'];

  //   if (file && !allowedTypes.includes(file.type)) {
  //     return { invalidFileType: true };
  //   }

  //   return null;
  // }

  // Custom validator for file size
  // fileSizeValidator(maxSize: number): (control: FormControl) => { [key: string]: any } | null {
  //   return (control: FormControl): { [key: string]: any } | null => {
  //     const file = control.value;
  //     if (file && file.size > maxSize) {
  //       return { fileSizeExceeded: true };
  //     }
  //     return null;
  //   };
  // }


  lstOfRegistrations: any = [];

  backEndUrl : string = "http://localhost:8080/"

  onSubmit(): void {
    // Check if the form is valid before submitting
    if (this.registrationForm.valid) {
      // HTTP POST request to add user
      this.http.post(this.backEndUrl + "User/addUser", this.registrationForm.value)
        .subscribe(
          data => {
            // Alert user about successful registration
            alert("User added successfully");
            // Reset the form after successful submission
            this.registrationForm.reset();
            // Redirect to the login page after successful registration
            this.router.navigate(['/login']);
          },
          error => {
            // Alert user about error in adding user
            alert("Error in adding user");
            console.log(error);
          }
        );
    } else {
      // If the form is invalid, mark all controls as touched to trigger validation messages
      Object.values(this.registrationForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }

  getUserInfo() {

    this.http.get(this.backEndUrl+ "User/getAll")
      .subscribe(
        data => {
          this.lstOfRegistrations = data;
          console.log(this.lstOfRegistrations)
        },
        error => {
          console.log(error)
          alert("Problem")
        }
      )
  }






}
