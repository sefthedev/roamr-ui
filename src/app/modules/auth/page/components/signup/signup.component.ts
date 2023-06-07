import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  termsChecked: boolean = false;
  showPassword: boolean = false;
  @Output() signin: EventEmitter<void> = new EventEmitter<void>();

  signupForm = new FormGroup({
    email: new FormControl(''),
    username: new FormControl(''),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/),
    ]),
    checkbox: new FormControl(false, Validators.requiredTrue),
  });

  get passwordControl() {
    return (
      this.signupForm.get('password')?.touched &&
      this.signupForm.get('password')?.invalid
    );
  }

  get checkboxControl() {
    return (
      this.signupForm.get('checkbox')?.touched &&
      this.signupForm.get('checkbox')?.invalid
    );
  }

  get emailControl() {
    return (
      this.signupForm.get('email')?.touched &&
      this.signupForm.get('email')?.invalid
    );
  }

  get usernameControl() {
    return (
      this.signupForm.get('username')?.touched &&
      this.signupForm.get('username')?.invalid
    );
  }

  ngOnInit(): void {}

  hidePassword() {
    this.showPassword = !this.showPassword;
  }

  checkTerms() {
    this.termsChecked = !this.termsChecked;
  }

  onSubmit() {
    console.log('submit');
    console.log(this.signupForm.value.password);
  }
}
