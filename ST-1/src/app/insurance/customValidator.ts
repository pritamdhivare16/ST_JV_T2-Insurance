import { AbstractControl, ValidationErrors, ValidatorFn, FormGroup, Validator } from '@angular/forms';

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

// fn for phone number
export function noSpecialChValidator():ValidatorFn{
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!/[^\W_]*$/.test(value)){
      return {containsSpecialChars: true };
    }
    return null;
  };
}
