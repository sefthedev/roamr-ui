import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { FirebaseAuthService } from '@app/core/firebase-auth/firebase-auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  termsChecked: boolean = false;
  showPassword: boolean = false;
  isSubmitted: boolean = false;
  @Output() signin: EventEmitter<void> = new EventEmitter<void>();

  constructor(private firebaseAuthService: FirebaseAuthService) {}

  signupForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/),
    ]),
    checkbox: new FormControl(false, Validators.requiredTrue),
  });

  get passwordControl() {
    return this.isSubmitted && this.signupForm.get('password')?.invalid;
  }

  get checkboxControl() {
    return this.isSubmitted && this.signupForm.get('checkbox')?.invalid;
  }

  get emailControl() {
    return this.isSubmitted && this.signupForm.get('email')?.invalid;
  }

  get usernameControl() {
    return this.isSubmitted && this.signupForm.get('username')?.invalid;
  }

  ngOnInit(): void {}

  hidePassword() {
    this.showPassword = !this.showPassword;
  }

  checkTerms() {
    this.termsChecked = !this.termsChecked;
  }

  onSubmit() {
    const email = this.signupForm.get('email')?.value;
    const password = this.signupForm.get('password')?.value;
    const username = this.signupForm.get('username')?.value;

    if (email && password && username) {
      this.firebaseAuthService.SignUp(email, password, username)
    }
    this.isSubmitted = true;
  }
}
