
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,AbstractControl, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { Router } from '@angular/router'; // For navigation after login
import { UserserviceService } from '../userservice.service';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map } from 'rxjs/operators';
import { of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})


export class LoginComponent implements OnInit {
  loginForm!: FormGroup; // Reactive form
  model : any = {};
  getData: boolean = false;

  showAlert: boolean = false;
  loginSuccess: boolean = false;
  error: string = '';
  
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private userservice : UserserviceService
    ) { }
  

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [' ',[Validators.required,Validators.email], [this.asyncForbiddenNameValidator(/forbidden/i)]], // Username is required
      password: [' ', [Validators.required, Validators.minLength(6)], // Password must be at least 6 characters
    ],
    });
  }

  loginUser(): void {

    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      this.http.post('http://localhost:8080/user/login', loginData)
      .pipe(
        catchError(error => {
          console.error('Login request failed', error);
          return throwError(error);
        })
      )
      .subscribe(response => {
        console.log('Login successful', response);
      });
      
    } else {
      this.loginForm.markAllAsTouched(); // Trigger validation messages
    }
    } 

  // loginUser() {
   
  //   var username = this.model.username;
  //   var password = this.model.password;

  //   if (!username || !password) { // Ensure inputs are not empty
  //     alert("Email and password are required.");
  //     return; // Exit early if inputs are invalid
  //   }
     
  //   this.userservice.getUserData(username, password).pipe(
  //     map((response: any) => {
  //       if (response && typeof response.success === "boolean") {
  //       return response.success;
  //       } else {
  //         throw new Error("Invalid response structure."); // Throw an error if structure is unexpected
  //       }
  //     }),
  //     catchError((error) => {
  //       console.error("Error during login:", error); // Log error details
  //       alert("An error occurred during login. Please try again."); // Notify user
  //       return throwError(error); // Re-throw the error for further handling
  //     })
  //   ).subscribe((res: boolean) => {
  //       this.getData = res;
        

  //       if (this.getData) {
         
  //        this.router.navigate(["/insurance"])
  //       } else {
  //        alert("Invalid user")
  //       }
  //     });
  // }

  // loginUser(): void {
  //   if (this.loginForm.valid) {
  //     const formData = this.loginForm.value;
  //     this.http.post<any>('http://localhost:8080/User/userlogin', formData)
  //       .subscribe(
  //         response => {
  //           if (response === 0) {
  //             this.error = "Login failed. Please check your credentials and try again.";
  //             this.showAlert = true;
  //             setTimeout(() => {
  //               this.error = ''; // Clear error message
  //               this.showAlert = false; // Hide error message
  //             }, 3000); // Hide error message after 3 seconds
  //             // Clear form fields
  //             this.loginForm.reset();
  //           } else {
  //             this.loginSuccess = true;
  //             this.showAlert = true;
  //             setTimeout(() => {
  //               this.router.navigate(['/insurance']); // Redirect after successful login
  //             }, 3000);
  //           }
  //         },
  //         error => {
  //           console.error("Error during login:", error);
  //           this.error = "Failed to sign in. Please try again later.";
  //           this.showAlert = true;
  //         }
  //       );
  //   } else {
  //     this.loginForm.markAllAsTouched(); // Trigger validation messages
  //   }
  // }



  asyncForbiddenNameValidator(nameRe: RegExp): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors | null> => {
      const forbidden = nameRe.test(control.value);
      return of(forbidden ? { forbiddenName: { value: control.value } } : null).pipe(
        delay(1000) // simulate network delay
      );
    };
  }




}
