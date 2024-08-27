import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validators: this.matchPassword('password', 'confirmPassword')
    });
  }

  matchPassword(password: string, confirmPassword: string): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const passwordControl = formGroup.get(password);
      const confirmPasswordControl = formGroup.get(confirmPassword);

      if (confirmPasswordControl?.errors && !confirmPasswordControl.errors['mustMatch']) {
        return null;
      }

      if (passwordControl?.value !== confirmPasswordControl?.value) {
        confirmPasswordControl?.setErrors({ mustMatch: true });
        return { mustMatch: true };
      } else {
        confirmPasswordControl?.setErrors(null);
        return null;
      }
    };
  }

  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
      return;
    }

    console.log('Form data:', this.registerForm.value);
  }

  get f() {
    return this.registerForm.controls;
  }
}
