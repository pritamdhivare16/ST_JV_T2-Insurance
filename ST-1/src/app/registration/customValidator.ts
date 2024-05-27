import { AbstractControl, ValidationErrors, ValidatorFn, FormGroup } from '@angular/forms';
// fn for matching passwords
export function confirmPasswordValidator(password: string, confirmPassword: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const passwordControl = control.get(password);
    const confirmPasswordControl = control.get(confirmPassword);

    if (!passwordControl || !confirmPasswordControl) {
      return null;
    }

    const passw = passwordControl.value;
    const confirm = confirmPasswordControl.value;

    if (passw !== confirm) {
      confirmPasswordControl.setErrors({ mismatchedPasswords: true });
      return { mismatchedPasswords: true };
    } else {
      confirmPasswordControl.setErrors(null);
      return null;
    }
  };
}

//fn for first, middle and last name


export function noNumbersValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!/^[^\d\W_]*$/.test(value)) {
      return { containsNumbersOrSpecialChars: true };
    }
    return null;
  };
}

